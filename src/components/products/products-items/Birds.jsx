import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Birds = () => {
    const products =[
        {
            id:1,
            images : "images/birds-1.webp",
            title : "Double Hole Pigeon Feeder Set",
            url : "#"
        },
        {
            id :2,
            images: "images/birds-2.webp",
            title : "Double Hole Pigeon Feeder Set",
            url :"#"
        },
        {
            id :3,
            images :"images/birds-3.webp",
            title :"30ml Hand Feeding Syringe Set",
             url :"#"
        },
        {
            id:4,
            images:"images/birds-4.webp",
            title :"Hand Feeding Syringes with Curved",
            url :"#"
        },
        {
            id :5,
            images :"images/birds-5.webp",
            title :"Bird Automatic Plastic Feeder wit",
            url :"#"
        },
        {
            id :6,
            images :"images/birds-6.webp",
            title :"Bird Feeder Water Bath tub for",
            url :"#"
        },
        {
            id :7,
            images :"images/birds-7.webp",
            title :"Bird Bath Box Bird Cage Accessory",
            url :"#"
        },
        {
            id :8,
            images :"images/birds-8.webp",
            title :"Bird House for Balcony and Garden",
            url :"#"
        }
    ];
  return (
    <>
    <Container className='mt-5'>
        <h3><b>Birds</b></h3>
        <Row>
        {products.slice(0, 4).map((val) => (
            <Col className='mt-2' md={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.images}/>
                    <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text><p><b>₹410</b><del> ₹700 </del><b className='text-success'> 40% Off</b></p></Card.Text>
                    <Button className='btn btn-dark'  href={val.url}>More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))};
        </Row>
    </Container>
    </>
  )
}


export default Birds;