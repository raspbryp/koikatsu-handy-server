import { LoopType } from '../../index'
import { IInfoPose } from '..'

const pressedPaizuri: IInfoPose = {
  aliases: ['Pressed Paizuri', '押し付けパイズリ'],
  states: [
    {
      names: ['WLoop'],
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
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 10
        },
        {
          time: 0.5,
          position: 90
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 40
        },
        {
          time: 0.5,
          position: 75
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
          position: 35
        },
        {
          time: 0.5,
          position: 55
        }
      ],
      baseSpeed: 2,
      type: LoopType.STATIC
    },
    {
      names: ['OUT_A'],
      strokes: [
        {
          time: 0,
          position: 40
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
    name: 'ppz.csv',
    sha256: 'ccb575b96f9a0be6b4f4d60045ffde30f526d7a109b700d98e59a74522fd1347',
    size: 21954
  }
}

export default pressedPaizuri
