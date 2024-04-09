import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../store/Context';

function DeleteModal(props) {
  const {actions}= useContext(Context)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const borrarContact=() =>{
    actions.quitarContacto(props.index)
    handleClose()
  }

  return (
    <>
      <Button variant="btn"  onClick={handleShow}>
      <FontAwesomeIcon className='mx-4' icon={faTrash} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deleting contact</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={borrarContact}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;