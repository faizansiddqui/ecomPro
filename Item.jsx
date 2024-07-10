import React, { useContext } from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/shopContext";


const Item = (props) => {

  const {calculateOff} = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>

      <div className="rating-saling-count">
        <div className="product-rating">
         <span>{props.rating}  </span> <img src={props.starimg} alt="" />
        </div>
        <div className="product-sale-count">
          {`(${props.pruductbuycount})`}
        </div>
        <div className="assured">
          <img src={props.assuredImage} alt="" />
        </div>
      </div>

      <div className="item-prices">
        <div className="item-price-old">
        ₹{props.old_price}
        </div>
        <div className="item-price-new">
        ₹{props.new_price}
        </div>
        <div className="off-is">
         {calculateOff(props.id)}% off
      </div>

      </div>
    </div>
  );
}

export default Item;
