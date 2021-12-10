import React, { Component } from 'react'
import { Input, InputGroup, InputGroupText, Button } from 'reactstrap'

export default class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <>
      <InputGroup>
        <Input placeholder="userid"/>
          <InputGroupText>@reactmail.com</InputGroupText>
      </InputGroup>

      <InputGroup>
      
        <Button>
          버튼
        </Button>
        <Input/>

      </InputGroup>

      
      </>
    )
  }
}
