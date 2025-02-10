import React from 'react'
import Goat from './products-items/Goat';
import Birds from './products-items/Birds';
import Dogs from './products-items/Dogs';


const Products = () => {
   
  return (
    <>
    <h1 className='text-center mt-5'>Our Products</h1>
    <Goat/>
    <Birds/>
    <Dogs/>
    </>
  )
}

export  default Products;