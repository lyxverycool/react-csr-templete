import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="test">
        222
        <div className='ss'>32233</div>
        <img src={require('../../images/avatar.jpg')} alt="" />
      </div>
    )
  }
}

