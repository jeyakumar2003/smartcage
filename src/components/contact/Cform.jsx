import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Cform = () => {
  return (
    <>
    <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="yourname" />
      </FloatingLabel>
     <FloatingLabel
        controlId="floatingInput"
        label="Enter Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          className='mb-3'
        />
      </FloatingLabel>
      <Button className='btn-dark'>Sumbit</Button>
    </>
  )
}


export default Cform;