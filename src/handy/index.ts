import { AxiosInstance } from 'axios'

import { createFetcher } from '../base/fetcher'

import { getStatus, setMode } from './api/base'
import { setVelocity, startHAMP, stopHAMP } from './api/hamp'
import { HSSPSetupState, playHSSP, setupHSSP, stopHSSP } from './api/hssp'
import { syncHSTP } from './api/hstp'

import { AnimationMode, isAnimationState, SupportedAnimations, SupportedState, getAnimationMode, isAutoAnimation, isSameAnimationStates } from '../koikatsu/animation'
import { ICsv } from '../koikatsu/animation/clip'
import { isSameCsvAnimationStates } from '../koikatsu/animation/csv'

import { error, info, warn } from '../base/logger'

const SCRIPT_THROTTLE = 9 * 1000
const AUTO_THROTTLE = 1000

export class Handy {
  private _ready: boolean = true
  private _enabled: boolean = true
  private _handyKey: string
  private _fetcher: AxiosInstance
  private _mode: AnimationMode = AnimationMode.SCRIPT
  private _animation: SupportedAnimations | null = null
  private _animationState: SupportedState | null = null
  private _lastAdjust = Date.now()

  public constructor(handyKey: string, baseURL: string) {
    this._handyKey = handyKey
    this._fetcher = createFetcher(handyKey, baseURL)
  }

  public get handyKey() {
    return this._handyKey
  }

  public get mode() {
    return this._mode
  }

  public get animation() {
    return this._animation
  }

  public set animationState(value: SupportedState | null) {
    this._animationState = value
  }
  public get animationState() {
    return this._animationState
  }

  private isReadyAndEnable() {
    if (!this._ready) {
      return false
    }

    if (!this._enabled) {
      warn(`${this._handyKey}: not enabled`)
    }
    return true
  }

  public changePose(animation: string) {
    if (getAnimationMode(animation) !== null) {
      info(`${this._handyKey}: ${animation} is supported pose`)
      this._animation = animation as SupportedAnimations
      return animation as SupportedAnimations
    } else {
      error(`${this._handyKey}: ${animation} is not supported pose`)
      return null
    }
  }

  public animationStateChange(state: string, animation: SupportedAnimations) {
    const oldState = this._animationState
    const newState = isAnimationState(state) ? (state as SupportedState) : null
    this._animationState = newState

    if (isAutoAnimation(animation)) {
      return {
        changed: !isSameAnimationStates(newState, oldState),
        newState,
        started: false
      }
    }

    if (isSameCsvAnimationStates(animation, newState, oldState)) {
      return {
        changed: false,
        newState,
        started: false
      }
    } else {
      return {
        changed: true,
        newState,
        started: oldState === null
      }
    }
  }

  public throttleRequests() {
    const now = Date.now()
    const throttle = this._mode === AnimationMode.SCRIPT ? SCRIPT_THROTTLE : AUTO_THROTTLE
    if (now - this._lastAdjust > throttle) {
      this._lastAdjust = now
      return false
    }
    return true
  }

  public async isConnected() {
    if (!this._enabled) {
      throw new Error(`${this._handyKey}: not enabled`)
    }

    const response = await getStatus(this._fetcher)
    if (response.data.error) {
      const errorInfo = response.data.error
      error(`${this._handyKey}: ${errorInfo.name} -> ${errorInfo.message}`)
      return false
    }
    return true
  }

  public async setMode(mode: AnimationMode) {
    if (this._mode === mode) {
      return
    }

    try {
      this._ready = false
      const response = await setMode(this._fetcher, mode)

      // Error
      if (response.result === -1) {
        throw new Error(`${this._handyKey}: setMode failed!`)
      }
      this._mode = mode

      if (mode === AnimationMode.AUTO) {
        const response = await startHAMP(this._fetcher)
        if (response.result === -1) {
          throw new Error(`${this._handyKey}: startHAMP failed!`)
        }
        info(`${this._handyKey}: mode HAMP`)
      }
    } finally {
      this._ready = true
    }
  }

  public async uploadPose(csv: ICsv) {
    try {
      this._ready = false

      const response = await setupHSSP(this._fetcher, csv)
      switch (response.result) {
        case HSSPSetupState.SYNC_REQUIRED:
          throw new Error(`${this._handyKey}: pose not synced`)
        case HSSPSetupState.DOWNLOAD_ERROR:
          throw new Error(`${this._handyKey}: pose download error`)
      }
      info(`${this._handyKey}: setupHSSP`)
    } finally {
      this._ready = true
    }
  }

  public async syncAdjustTimeStamp(time: number) {
    if (time < 0) {
      throw new Error(`${this._handyKey} Invalid time`)
    }

    if (!this.isReadyAndEnable()) {
      throw new Error(`${this._handyKey} not ready or enabled`)
    }

    const response = await playHSSP(this._fetcher, {
      estimatedServerTime: new Date().valueOf(),
      startTime: Math.round(time)
    })

    if (response.result === -1) {
      throw new Error(`${this._handyKey}: playHSSP failed!`)
    }
  }

  public async play() {
    if (!this.isReadyAndEnable()) {
      throw new Error(`${this._handyKey} not ready or enabled`)
    }

    const response = await playHSSP(this._fetcher, {
      estimatedServerTime: new Date().valueOf(),
      startTime: 0
    })

    if (response.result === -1) {
      throw new Error(`${this._handyKey}: play failed!`)
    }
    info(`${this._handyKey}: play HSSP`)
  }

  public async pause() {
    if (!this.isReadyAndEnable()) {
      throw new Error(`${this._handyKey} not ready or enabled`)
    }

    const response = await (this._mode === AnimationMode.SCRIPT ? stopHSSP(this._fetcher) : stopHAMP(this._fetcher))
    if (response.result === -1) {
      throw new Error(`${this._handyKey}: stop failed!`)
    }
    info(`${this._handyKey}: stop ${this._mode === AnimationMode.SCRIPT ? 'HSSP' : 'HAMP'}`)
  }

  public async setVelocity(value: number) {
    if (value > 100 || value < 0) {
      throw new Error(`${this._handyKey}: Invalid velocity (${value})`)
    }
    const velocity = Math.round(value)
    const response = await setVelocity(this._fetcher, velocity)
    if (response.result === -1) {
      throw new Error(`${this._handyKey}: setVelocity failed!`)
    }
    info(`${this._handyKey}: Velocity ${velocity}`)
  }

  public async syncTime() {
    const response = await syncHSTP(this._fetcher)
    if (response.result === -1) {
      throw new Error(`${this._handyKey}: setVelocity failed!`)
    }
    info(`${this._handyKey}: syncHSTP`)
  }
}
