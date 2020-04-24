import React from 'react'
import { LyxHeader } from 'lyxcool-test'
import './style.less'

export default () => (
  <div className="list">
    <img src={require('../../images/avatar.jpg')} alt="" />
    <LyxHeader lang="zh_CN" title="测试" />
  </div>
)
