import { LoopType } from '../../index'
import { IInfoPose } from '..'

const paizuri: IInfoPose = {
  aliases: ['Paizuri', 'パイズリ', 'Seated Paizuri', '椅子パイズリ'],
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
          position: 30
        },
        {
          time: 0.5,
          position: 85
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
          position: 65
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
          position: 50
        },
        {
          time: 0.5,
          position: 65
        }
      ],
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'pz.csv',
    sha256: '4c3464c1cf5a55a1712911ae75f58deaf459cde3821f6da26c23599ee3560a66',
    size: 21946
  }
}

export default paizuri
