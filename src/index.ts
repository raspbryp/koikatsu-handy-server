import 'dotenv/config'
import express from 'express'

import { getVersion } from './handy/api/version'
import koikatsu, { user } from './koikatsu'

import { info, error, warn } from './base/logger'
import { downloadScripts } from './base/download'

const server = express()
server.use(express.json())
server.use(express.static('./scripts'))
server.use(koikatsu)

const start = async () => {
  if (process.env.DOWNLOAD_SCRIPT!) {
    await downloadScripts()
  }

  info('Start server...')
  const versionInfo = await getVersion(process.env.HANDY_KEY!)
  if (parseFloat(versionInfo.version) < 2) {
    error(`${user.handyKey}: version is low`)
    return
  }

  const status = await user.isConnected()
  if (!status) {
    error(`${user.handyKey} is offline`)
    return
  }

  setInterval(async () => {
    const status = await user.isConnected()
    if (!status) {
      warn(`${user.handyKey} is offline`)
    }
  }, 45 * 1000)

  info(`${process.env.HANDY_KEY!} is online`)
  server.listen(process.env.SERVER_PORT!, () => info(`Ready koikatsu handy proxy server on ${process.env.SERVER_PORT!}!`))
}

try {
  start()
} catch (err) {
  error(err)
  process.stdin.setRawMode(true)
  process.stdin.on('data', () => process.exit(1))
}
