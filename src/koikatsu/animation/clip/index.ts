import { SupportedAnimations, SupportedState, LoopType } from '..'

import paizuri from './houshi/paizuri'
import tipShaftLicking from './houshi/tipShaftLicking'
import twoHandBlowjob from './houshi/twoHandBlowjob'
import oneHandHandjob from './houshi/oneHandHandjob'
import twoHandHandjob from './houshi/twoHandHandjob'
import glansRubbing from './houshi/glansRubbing'
import onaholeHandjob from './houshi/onaholeHandjob'
import crowdedHandjob from './houshi/crowdedHandjob'
import noHandTipLicking from './houshi/noHandTipLicking'
import handjobBallLicking from './houshi/handjobBallLicking'
import oneHandBlowjob from './houshi/oneHandBlowjob'
import sittingBlowjob from './houshi/sittingBlowjob'
import benchBlowjob from './houshi/benchBlowjob'
import noHandBlowjob from './houshi/noHandBlowjob'
import handjobBallrub from './houshi/handjobBallrub'
import paizuriHigh from './houshi/paizuriHigh'
import assistedPaizuri from './houshi/assistedPaizuri'
import assistedPaizuriHigh from './houshi/assistedPaizuriHigh'
import pressedPaizuri from './houshi/pressedPaizuri'
import paizuriSucking from './houshi/paizuriSucking'
import missionary from './penetration/missionary'
import cowgirl from './penetration/cowgirl'
import facingSeated from './penetration/facingSeated'
import doggy from './penetration/doggy'
import doggyChair from './penetration/doggyChair'
import doggySeat from './penetration/doggySeat'
import doggyDesk from './penetration/doggyDesk'
import doggyWall from './penetration/doggyWall'
import doggyWallLifted from './penetration/doggyWallLifted'
import doggyLying from './penetration/doggyLying'
import doggyFence from './penetration/doggyFence'
import doggyPool from './penetration/doggyPool'
import doggyArmDesk from './penetration/doggyArmDesk'
import piledriver from './penetration/piledriver'
import doggyHorse from './penetration/doggyHorse'
import standing from './penetration/standing'
import ekiben from './penetration/ekiben'
import ekibenFence from './penetration/ekibenFence'
import facingWall from './penetration/facingWall'
import layingDesk from './penetration/layingDesk'
import matingPress from './penetration/matingPress'
import pressedBehind from './penetration/pressedBehind'
import spooning from './penetration/spooning'
import spooningDesk from './penetration/spooningDesk'
import spooningSeated from './penetration/spooningSeated'
import masturbateFinger from './onanie/masturbateFinger'
import masturbateCorner from './onanie/masturbateCorner'
import tribbing from './yuri/tribbing'
import groping from './yuri/groping'
import cunny from './yuri/cunny'
import ffmDoggy from './ffm/ffmDoggy'
import ffmCowgirl from './ffm/ffmCowgirl'
import ffmFellatio from './ffm/ffmFellatio'
import chestHandjob from './darkness/chestHandjob'
import doggyFella from './darkness/doggyFella'
import fellaHandjob from './darkness/fellaHandjob'
import irrumatio from './darkness/irrumatio'
import pinnedMissionary from './darkness/pinnedMissionary'
import pinnedSpooning from './darkness/pinnedSpooning'

interface IStroke {
  position: number
  time: number // 0<=t<1, must be greater than the previous stroke time
}

export interface ICsv {
  name: string
  size: number
  sha256: string
}

export interface IState {
  names: SupportedState[]
  strokes: IStroke[]
  /**
   * Speed in AnimStateInfo
   *
   * @default 1
   */

  baseSpeed?: number
  /**
   * Max speedMultiplier in AnimStateInfo
   *
   * @default 2.5
   */
  maxMulti?: number
  type: LoopType
}

export interface IInfoPose {
  aliases: SupportedAnimations[]
  states: IState[]
  csv: ICsv
}

export const scriptedPoses: IInfoPose[] = [
  glansRubbing,
  oneHandHandjob,
  twoHandHandjob,
  oneHandBlowjob,
  twoHandBlowjob,
  tipShaftLicking,
  onaholeHandjob,
  crowdedHandjob,
  noHandTipLicking,
  handjobBallLicking,
  handjobBallrub,
  sittingBlowjob,
  benchBlowjob,
  noHandBlowjob,
  paizuri,
  paizuriHigh,
  assistedPaizuri,
  assistedPaizuriHigh,
  pressedPaizuri,
  paizuriSucking,

  missionary,
  piledriver,
  cowgirl,
  facingSeated,
  facingWall,
  doggy,
  doggyChair,
  doggyDesk,
  doggyArmDesk,
  doggySeat,
  doggyWall,
  doggyWallLifted,
  doggyPool,
  doggyFence,
  doggyLying,
  doggyHorse,
  standing,
  ekiben,
  ekibenFence,
  layingDesk,
  matingPress,
  pressedBehind,
  spooning,
  spooningDesk,
  spooningSeated,

  masturbateFinger,
  masturbateCorner,

  tribbing,
  groping,
  cunny,

  ffmDoggy,
  ffmCowgirl,
  ffmFellatio,

  chestHandjob,
  doggyFella,
  fellaHandjob,
  irrumatio,
  pinnedMissionary,
  pinnedSpooning
]
