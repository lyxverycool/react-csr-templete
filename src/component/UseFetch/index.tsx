import { useState, useEffect, useCallback } from 'react'
import fetch from '~/utils/fetch'

type FetchParams = {
  url: string,
  method?: string,
  params?: object,
  lock?: boolean
}

const fetchData = ({ url, method, params = {} }: FetchParams) => new Promise((resolve: (res?: object) => void) => {
  fetch({
    url,
    params,
    method: method || 'GET'
  }).then(res => {
    console.log(res)
    resolve(res)
  }).catch(err => (err))
})

export default ({
  url,
  method,
  params,
  lock
}: FetchParams) => {
  const [loading, setLoading] = useState(false)
  const [resData, setResData] = useState({})
  const [newParams, setNewParams] = useState(params)

  const getData = useCallback(async () => {
    if (lock) return
    setLoading(true)
    try {
      const options: FetchParams = {
        url,
        method,
        params: newParams
      }
      const data = await fetchData(options)
      setResData(data)
      setLoading(false)
    } catch (error) {
      setResData({})
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newParams])

  useEffect(() => {
    getData()
  }, [getData])

  // 改变参数
  const doFetch = useCallback(
    rest => {
      setNewParams({ ...newParams, ...(rest || {}) })
    },
    [newParams]
  )

  // 刷新
  const reFetch = () => {
    setNewParams(Object.assign({}, newParams))
  }

  return {
    loading,
    resData,
    doFetch,
    reFetch
  }
}
