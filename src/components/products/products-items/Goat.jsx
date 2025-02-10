import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Goat = () => {
    const products =[
        {
            id:1,
            images : "images/goatimg-1.webp",
            title : "Oral Drencher for Goat and Sheep",
            url : "#"
        },
        {
            id :2,
            images: "images/goatimg-2.webp",
            title : "Oral Feeding Syringe | Transparent",
            url :"#"
        },
        {
            id :3,
            images :"images/goatimg-3.webp",
            title :"Bottle Topper Nipple for Goat,",
             url :"#"
        },
        {
            id:4,
            images:"images/goatimg-4.webp",
            title :"Hoof Cutting Tool for Goats and",
            url :"#"
        },
        {
            id :5,
            images :"images/goatimg-5.webp",
            title :"Goat and Sheep Automatic Water",
            url :"#"
        },
        {
            id :6,
            images :"images/goatimg-6.webp",
            title :"Wooden Handled Animal Hair",
            url :"#"
        },
        {
            id :7,
            images :"images/goatimg-7.webp",
            title :"Animal Marker Non-Toxic Crayons",
            url :"#"
        },
        {
            id :8,
            images :"images/goatimg-8.webp",
            title :"Livestock Ear Tag Applicator with",
            url :"#"
        }
    ];
  return (
    <>
    <Container className='mt-5'>
        <h3><b>Goat and Sheep</b></h3>
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

export  default Goat;