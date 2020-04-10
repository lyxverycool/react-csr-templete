import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import screen from '@/ScreenSize'
import fetch from '~/utils/fetch'
import './style.less'

@hot
@screen
class Main extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      status: 'login',
      user: {
        name: '',
        age: ''
      }
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

  getInfo = () => {
    const apiUrl = 'http://localhost:3000/api'
    fetch({
      url: `${apiUrl}/user/getInfo`
    }).then(res => {
      if (res.status == 1) {
        this.setState({
          user: res.data
        })
      }
    })
  }

  setStatus = status => {
    this.setState({
      status
    })
  }

  async login() {
    try {
      const userInfo = await this.formRef.current.validateFields()
      const apiUrl = 'http://localhost:3000/api'
      fetch({
        url: `${apiUrl}/admin/login`,
        method: 'post',
        data: userInfo
      }).then(res => {
        message.info(res.msg)
        if (res.status == 1) {
          message.info('点击获取信息获取用户')
        }
      })
      // eslint-disable-next-line no-empty
    } catch (error) { }
  }

  async register() {
    try {
      const userInfo = await this.formRef.current.validateFields()
      const apiUrl = 'http://localhost:3000/api'
      fetch({
        url: `${apiUrl}/admin/register`,
        method: 'post',
        data: userInfo
      }).then(res => {
        message.info(res.msg)
        if (res.status == 1) {
          this.setState({
            status: 'login'
          })
        }
      })
      // eslint-disable-next-line no-empty
    } catch (error) { }
  }

  render() {
    const { screenSize } = this.props
    const { status, user } = this.state
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    }
    console.log(screenSize)

    return (
      <div className="main">
        <br />
        {this.state.message}
        {
          !user.username && (
            <Form
              {...layout}
              ref={this.formRef}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={values => this.onFinish(values)}
              onFinishFailed={errorInfo => this.onFinishFailed(errorInfo)}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              {
                status == 'register' && (
                  <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' }]}
                  >
                    <Input />
                  </Form.Item>)
              }
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                {
                  status == 'login' &&
                  <div>
                    <Button type="primary" onClick={() => { this.login() }}>
                      登录
                    </Button>
                    <a onClick={() => { this.setStatus('register') }}>  &nbsp; &nbsp; &nbsp; 还没账号？点击注册&nbsp;</a>
                  </div>
                }
                {
                  status == 'register' &&
                  <div>
                    <Button type="primary" onClick={() => { this.register() }}>
                      注册
                    </Button>
                    <a onClick={() => { this.setStatus('login') }}>  &nbsp; &nbsp; &nbsp; 已有账号？点击登录&nbsp;</a>
                  </div>
                }
              </Form.Item>
            </Form>
          )
        }
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '30px' }}>
          <Button style={{ marginLeft: '144px' }} type="primary" onClick={() => { this.getInfo() }}>获取信息</Button>
          &nbsp;    &nbsp;
          <Link to="/list">跳转list页</Link>
          {user.username &&
            (<Card style={{ marginTop: '10px' }}>
              <p>用户信息</p>
              <p>{user.username}</p>
              <p>{user.age}</p>
             </Card>)}
        </div>
      </div>
    )
  }
}

export default Main
