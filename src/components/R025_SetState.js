import React, { Component } from 'react'

export default class R025_SetState extends Component {

  constructor(props){
    super(props);
    this.state = {
      StateString : 'react',
    }
  }

  StateChange = (flag) => {
    if(flag == 'direct') this.state.StateString = '리액트'
    if(flag == 'setState') this.setState({SateString : '리액트'})
  }

//state값은 직접 변경하지 않는다.

  render() {
    return (
      <div style={{padding:"0px"}}>
        <button onClick={(e) => this.StateChange('direct',e)}>state 직접 변경</button>
        <button onClick={(e) => this.StateChange('setState',e)}>setState로 직접 변경</button><br/>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}
