import React, { Component } from 'react'
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap'

export default class R051_ReactstrapPopover extends Component {
  render() {
    return (
      <>
        <Button id="Popover_id" type="button">
          Popover button
        </Button>
        <UncontrolledPopover placement="right" target="Popover_id">
          <PopoverHeader>React200</PopoverHeader>
          <PopoverBody>Aenean id magna id risus congue ornare.
            Wheyfnaksdf fnksdfnl;
          </PopoverBody>
        </UncontrolledPopover>
      </>
    )
  }
}
