import { LoopType } from '../../index'
import { IInfoPose } from '..'

const doggyHorse: IInfoPose = {
  aliases: ['Vaulting Horse Doggystyle', '跳び箱バック'],
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
          position: 5
        }
      ],
      type: LoopType.SINGLE
    },
    {
      names: ['InsertIdle'],
      strokes: [
        {
          time: 0,
          position: 30
        },
        {
          time: 0.5,
          position: 55
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
          position: 20
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
          position: 85
        },
        {
          time: 0.53,
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
          position: 5
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
          position: 25
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
      names: ['IN_A', 'WS_IN_A', 'M_OUT_Loop', 'M_OUT_Start'],
      strokes: [
        {
          time: 0,
          position: 25
        },
        {
          time: 0.5,
          position: 50
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
    name: 'dogh.csv',
    sha256: '3dd6b7c039d842df3c27624f78083a311e8c04572543af5010d74ad359b775a1',
    size: 25382
  }
}

export default doggyHorse
