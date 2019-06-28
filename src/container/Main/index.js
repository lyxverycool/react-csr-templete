import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DatePicker, Button } from 'antd';
import fetch from '../../utils/fetch'
import screenSize from '../../component/ScreenSize'
import '../../assets/index.less'
import './index.less'

@screenSize
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBlog = () => {
    const apiUrl = process.env.API_URL
    const params = {
      page: 1,
      limit: 8
    }
    console.log(apiUrl)
    fetch({
      url: `${apiUrl}/api/blog/getBlogList`,
      params
    }).then(res => {
      if (!res.status) return
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <Link to='/list'>跳转list页面</Link>
        <div>
          <Button type="primary" onClick={this.getBlog}>获取数据</Button>
        </div>
        <DatePicker />
      </div>
    )
  }
}

