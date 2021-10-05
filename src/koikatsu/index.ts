import express, { Request } from 'express'

import { INewPose, ILoopRequest } from './model'

import { Handy } from '../handy'
import { error, info } from '../base/logger'

import { AnimationMode, calcAutoSpeed, getAnimationMode } from './animation'
import { scriptedPoses } from './animation/clip'
import { calcStartTime } from './animation/csv'
import { SupportedState } from './animation/index'

const router = express.Router()

export const user = new Handy(process.env.HANDY_KEY!, 'https://www.handyfeeling.com/api/handy/v2')

router.all('/', (_, res) => {
  res.send({
    hello: 'hi'
  })
})

router.post('/newPose', async (req: Request<unknown, unknown, INewPose>, res) => {
  info('KK: new pose')

  try {
    const model = req.body
    const pose = user.changePose(model.nameAnimation)
    if (!pose) {
      return
    }

    const mode = getAnimationMode(model.nameAnimation)
    if (mode === null) {
      throw new Error(`${model.nameAnimation} is not supported animation`)
    }
    info(`${user.handyKey}: ${model.nameAnimation} is ${mode === AnimationMode.SCRIPT ? 'script' : 'auto'} animation`)
    await user.setMode(mode)

    if (mode === AnimationMode.SCRIPT) {
      const clip = scriptedPoses.find(p => p.aliases.includes(pose))
      if (!clip) {
        throw new Error(`${pose} is unsupported pose`)
      }
      await user.uploadPose(clip?.csv)
      info(`${user.handyKey}: Script is ready`)
    }
  } catch (err) {
    error(err)
  } finally {
    res.send()
  }
})

router.post('/loop', async (req: Request<unknown, unknown, ILoopRequest>, res) => {
  try {
    const model = req.body
    if (user.animation === null) {
      error(`${user.handyKey}: animationName is null`)
      return
    }

    const response = user.animationStateChange(model.animState, user.animation)
    if (user.mode === AnimationMode.SCRIPT) {
      if (!response.changed && response.newState !== null) {
        if (user.throttleRequests()) {
          return
        }
        const time = calcStartTime(model.stateInfo, user.animation!, response.newState)
        await user.syncAdjustTimeStamp(time)
      } else if (!response.changed && response.newState === null) {
        // idle no change
      } else if (response.newState === null) {
        await user.pause()
      } else if (response.started) {
        await user.play()
      } else {
        const time = calcStartTime(model.stateInfo, user.animation!, response.newState)
        await user.syncAdjustTimeStamp(time)
      }
    } else {
      if (!response.changed && user.throttleRequests()) {
        return
      }
      await user.setVelocity(calcAutoSpeed(model.animState as SupportedState, model.speed))
    }
  } catch (err) {
    error(err)
  } finally {
    res.send()
  }
})

router.post('/speedChg', async (req: Request<unknown, unknown, ILoopRequest>, res) => {
  try {
    const model = req.body
    await user.syncAdjustTimeStamp(calcStartTime(model.stateInfo, user.animation, user.animationState))
  } catch (err) {
    error(err)
  } finally {
    res.send()
  }
})

router.get('/stop', async (_, res) => {
  try {
    await user.pause()
    await user.syncTime()
  } catch (err) {
    error(err)
  } finally {
    res.send()
  }
})

router.all('*', (req, res) => {
  error(`${req.method ?? '????'} ${req.url} ${JSON.stringify(req.params) ?? ''} ${JSON.stringify(req.body) ?? ''}`)
  res.send()
})

export default router
