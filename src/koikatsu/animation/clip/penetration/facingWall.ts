import { LoopType } from '../../index'
import { IInfoPose } from '..'

const facingWall: IInfoPose = {
  aliases: ['Leg Lifted Facing Against Wall', '壁対面片足上げ'],
  states: [
    {
      names: ['Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.4,
          position: 0
        }
      ],
      type: LoopType.SINGLE
    },
    {
      names: ['InsertIdle'],
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
          position: 5
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
          position: 65
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
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 0
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
      names: ['M_IN_Start', 'M_IN_Loop', 'WF_IN_Start', 'WF_IN_Loop', 'WS_IN_Start', 'WS_IN_Loop'],
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
      names: ['IN_A', 'WS_IN_A', 'M_OUT_Loop', 'M_OUT_Start'],
      strokes: [
        {
          time: 0,
          position: 15
        },
        {
          time: 0.5,
          position: 45
        }
      ],
      baseSpeed: 2,
      type: LoopType.STATIC
    },
    {
      names: ['OUT_A', 'Drop', 'Idle', 'Pull'],
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
    name: 'sfw.csv',
    sha256: '9309591fd2637fbe0263c878c0ef0974e28c4feda9488a2d05f490a88f184e25',
    size: 24790
  }
}

export default facingWall
