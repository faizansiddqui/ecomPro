import React, { useState } from "react";
import './cartProduct.css';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const CartProduct = (props) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

   

    return (
        <div className="cartProduct">
            <div className="cartHeader">
                <span className="likes">
                    {liked ? (
                        <IoMdHeart className="heart liked" onClick={toggleLike} />
                    ) : (
                        <IoMdHeartEmpty className="heart" onClick={toggleLike} />
                    )}
                    {props.likes}
                </span>

                <span className="off">{props.off}% Off </span>
            </div>
            <div className="cartImage">
            <Link to={`/products2/${props.id}`}> <img src={props.img1url} alt="" /> </Link> 
            </div>
            <span className="cartTitle">{props.name} </span>
        </div>
    );
};

export default CartProduct;
