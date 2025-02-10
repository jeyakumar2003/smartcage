import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

const About = () => {
  return (
    <>
     <Container fluid className='bg-light mt-5'>
      <Row>
        <Col md={6}>
        <img src="images/aboutus-img.jpg" alt='' className='img-fluid' />
        </Col>
        <Col md={6} className='d-block m-auto'>
        <Container className='w-75'>
        <h1><b>About Us</b></h1>
        <p>
        Welcome to Smart Cage Factory, a leading innovator in smart and efficient cage solutions. We specialize in designing and manufacturing high-quality cages tailored for various industries, including agriculture, pet enclosures, industrial storage, and research applications.
        </p>
        <p>
        At Smart Cage Factory, we are committed to excellence, combining cutting-edge technology with durable materials to create products that enhance security, efficiency, and convenience. Our expert team continuously innovates to meet evolving customer needs, ensuring reliability and sustainability in every product we deliver.
        </p>
        <p>Whether you need customized enclosures or large-scale industrial cage solutions, we provide superior craftsmanship and unmatched service. With a focus on quality, customer satisfaction, and innovation, Smart Cage Factory is your trusted partner for advanced cage solutions.
        </p>
        <Button className='btn btn-dark'>View More</Button>
        </Container>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default About;