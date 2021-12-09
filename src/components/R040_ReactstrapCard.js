import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'


export default class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top height="200px" src="http://bitly.kr/4KkfRxZfR" alt="Card image"/>
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardSubtitle>Card Sub</CardSubtitle>
            <CardText>Card Text</CardText>
            <Button>button</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
