import { AxiosInstance } from 'axios'

export const startHAMP = (fetch: AxiosInstance) => fetch.put<any, { result: number }>('/hamp/start')

export const stopHAMP = (fetch: AxiosInstance) => fetch.put<any, { result: number }>('/hamp/stop')

export const setVelocity = (fetch: AxiosInstance, value: number) =>
  fetch.put<any, { result: number }>('/hamp/velocity', {
    velocity: value
  })
