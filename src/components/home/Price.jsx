import React from 'react'

import './Prices.css'

const Price = () => {
  return (
    <>
    <div className='prices d-flex justify-content-evenly align-items-center mt-5'>
        <div className="price-items">
        <img src="images/prices.png" alt="" />
            <p>
                <b>Top Quality</b> <br />
                products</p>
        </div>
        <div className="price-items">
        <img src="images/quality.png" alt="" />
            <p>
                <b>Top Quality</b> <br />
                products</p>
        </div>
        <div className="price-items">
        <img src="images/delivery.png" alt="" />
            <p>
                <b>Free Delivery</b> <br />
                Across India</p>
        </div>
    </div>
    </>
  )
}


export  default Price;