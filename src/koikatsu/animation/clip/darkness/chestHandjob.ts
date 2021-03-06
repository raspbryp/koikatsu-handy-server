import { IInfoPose } from '..'
import { LoopType } from '../../index'

const chestHandjob: IInfoPose = {
  aliases: ['Chest Massaged Handjob', '胸揉まれ手コキ'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 35
        },
        {
          time: 0.5,
          position: 75
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
          time: 0.6,
          position: 30
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 40
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
          position: 0
        },
        {
          time: 0.5,
          position: 20
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['Idle'],
      strokes: [
        {
          time: 0,
          position: 30
        },
        {
          time: 0.5,
          position: 50
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'darkHj.csv',
    sha256: 'b5f8ab71e712a0f3df8b66cd74a20c16b1cd29820724d5747430b3eed5e567e8',
    size: 21752
  }
}

export default chestHandjob
