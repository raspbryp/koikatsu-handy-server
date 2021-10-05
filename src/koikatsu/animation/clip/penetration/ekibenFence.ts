import { LoopType } from '../../index'
import { IInfoPose } from '..'

const ekibenFence: IInfoPose = {
  aliases: ['Ekiben Grabbing Fence', 'フェンス掴まり駅弁'],
  states: [
    {
      names: ['Insert'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.35,
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
          position: 30
        },
        {
          time: 0.5,
          position: 60
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 50
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
          position: 10
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
          position: 50
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
          position: 0
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
      names: ['OUT_A', 'Drop', 'Pull', 'Idle'],
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
    name: 'ekf.csv',
    sha256: 'd0bc4c585895b2b1bec7fcd17cc503b1422dee5c47a228671430292397b3bad4',
    size: 25311
  }
}

export default ekibenFence
