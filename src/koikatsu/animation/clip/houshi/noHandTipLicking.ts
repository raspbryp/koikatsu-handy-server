import { IInfoPose } from '..'
import { LoopType } from '../../index'

const noHandTipLicking: IInfoPose = {
  aliases: ['Seated No-Hand Tip Licking', '椅子ノーハンド先舐め'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 80
        },
        {
          time: 0.5,
          position: 100
        }
      ],
      baseSpeed: 2,
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 75
        },
        {
          time: 32 / 80,
          position: 100
        }
      ],
      baseSpeed: 2,
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 80
        },
        {
          time: 0.5,
          position: 100
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
      strokes: [
        {
          time: 0,
          position: 0
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'nhtl.csv',
    sha256: '645b33bac25e6bf88c5878934f7ca32bd9ef550479a36b9c7506d4c16805998c',
    size: 44630
  }
}

export default noHandTipLicking
