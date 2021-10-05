import { LoopType } from '../../index'
import { IInfoPose } from '..'

const fellaHandjob: IInfoPose = {
  aliases: ['Fellatio & Handjob', 'フェラ＆手コキ'],
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
          position: 75
        }
      ],
      type: LoopType.STATIC
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
          position: 15
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 70
        },
        {
          time: 0.5,
          position: 90
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 60
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
    name: 'darkFHj.csv',
    sha256: 'ccfb492c28088847fc9aab9e700ed73ff4dd0f927541844a9a3c1b102c1aa402',
    size: 12606
  }
}

export default fellaHandjob
