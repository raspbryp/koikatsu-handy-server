import { IInfoPose } from '..'
import { LoopType } from '../../index'

const twoHandHandjob: IInfoPose = {
  aliases: ['Two-Hand Handjob', '両手コキ'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 30
        },
        {
          time: 0.375,
          position: 80
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 90
        },
        {
          time: 0.61111,
          position: 25
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 45
        },
        {
          time: 0.5,
          position: 65
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['OUT_A'],
      strokes: [
        {
          time: 0,
          position: 0
        },
        {
          time: 0.5,
          position: 10
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'thh.csv',
    sha256: 'f7df7691b9097641214a529aac6a576045ca9b81caca9a6804725e59c7da49bf',
    size: 21565
  }
}

export default twoHandHandjob
