
import React from 'react'
// import { LyxHeader } from 'lyxcool-test'
import useTitle from '@/UseTitle'
import useFetch from '@/UseFetch'
import './style.less'
import { hot } from 'react-hot-loader/root'

const List = () => {
  const { loading, doFetch, resData } = useFetch({ url: 'http://localhost:3000/api/list/queryListAll' })
  useTitle('测试')
  return (
    <div className="list">
      <img src={require('../../images/avatar.jpg')} alt="" />
      {/* <LyxHeader lang="zh_CN" title="test" /> */}
    </div>
  )
}

export default hot(List)