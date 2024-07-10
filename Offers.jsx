import React from "react"
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offer = ()=>{
    return(
       <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PEODUCTS</p>
            <button> Cheack Now </button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image}/>
        </div>
       </div>
    )
}

export default Offer;
