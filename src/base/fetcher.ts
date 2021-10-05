import axios, { AxiosInstance } from 'axios'
import https from 'https'

import { request } from './logger'

export const createFetcher = (connectKey: string, baseURL: string): AxiosInstance => {
  const result = axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'X-Connection-Key': connectKey },
    httpsAgent: new https.Agent({ keepAlive: true })
  })
  result.interceptors.request.use(config => {
    let method = config.method ?? '????'
    if (method.length < 4) {
      for (let i = 0; i < 4 - method.length; ++i) {
        method += ' '
      }
    }
    request(method.toUpperCase(), `${config.url ?? ''} ${JSON.stringify(config.params) ?? ''} ${JSON.stringify(config.data) ?? ''}`)
    return config
  })
  return result
}
