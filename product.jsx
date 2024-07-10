import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
// import ShowProduct from "../Component/Assests/showProduct";
import Breadcrum2 from "../Component/Breadcrum2/Breadcrum2";
import ProductDisplay2 from "../ProductDisplay/ProductDisplay2";
import ShowProduct from '../../src/Component/Assests/showProduct'

const Product2 = ()=>{

    const Location = useLocation();

    useEffect(()=>{
        window.scroll(0, 0);
    },[Location]);
    
    // const { ShowProduct } = useContext(ShopContext);
    const { product2Id } = useParams();
    const product = ShowProduct.find((e) => e.id === Number(product2Id));

    if(!product){
        alert("Product Not Found")
    }
    return(
        <>
        <Breadcrum2 product={product}/>
        <ProductDisplay2 product={product}/>
        {/* <DescriptionBox />         */}
        </>
    )
}

export default Product2;
