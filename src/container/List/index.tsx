import React from 'react'
import { LyxHeader } from 'lyxcool-test'
import useTitle from '~/component/UseTitle'
import './style.less'

export default () => {
  useTitle('测试')
  return (
    <div className="list">
      <img src={require('../../images/avatar.jpg')} alt="" />
      <LyxHeader lang="zh_CN" title="测试" />
    </div>
  )
}