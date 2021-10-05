import { IInfoPose } from '..'
import { LoopType } from '../../index'

const crowdedHandjob: IInfoPose = {
  aliases: ['Crowded Handjob', '密着手コキ'],
  states: [
    {
      names: ['Idle'],
      strokes: [
        {
          time: 0,
          position: 60
        },
        {
          time: 0.5,
          position: 75
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 55
        },
        {
          time: 0.5,
          position: 85
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
          time: 0.5,
          position: 50
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 65
        },
        {
          time: 0.5,
          position: 85
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
          position: 60
        },
        {
          time: 0.5,
          position: 70
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'ch.csv',
    sha256: '92576532a97b6d76cdc1faa89f1c2ee11914b1f31b48981995ae525199d2042b',
    size: 32615
  }
}

export default crowdedHandjob
