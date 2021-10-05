import dayjs from 'dayjs'

const logFormat = (tag: string, message: string) => `${dayjs().format('YYYY.MM.DD HH:mm:ss')} [${tag}] ${message}`

export const error = (log: any) => console.error(logFormat('ERR ', log.toString()))
export const info = (log: any) => console.info(logFormat('INFO', log.toString()))
export const warn = (log: any) => console.warn(logFormat('WARN', log.toString()))
export const request = (method: string, log: any) => console.log(logFormat(method, log.toString()))
