import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import fetch from '~/utils/fetch'
import screen from '@/ScreenSize'
import './style.less'

@hot
@screen
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog = () => {
    const apiUrl = process.env.API_URL
    fetch({
      url: `${apiUrl}/example/testData`,
    }).then((res) => {
      if (res.data.code === 1) {
        this.setState({
          message: res.data.message,
        })
      }
    })
  }

  render() {
    const { screenSize } = this.props
    console.log(screenSize)
    return (
      <div>
        <Link to="/list">跳转list页</Link>
        <br />
        {this.state.message}
        <Card title="Default size card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default Main
