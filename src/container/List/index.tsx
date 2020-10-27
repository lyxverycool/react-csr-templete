import React from 'react'
import { LyxHeader } from 'lyxcool-test'
import useTitle from '@/UseTitle'
import './style.less'
import { hot } from 'react-hot-loader/root'

const List = () => {
  useTitle('测试')
  return (
    <div className="list">
      <img src={require('../../images/avatar.jpg')} alt="" />
      <LyxHeader lang="zh_CN" title="test" />
    </div>
  )
}

export default hot(List)