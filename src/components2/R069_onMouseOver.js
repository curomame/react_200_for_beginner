import React, { Component } from 'react'

export default class R069_onMouseOver extends Component {

  MouseOver(tag){
    console.log('TAG : '+tag);
  }

  render() {
    return (
      <>
        <div onMouseOver= { e => this.MouseOver("div")}>
        <h3>DIV MouseOver</h3>
        </div>
        <input type="text" onMouseOver={ e => this.MouseOver("input")}/>
        <select onMouseOver = {e => this.MouseOver("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    )
  }
}
