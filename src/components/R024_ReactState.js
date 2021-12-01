import React, { Component } from 'react'

export default class R024_ReactState extends Component {

  constructor(props){
    super(props);
    this.state = {
      stateString : this.props.reactString,
      StateNumber : 200,
    }
  }

  render() {
    return (
      <div>
        {this.state.stateString}{this.state.StateNumber}
      </div>
    )
  }
}

//props는 render안에서 정의하고
//state는 extends안에서 정의한다.