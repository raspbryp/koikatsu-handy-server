import { LoopType } from '../../index'
import { IInfoPose } from '..'

const masturbateFinger: IInfoPose = {
  aliases: ['Masturbating While Standing', 'Standing masturbation', '立ちオナニ', 'Masturbating In Chair', 'Chair masturbation', '椅子オナニー'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 65
        },
        {
          time: 0.425,
          position: 10
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['MLoop'],
      strokes: [
        {
          time: 0,
          position: 80
        },
        {
          time: 0.475,
          position: 0
        }
      ],
      baseSpeed: 1.5,
      type: LoopType.STATIC
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
          position: 50
        }
      ],
      baseSpeed: 2.5,
      type: LoopType.STATIC
    },
    {
      names: ['OLoop'],
      strokes: [
        {
          time: 0,
          position: 10
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
      names: ['Orgasm'],
      strokes: [
        {
          time: 0,
          position: 30
        },
        {
          time: 0.5,
          position: 80
        }
      ],
      baseSpeed: 2,
      type: LoopType.STATIC
    },
    {
      names: ['Orgasm_A', 'Orgasm_B'],
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
      type: LoopType.STATIC
    }
  ],
  csv: {
    name: 'mtb.csv',
    sha256: 'fd3f211d7a67ba592b75a75ab8fc312701c91a68f87120032283d947a0beddae',
    size: 2230
  }
}

export default masturbateFinger
