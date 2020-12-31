
import React from 'react'
import useTitle from '@/UseTitle'
import useFetch from '@/UseFetch'
import './style.less'

const List = () => {
  const { loading, doFetch, resData } = useFetch({ url: 'http://localhost:3000/api/list/queryListAll' })
  useTitle('测试')
  return (
    <div className="list">
      <img src={require('../../images/avatar.jpg')} alt="" />
    </div>
  )
}

export default List