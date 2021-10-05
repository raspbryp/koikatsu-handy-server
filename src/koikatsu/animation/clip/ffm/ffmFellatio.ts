import { LoopType } from '../../index'
import { IInfoPose } from '..'

const ffmFellatio: IInfoPose = {
  aliases: ['Wフェラ', 'Fellatio', 'Wフェラ入れ替え', 'Fellatio Switch'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 50
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
          position: 80
        },
        {
          time: 0.5,
          position: 45
        }
      ],
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
          position: 55
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
          position: 75
        },
        {
          time: 0.5,
          position: 85
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
          position: 50
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
          position: 20
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
          position: 35
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'ffmFella.csv',
    sha256: 'ee0f376d0fcecd54ddefee47610c65abece1db687ff89fec0f132cee97785ea2',
    size: 2230
  }
}

export default ffmFellatio
