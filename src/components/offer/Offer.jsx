import React from "react";
import OfferCanvas from "./OfferCanvas";

const Offer = () => {
    return (
        <>
          {['end'].map((placement, idx) => (
            <OfferCanvas key={idx} placement={placement} name={placement} />
          ))}
        </>
      );
}


export  default Offer;