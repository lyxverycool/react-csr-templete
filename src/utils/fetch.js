import axios from 'axios'
import { getCookie } from '~/utils'

const fetch = ({
  url, params, method = 'GET', data,
}) => {
  const options = {
    url,
    method,
    params,
    data,
    timeout: 10000,
    withCredentials: true,
  }
  if (method === 'GET') {
    options.params = {
      ...options.params,
      t: new Date().getTime(),
    }
  }
  axios.defaults.headers.common.Authorization = `Bearer ${getCookie('lyxTooken')}`
  return axios(options)
    .then(res => res.data)
    .catch(err => {
      console.warn(err)
    })
}

export default fetch
