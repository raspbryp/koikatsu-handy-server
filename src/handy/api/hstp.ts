import { AxiosInstance } from 'axios'

interface ISyncHSTP {
  result: number
  time: number
  rtd: number
}

export const syncHSTP = (fetch: AxiosInstance) => fetch.put<any, ISyncHSTP>('/hstp/sync', { params: { syncCount: 6 } })
