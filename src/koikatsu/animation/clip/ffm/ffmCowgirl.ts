import { LoopType } from '../../index'
import { IInfoPose } from '..'

const ffmCowgirl: IInfoPose = {
  aliases: ['騎乗位クンニ', '3P Cowgirl', '騎乗位クンニ入れ替え', '3P Cowgirl Switch'],
  states: [
    {
      names: ['Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.8,
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
          position: 25
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 0
        },
        {
          time: 0.5,
          position: 50
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
          position: 0
        },
        {
          time: 0.5,
          position: 60
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
          position: 90
        }
      ],
      baseSpeed: 0.7,
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'ffmCg.csv',
    sha256: '4ceee39b29bf8de3aef3f02cee35c87cc7f3e9d12ceb2891e02e2975bdd65bbf',
    size: 24899
  }
}

export default ffmCowgirl
