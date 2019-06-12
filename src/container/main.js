import React, { Component } from 'react'
import Test from './test'
import '../assets/index.less'
import './index.less'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <Test />
      </div>
    )
  }
}

