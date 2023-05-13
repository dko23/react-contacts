import React from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { EditContactsForm } from './EditContactsForm';

export default function Contact(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Form</Modal.Title>
  </Modal.Header>
  <Modal.Body>
          <h1><EditContactsForm contact={props.book} edit={props.edit}/></h1>
  </Modal.Body>
</Modal>

          <div className='col-md-3'>
          {props.book.map((contact) =>(
        <div class="card" style={{ width: '18rem' }}>
        <div class="card-body">
           <div key={contact.phone}>
           <p>{contact.name}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.location}</p>
          {/* <p>{this.props.you.id}</p> */}
        
          <div className="d-flex justify-content-between">
          <button type="button" class="btn btn-primary" onClick={() => {
    props.edit(contact.phone, contact);
    handleShow();
}}>
    Edit
</button>

            <button
              type="button"
              class="btn btn-primary"
              onClick={()=>props.delete(contact.phone)}
            >
              Delete
            </button>
          </div>
        </div>
        </div>
        </div>
      ))}
</div>
    </div>
  )
}



   
