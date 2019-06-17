import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="test">
        test111
        <img src={require('../../images/avatar.jpg')} alt="" />
      </div>
    )
  }
}

