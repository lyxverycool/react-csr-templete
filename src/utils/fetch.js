import axios from 'axios'

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
  return axios(options)
    .then(res => res.data)
    .catch(err => {
      console.warn(err)
    })
}

export default fetch
