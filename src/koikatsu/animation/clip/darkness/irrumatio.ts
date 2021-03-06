import { LoopType } from '../../index'
import { IInfoPose } from '..'

const irrumatio: IInfoPose = {
  aliases: ['Irrumatio', 'イラマチオ'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 90
        },
        {
          time: 46 / 80,
          position: 50
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 80
        },
        {
          time: 0.5,
          position: 30
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 75
        },
        {
          time: 0.5,
          position: 20
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
          position: 35
        },
        {
          time: 0.5,
          position: 65
        }
      ],
      baseSpeed: 2.5,
      type: LoopType.STATIC
    },
    {
      names: ['M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 45
        },
        {
          time: 0.5,
          position: 80
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
          position: 30
        },
        {
          time: 0.5,
          position: 40
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'Idle'],
      strokes: [
        {
          time: 0,
          position: 0
        },
        {
          time: 0.5,
          position: 30
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'darkIm.csv',
    sha256: '6148a4b21a99ef8ddf2d6f9b399a3dfbe3da29c3f01237906204abe60d92f5e6',
    size: 23179
  }
}

export default irrumatio
