import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import screen from '@/ScreenSize'
import fetch from '~/utils/fetch'
import './style.less'

@hot
@screen
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    // this.getBlog()
  }

  getBlog = () => {
    const apiUrl = process.env.API_URL
    fetch({
      url: `${apiUrl}/example/testData`,
    }).then(res => {
      if (res.data.code === 1) {
        this.setState({
          message: res.data.message,
        })
      }
    })
  }

  login = () => {
    const apiUrl = 'http://localhost:3000/api'
    fetch({
      url: `${apiUrl}/admin/login`,
      params: {
        password: 123
      }
    }).then(res => {
      console.log(res)
    })
  }

  getInfo = () => {
    const apiUrl = 'http://localhost:3000/api'
    fetch({
      url: `${apiUrl}/admin/getInfo`
    }).then(res => {
      console.log(res)
    })
  }


  render() {
    const { screenSize } = this.props
    console.log(screenSize)
    return (
      <div className="main">
        <Link to="/list">跳转list页</Link>
        <br />
        {this.state.message}
        <Button onClick={() => { this.login() }}>点击登录</Button>
        <Button onClick={() => { this.getInfo() }}>获取信息</Button>
      </div>
    )
  }
}

export default Main
