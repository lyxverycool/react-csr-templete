import axios from 'axios'
import { getCookie } from '~/utils'

interface RequestFace {
  url: string,
  params?: any
  method?: string
  withCredentials?: boolean
  data?: any
  timeout?: number
}

const fetch = (request: RequestFace) => {
  const options: RequestFace = { ...request }
  if (options.method === 'GET') {
    options.params = {
      ...options.params,
      t: new Date().getTime(),
    }
  }
  // axios.defaults.crossDomain = true
  axios.defaults.headers.common.Authorization = `Bearer ${getCookie('lyxTooken')}`
  return axios(options as any)
    .then(res => res.data)
    .catch(err => {
      console.warn(11)
      return err
    })
}

export default fetch
