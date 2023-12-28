import React from 'react';
import { Modal, Container, Button } from 'react-bootstrap';

export default function SingleAdminUserModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Admin Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
           <div>
              Single Admin user information view
           </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}
