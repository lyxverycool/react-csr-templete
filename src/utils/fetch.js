import axios from 'axios'
import { message } from 'antd'

const API_PATH = process.env.API_PATH || ''

const fetch = ({ url, params, method = 'GET', data }) => {
  console.log(url)
  const options = {
    url: url,
    method,
    params,
    data,
    timeout: 10000,
    withCredentials: true
  }
  if (method === 'GET') {
    options.params = {
      ...options.params,
      t: new Date().getTime()
    }
  }
  return axios(options)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.warn(err)
    })
}

export default fetch
