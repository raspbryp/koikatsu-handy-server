import { LoopType } from '../../index'
import { IInfoPose } from '..'

const masturbateCorner: IInfoPose = {
  aliases: ['Masturbating Against Corner', 'Corner masturbation', '角オナニー'],
  states: [
    {
      names: ['WLoop'],
      strokes: [
        {
          time: 0,
          position: 85
        },
        {
          time: 0.5,
          position: 30
        }
      ],
      type: LoopType.STATIC
    },
    {
      names: ['MLoop'],
      strokes: [
        {
          time: 0,
          position: 85
        },
        {
          time: 0.55,
          position: 40
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
          position: 85
        },
        {
          time: 0.55,
          position: 45
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
          position: 80
        },
        {
          time: 0.45,
          position: 40
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
          position: 20
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
    name: 'mtbC.csv',
    sha256: 'f4aa0d52919fd1325fc1afe00a4e515eef2aa0493f05dc9c7f10fcbd8c928fbf',
    size: 2269
  }
}

export default masturbateCorner
