import { AxiosInstance } from 'axios'
import { AnimationMode } from '../../koikatsu/animation'

export enum HandyMode {
  HAMP,
  HSSP,
  HDSP,
  MAINTENANCE
}

interface IError {
  connected: boolean
  name: string
  message: string
  code: number
  data: any
}

interface IStatus {
  mode: number
  state: number
  error: IError
}

export const getStatus = (fetch: AxiosInstance) => fetch.get<IStatus>('/status')

export const setMode = async (fetch: AxiosInstance, mode: AnimationMode) =>
  fetch.put<any, { result: number }>('/mode', {
    mode: mode === AnimationMode.SCRIPT ? HandyMode.HSSP : HandyMode.HAMP
  })
