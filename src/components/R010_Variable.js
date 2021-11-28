import React, { Component } from 'react'

export default class R010_Variable extends Component {
//위의 문장이 맨 밑에 붙여야 할 export default R010_Variable 을 대신함.

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    var varName = 'react';
    console.log('varName1 : '+varName);
    var varNmae = '200'; //'varNma' is already defined no-redeclare
    console.log('varNmae2 : '+varNmae);

    let letName = 'react';
    console.log('letNmae1 : '+letName);
    //let letNmae = '200'
    //Parsing ERROR : Identifier 'letNmae' ha salready been declared
    letName = 'react200';
    console.log('letNmae2 : '+letName);

    const constName = 'react';
    console.log('constName : '+constName);
    // const constname = '200'
    //Parsing ERROR : Identifier 'constName' has already been declared
    //const Naame = 'react200'
    //Uncaught TypeError : Assignment to constant variable

  }

  render() {
    return (
<h2>[THIS IS Variable]</h2>
    )
  }
}
