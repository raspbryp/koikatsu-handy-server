import { LoopType } from '../../index'
import { IInfoPose } from '..'

const doggySeat: IInfoPose = {
  aliases: ['Arm-Grab Doggystyle Against Seat'],
  states: [
    {
      names: ['Insert', 'A_Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.45,
          position: 0
        }
      ],
      type: LoopType.SINGLE
    },
    {
      names: ['InsertIdle', 'A_InsertIdle'],
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
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 40
        },
        {
          time: 0.5,
          position: 0
        }
      ],
      type: LoopType.VARIABLE,
      maxMulti: 3
    },
    {
      names: ['A_WLoop'],
      strokes: [
        {
          time: 0,
          position: 35
        },
        {
          time: 0.5,
          position: 0
        }
      ],
      type: LoopType.VARIABLE,
      maxMulti: 3
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 70
        },
        {
          time: 0.4125,
          position: 0
        }
      ],
      type: LoopType.VARIABLE,
      maxMulti: 3
    },
    {
      names: ['A_SLoop'],
      strokes: [
        {
          time: 0,
          position: 75
        },
        {
          time: 0.43,
          position: 0
        }
      ],
      type: LoopType.VARIABLE,
      maxMulti: 3
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 0
        },
        {
          time: 0.5,
          position: 45
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['A_OLoop'],
      strokes: [
        {
          time: 0,
          position: 0
        },
        {
          time: 0.5,
          position: 40
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: [
        'M_IN_Start',
        'A_M_IN_Start',
        'M_IN_Loop',
        'A_M_IN_Loop',
        'WF_IN_Start',
        'A_WF_IN_Start',
        'WF_IN_Loop',
        'A_WF_IN_Loop',
        'WS_IN_Start',
        'A_WS_IN_Start',
        'WS_IN_Loop',
        'A_WS_IN_Loop'
      ],
      strokes: [
        {
          time: 0,
          position: 5
        },
        {
          time: 0.5,
          position: 30
        }
      ],
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['IN_A', 'A_IN_A', 'WS_IN_A', 'A_WS_IN_A', 'M_OUT_Loop', 'A_M_OUT_Loop', 'M_OUT_Start', 'A_M_OUT_Start'],
      strokes: [
        {
          time: 0,
          position: 10
        },
        {
          time: 0.5,
          position: 30
        }
      ],
      baseSpeed: 2,
      type: LoopType.STATIC
    },
    {
      names: ['OUT_A', 'A_OUT_A', 'Drop', 'A_Drop', 'Idle', 'A_Idle', 'Pull', 'A_Pull'],
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
    name: 'dogs.csv',
    sha256: 'a0e7ae72491de83400012a2cd4abdb46fdb9743453f1498405732bd7804cc883',
    size: 50327
  }
}

export default doggySeat
