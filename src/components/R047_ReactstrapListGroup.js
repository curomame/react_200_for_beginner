import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

export default class R047_ReactstrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color="danger"
          className="justify-content-between">Badge
          <Badge pill>200</Badge>
          </ListGroupItem>
          <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
          <ListGroupItem tag="a" href="http://example.com">Link</ListGroupItem>
          <ListGroupItem tag="button" action onClick={e => alert("button")}>Button</ListGroupItem>
        </ListGroup> 
      </>
    )
  }
}
