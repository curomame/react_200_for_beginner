import React, { Component } from 'react'

import Children from './R076_ContextChildren';

const {Provider, Consumer} = React.createContext()
export {Consumer}

export default class R076_ContextApi extends Component {
  render() {
    return (
      <Provider value="React200">
        <Children/>
      </Provider>
    )
  }
}
