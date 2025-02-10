import React from 'react'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
import './Home.css'
import Habout from './Habout';
import Hproducts from './Hproducts';
import Offer from '../offer/Offer';
import Testimonials from './Testimonials';
import Price from './Price';


const Home = () => {
  return (
    <>
   <Carousel fade>
      <Carousel.Item>
        <Image className='carousel-image' src='images/home-1.webp' fluid/>
        {/* <Carousel.Caption className='main-body'>
        <h1>Welcome to</h1>
          <h2>Smartcage Factory</h2>
          <Button variant="primary">More Info</Button>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <Image className='carousel-image' src='images/home-2.webp' fluid/>
        {/* <Carousel.Caption className='main-body text-dark'>
          <h1>Welcome to</h1>
          <h2>Smartcage Factory</h2>
          <Button variant="primary">More Info</Button>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <Image className='carousel-image' src='images/home-3.webp' fluid/>
        {/* <Carousel.Caption className='main-body text-dark'>
        <h1>Welcome to</h1>
          <h2>Smartcage Factory</h2>
          <Button variant="primary">More Info</Button>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <Hproducts/>
    <Habout/>
    <Offer/>
    <Testimonials/>
    <Price/>
    </>
  )
}


export  default Home;