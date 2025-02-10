import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cform from './Cform';
import Cmap from './Cmap';

const Contactus = () => {
  return (
    <>
    <Container>
      <h1 className='text-center my-5'>Conatct Us</h1>
      <Row>
        <Col> <Cform/> </Col>
        <Col> <Cmap/> </Col>
      </Row>
    </Container>
    </>
  )
}


export  default Contactus;