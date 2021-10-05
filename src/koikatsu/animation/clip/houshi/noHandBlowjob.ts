import { LoopType } from '../../index'
import { IInfoPose } from '..'

const noHandBlowjob: IInfoPose = {
  aliases: ['Standing No-Hand Blowjob', '立ちノーハンドフェラ'],
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
          position: 30
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 65
        },
        {
          time: 0.5,
          position: 5
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 15
        },
        {
          time: 0.5,
          position: 50
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
          position: 50
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
      strokes: [
        {
          time: 0,
          position: 100
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'nhb.csv',
    sha256: 'c26d216b5b7fbdac771a30fcce2a849e430186e877cb662a9267e1d17bbba869',
    size: 21168
  }
}

export default noHandBlowjob
