import { LoopType } from '../../index'
import { IInfoPose } from '..'

const assistedPaizuriHigh: IInfoPose = {
  aliases: ['Seated Hand-Assisted Paizuri', '椅子腕はさみパイズリ'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 75
        },
        {
          time: 0.5,
          position: 100
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 100
        },
        {
          time: 0.5,
          position: 70
        }
      ],
      type: LoopType.VARIABLE
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
          position: 100
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
          position: 80
        },
        {
          time: 0.5,
          position: 100
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
          position: 80
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
    name: 'apzh.csv',
    sha256: 'af8a5256eb01c4f520f4a48d78db6bf2c4d8aa3ce7132b1921c11bceedece3fa',
    size: 23062
  }
}

export default assistedPaizuriHigh
