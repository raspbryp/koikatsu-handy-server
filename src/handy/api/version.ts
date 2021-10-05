import axios from 'axios'

interface IVersion {
  version: string
  latest: string
}

export const getVersion = (connectKey: string) => axios.get<any, IVersion>(`https://www.handyfeeling.com/api/v1/${connectKey}/getVersion`)
