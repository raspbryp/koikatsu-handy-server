import { LoopType } from '../../index'
import { IInfoPose } from '..'

const pressedBehind: IInfoPose = {
  aliases: ['Pressed From Behind', '押し付けバック'],
  states: [
    {
      names: ['Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.3,
          position: 30
        }
      ],
      type: LoopType.SINGLE
    },
    {
      names: ['InsertIdle'],
      strokes: [
        {
          time: 0,
          position: 40
        },
        {
          time: 0.5,
          position: 70
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 70
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
          position: 0
        },
        {
          time: 0.5,
          position: 60
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
      names: ['IN_A', 'WS_IN_A', 'M_OUT_Loop', 'M_OUT_Start'],
      strokes: [
        {
          time: 0,
          position: 10
        },
        {
          time: 0.5,
          position: 40
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
          position: 70
        },
        {
          time: 0.5,
          position: 95
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'pb.csv',
    sha256: '3a7c0c5185024daf2b4bab0a19b521531e5e1c7b5bc007601afc45020769b45a',
    size: 24921
  }
}

export default pressedBehind
