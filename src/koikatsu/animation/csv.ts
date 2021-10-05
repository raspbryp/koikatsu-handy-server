import { LoopType, SupportedAnimations, SupportedState } from '.'
import { IInfoPose, IState, scriptedPoses } from './clip'
import { IUnityAnimStateInfo } from '../model'

const CSV_RESOLUTION = 31
const CSV_TIME_PER_LOOP = 13 * 1000
const CSV_TIME_PER_SINGLE = 5 * 1000

const KK_SPEED_MIN = 1
const KK_SPEED_MAX = 2.5
const KK_LOOP_BASE_LENGTH = (4 / 3) * 1000

export const isSameCsvAnimationStates = (animationName: SupportedAnimations, a: SupportedState | null, b: SupportedState | null) => {
  if (a === b) {
    return true
  } else if (a === null || b === null) {
    return false
  }

  const pose = scriptedPoses.find(p => p.aliases.includes(animationName))
  if (typeof pose === 'undefined') {
    throw new Error(`This should never happen ${animationName}`)
  }

  const state = pose.states.find(s => s.names.includes(a))
  if (typeof state === 'undefined') {
    throw new Error(`This should never happen ${a}`)
  }
  return state.names.includes(b)
}

const getStateLength = (state: IState) => {
  switch (state.type) {
    case LoopType.VARIABLE:
      return CSV_TIME_PER_LOOP * CSV_RESOLUTION
    case LoopType.STATIC:
      return CSV_TIME_PER_LOOP
    case LoopType.SINGLE:
      return CSV_TIME_PER_SINGLE
  }
}

const getStateStartTimeByPose = (pose: IInfoPose, state: SupportedState) => {
  let startTime = 0
  for (const loopState of pose.states) {
    if (loopState.names.includes(state)) {
      break
    }
    startTime += getStateLength(loopState)
  }
  return startTime
}

const calcClosestInterval = (currentMulti: number, maxMulti: number) => {
  const interval = (maxMulti - KK_SPEED_MIN) / (CSV_RESOLUTION - 1)
  const closestMulti = Math.round((currentMulti - KK_SPEED_MIN) / interval) * interval + KK_SPEED_MIN

  return Number((closestMulti - KK_SPEED_MIN) / interval)
}

export const calcStartTime = (unityAnimState: IUnityAnimStateInfo, nameAnim: SupportedAnimations | null, animStateName: SupportedState | null) => {
  if (nameAnim === null || animStateName === null) {
    return -1
  }

  const anim = scriptedPoses.find(pose => pose.aliases.includes(nameAnim))
  if (typeof anim === 'undefined') {
    return -1
  }

  const animState = anim.states.find(state => state.names.includes(animStateName))
  if (!animState) {
    return -1
  }

  const stateOffset = getStateStartTimeByPose(anim, animStateName)
  const intervalOffset =
    animState.type === LoopType.VARIABLE ? calcClosestInterval(unityAnimState.speedMultiplier, animState.maxMulti || KK_SPEED_MAX) * CSV_TIME_PER_LOOP : 0
  const strokeOffset = KK_LOOP_BASE_LENGTH * (unityAnimState.normalizedTime % 1)
  return stateOffset + intervalOffset + strokeOffset
}
