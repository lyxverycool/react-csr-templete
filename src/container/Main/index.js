import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Test from './test'
import '../../assets/index.less'
import './index.less'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <Link to='/list'>跳转22list</Link>
        <Test />
      </div>
    )
  }
}

