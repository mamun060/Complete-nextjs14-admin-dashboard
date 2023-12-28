import React from 'react';
import { Modal, Container, Button } from 'react-bootstrap';

export default function SingleUserModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
           <div>
              Single user information view
           </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      )
}
