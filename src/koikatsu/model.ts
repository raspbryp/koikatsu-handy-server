export interface INewPose {
  nameAnimation: string
}

export interface IUnityAnimStateInfo {
  normalizedTime: number
  length: number
  speedMultiplier: number
  loop: boolean
}

export interface ILoopRequest {
  animState: string
  stateInfo: IUnityAnimStateInfo
  speed: number
}
