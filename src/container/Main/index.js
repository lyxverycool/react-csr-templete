import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd';
import fetch from '../../utils/fetch'
import screenSize from '../../component/ScreenSize'
import './style.less'

@screenSize
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog = () => {
    const apiUrl = process.env.API_URL
    const params = {}
    fetch({
      url: `${apiUrl}/example/testData`,
      params
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <img src={require('../../images/avatar.jpg')} alt="" />
        <Link to='/list'>跳转list页面</Link>
        <Rate allowHalf defaultValue={2.5} />
      </div>
    )
  }
}

