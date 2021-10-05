import axios from 'axios'
import fs from 'fs'
import { scriptedPoses } from '../koikatsu/animation/clip'
import { error, info } from './logger'

export const downloadScripts = async () => {
  if (!fs.existsSync('./scripts')) {
    fs.mkdirSync('./scripts')
  }

  info('Download scripts...')
  for (let i = 0; i < scriptedPoses.length; ++i) {
    const poseInfo = scriptedPoses[i]
    const response = await axios.get(`${process.env.SCRIPT_SERVER}/${poseInfo.csv.name}`, { responseType: 'blob' })
    fs.writeFileSync(`./scripts/${poseInfo.csv.name}`, response.data, { encoding: null })
    info(`Download finish => ${poseInfo.csv.name}`)
  }
  info('Download finish!')
}
