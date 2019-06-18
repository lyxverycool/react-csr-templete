import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import screenSize from '../../component/ScreenSize'
import '../../assets/index.less'
import './index.less'

@screenSize
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <Link to='/list'>跳转list</Link>
      </div>
    )
  }
}

