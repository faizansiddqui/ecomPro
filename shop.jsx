import React from "react";
import { Hero } from "../Component/Hero/Hero";
import Popular from "../Component/Popular/Populer";
import Offer from "../Component/Offers/Offers";
import Newcollection from "../Component/NewCollection/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";
import ShowProductCart from "../Component/ShowProductCart/showProductCart";
import SimpleProduct from "../Component/SimpleProduct/SimpleProduct";

const Shop = ()=>{
    return(
        <div>
            
            <Hero/>
            <ShowProductCart/>
            <SimpleProduct />
            <Popular/>
            <Offer/>
            <Newcollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop;
