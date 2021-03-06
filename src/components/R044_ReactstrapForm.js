import React, { Component } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class R044_ReactstrapForm extends Component {
  render() {
    return (
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm" >
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>

        <Row form>
          <Col md={6}>
        <FormGroup>
        <Label for="exampleAddress">address</Label>
        <Input type="text" name="address" id="adress"/>
        </FormGroup>
          </Col>

          <Col md={4}>
        <FormGroup>
        <Label for="exampleMobile">mobile</Label>
        <Input type="text" name="mobile" id="mobile"/>
        </FormGroup>
          </Col>

          <Col md={2}>
        <FormGroup>
        <Label for="exampleAge">age</Label>
        <Input type="text" name="age" id="age"/>
        </FormGroup>
          </Col>
        
        </Row>

      </Form>
    )
  }
}
