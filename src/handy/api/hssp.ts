import { AxiosInstance } from 'axios'
import { info } from '../../base/logger'
import { ICsv } from '../../koikatsu/animation/clip'

export enum HSSPSetupState {
  USING_CACHED = 0,
  DOWNLOADED = 1,
  DOWNLOAD_ERROR = -1,
  SYNC_REQUIRED = -20
}

export const setupHSSP = async (fetch: AxiosInstance, csv: ICsv) => {
  let url = `${process.env.SCRIPT_SERVER!}/${csv.name}`
  if (process.env.OFFLINE_SCRIPT === 'true') {
    url = `${process.env.IP!}:${process.env.SERVER_PORT!}/${csv.name}`
    info(`Self host script server: ${url}`)
  }

  return await fetch.put<any, { result: HSSPSetupState }>('/hssp/setup', {
    url,
    sha256: csv.sha256
  })
}

export const playHSSP = (fetch: AxiosInstance, content: { estimatedServerTime: number; startTime: number }) => fetch.put<any, { result: number }>('/hssp/play', content)

export const stopHSSP = (fetch: AxiosInstance) => fetch.put<any, { result: number }>('/hssp/stop')
