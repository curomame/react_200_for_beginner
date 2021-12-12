import React, { Component } from 'react'
import { ModalBody, ModalFooter, ModalHeader,Button, Modal } from 'reactstrap';

export default class R048_ReactstrapModal extends Component {

  constructor(props){
    super(props);
    this.state = {modal: false}
  }

  toggle = () => {
    this.setState({ modal : !this.state.modal})
  }

  render() {
    return (
      <>
        <Button color="warning" onClick={this.toggle}>Modal Button</Button> 
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>
            Modal Body
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>확인</Button> 
            <Button color="secondary" onClick={this.toggle}>닫기</Button> 
          </ModalFooter>
        </Modal>
      </>
    )
  }
}
