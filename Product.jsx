// Product.jsx

import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/shopContext";
import { useLocation, useParams } from "react-router-dom";
import Breadcrum from "../Component/Breadcrums/Breadcrums";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";

const Product = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
