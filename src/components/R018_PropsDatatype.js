import React, { Component } from 'react';
import datatype from 'prop-types';

export default class R018_PropsDatatype extends Component {
  render() {

    let {
      String, Number, Boolean, Array, Objectjson, Function
    } = this.props;

    console.log(Boolean);
    console.log(Array);
    console.log(Objectjson);

    return (
      <div style={{padding:"0px"}}>
        <p>StringProps : {String}</p>
        <p>NumberProps : {Number}</p>
        <sapn>BooleanProps : {Boolean.toString()}</sapn>
        <p>ArryaProps : {Array.toString()}</p>
        <p>Object JsonProps : {JSON.stringify(Objectjson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    )
  }
}

R018_PropsDatatype.propTypes = {
  String : datatype.number,
  Number : datatype.number,
  Boolean: datatype.bool,
  Arrya : datatype.array,
  Objectjson : datatype.object,
  Function : datatype.func,
}