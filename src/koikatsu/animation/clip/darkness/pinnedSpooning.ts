import { LoopType } from '../../index'
import { IInfoPose } from '..'

const pinnedSpooning: IInfoPose = {
  aliases: ['Pinned Spooning', '押さえ側位'],
  states: [
    {
      names: ['Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.5,
          position: 40
        }
      ],
      type: LoopType.SINGLE
    },
    {
      names: ['InsertIdle'],
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
      type: LoopType.STATIC
    },
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 60
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
          position: 75
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
          position: 75
        },
        {
          time: 0.5,
          position: 0
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
          position: 20
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
          position: 5
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
      names: ['OUT_A', 'Drop', 'Pull'],
      strokes: [
        {
          time: 0,
          position: 100
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['Idle'],
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
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'darkSp.csv',
    sha256: '4e5757aedd8cc1741df90e50bde09322ff75302c66953a2bbb8a9a1095b6548b',
    size: 24946
  }
}

export default pinnedSpooning
