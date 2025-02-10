import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dogs = () => {
    const products =[
        {
            id:1,
            images : "images/dog-1.webp",
            title : "Pet Care Feeding Bottle with",
            url : "#"
        },
        {
            id :2,
            images: "images/dog-2.webp",
            title : "Syringe Gun Adjustable and set",
            url :"#"
        },
        {
            id :3,
            images :"images/dog-3.webp",
            title :"Easy-Fix Dog Bowl with Stand for",
             url :"#"
        },
        {
            id:4,
            images:"images/dog-4.webp",
            title :"8L Milk Feeding Bottle | 7 Silicone",
            url :"#"
        },
        {
            id :5,
            images :"images/dog-5.webp",
            title :"Stainless Steel Grooming Comb for",
            url :"#"
        },
        {
            id :6,
            images :"images/dog-6.webp",
            title :"Dog Nail Clippers for Dogs and",
            url :"#"
        },
        {
            id :7,
            images :"images/dog-7.webp",
            title :"Professional Hair Clipper for Sheep,",
            url :"#"
        },
        {
            id :8,
            images :"images/birds-8.webp",
            title :"Stainless Steel Water Bowl",
            url :"#"
        }
    ];
  return (
    <>
    <Container className='mt-5'>
        <h3><b>Dogs</b></h3>
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


export default Dogs;