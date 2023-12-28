import React from 'react'
import { Button, Container, Modal } from 'react-bootstrap'

export default function SingleProductModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Using Grid in Modal
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="grid-example">
      <Container>
       <div>
        Single Product page & single view details
       </div>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button size='sm' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
