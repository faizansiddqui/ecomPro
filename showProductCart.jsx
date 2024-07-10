import React from "react";
import './showProduct.css'
import CartProduct from "../CartProduct/CartProduct";
import ShowProduct from "../Assests/showProduct";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FilterProduct = ShowProduct.filter((item) => item.type === 'Shoes' ||
    item.type === 'Jeans' || item.type === 'Bags' || item.type === 'Coat');

const ShowProductCart = () => {
    return (
        <div className="showProduct">
            <div className="showProductTop">
                <h1> Best Fashion </h1>
                <IoIosArrowDroprightCircle className="rightArrow" />
                  </div>
            <div className="item-data">

                {FilterProduct.map((item, i) => {
                    if (i < 4) {
                        return <CartProduct key={i} likes={item.likes} off={item.off} img1url={item.img1url} title={item.name} />
                    }
                })}

            </div>
        </div>
    )
}

export default ShowProductCart;
