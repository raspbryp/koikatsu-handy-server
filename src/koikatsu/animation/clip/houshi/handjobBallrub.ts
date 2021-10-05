import { IInfoPose } from '..'
import { LoopType } from '../../index'

const handjobBallrub: IInfoPose = {
  aliases: ['Standing Handjob & Ballrub', '立ち手コキ玉いじり'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 30
        },
        {
          time: 0.5,
          position: 65
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 85
        },
        {
          time: 0.61909,
          position: 40
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 50
        },
        {
          time: 0.5,
          position: 70
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['IN_Start', 'IN_Loop'],
      strokes: [
        {
          time: 0,
          position: 20
        },
        {
          time: 0.5,
          position: 35
        }
      ],
      baseSpeed: 2.5,
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
    name: 'hb.csv',
    sha256: '57f04ea9b576a785adb7bdd4b1a663595a3ea1d6f247928513545478a0175278',
    size: 22056
  }
}

export default handjobBallrub
