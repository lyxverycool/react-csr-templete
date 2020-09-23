import React from 'react'
import { LyxHeader } from 'lyxcool-test'
import useTitle from '@/ScreenSize'
import './style.less'

export default () => {
  useTitle('测试')
  return (
    <div className="list">
      22
      <img src={require('../../images/avatar.jpg')} alt="" />
      <LyxHeader lang="zh_CN" title="测试" />
    </div>
  )
}