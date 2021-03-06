import React from 'react'
import {Consumer} from "./R077_ContextApi"

class R077_ContextChildren extends React.Component {
  render () {
    return(
    <Consumer>
      {contextValue =>
      <button onClick={e => contextValue.setStateFunc("react200")}>
        {contextValue.name}_button
      </button>
        }
    </Consumer>
    )
  }
}

export default R077_ContextChildren