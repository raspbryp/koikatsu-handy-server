import { LoopType } from '../../index'
import { IInfoPose } from '..'

const assistedPaizuri: IInfoPose = {
  aliases: ['Hand-Assisted Paizuri', '腕はさみパイズリ', 'Seated Hand-Assisted Paizuri', '椅子腕はさみパイズリ'],
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
          position: 85
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['SLoop'],
      strokes: [
        {
          time: 0,
          position: 85
        },
        {
          time: 0.5,
          position: 35
        }
      ],
      type: LoopType.VARIABLE
    },
    {
      names: ['OLoop'],
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
      baseSpeed: 5,
      type: LoopType.STATIC
    },
    {
      names: ['M_OUT_Start', 'M_OUT_Loop'],
      strokes: [
        {
          time: 0,
          position: 50
        },
        {
          time: 0.5,
          position: 75
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
          position: 55
        },
        {
          time: 0.5,
          position: 70
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'apz.csv',
    sha256: 'a0356fdbc64d17f6c64ebce4df31de18b9b6c3ead64722f27fa93939bf7750c4',
    size: 21960
  }
}

export default assistedPaizuri
