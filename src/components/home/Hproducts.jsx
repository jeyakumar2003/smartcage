import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hproducts = () => {
  const products =[
    {
      id: 1,
      image :"images/goatimg-1.webp",
      title : "Goat and Sheep",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque?",
      url :"#"
    },
    {
      id: 2,
      image :"images/birds-6.webp",
      title : "Birds",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque?",
      url :"#"
    },
    {
      id: 3,
      image :"images/dog-3.webp",
      title : "Dogs",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque?",
      url :"#"
    },
    {
      id: 4,
      image :"images/rabbit-1.webp",
      title : "Rabbit",
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque?",
      url :"#"
    }
  ]
  return (
    <>
    <h1 className='text-center mt-5'>Our Products</h1>
    <Container className='mt-5'>
        <Row>
        {products.map((val) => (
            <Col className='mt-2' md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.image}/>
                    <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>{val.text} </Card.Text>
                    <Button className='btn btn-dark'  href={val.url}>Load More</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))};
        </Row>
    </Container>
    </>
  )
}


export  default Hproducts;