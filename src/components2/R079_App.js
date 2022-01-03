import React, { Component } from 'react';
import StrAddButton from './StrAddButton';

export default class R079_App extends Component {
  render() {
    return (
      <div>
        <h1>Start Eact 200!</h1>
        <span>{this.props.store.getState().data.str}</span><br/>
        <StrAddButton store={this.props.store}/>
      </div>
    )
  }
}
