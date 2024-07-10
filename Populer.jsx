import React from "react"
import './Popular.css'
import data_product from "../Assests/data"
import Item from "../Items/Items"

const Popular = () => {
    return (
        <div className="popular">
            <h1> POPULAR IN WOMEN </h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name}
                     image={item.image} new_price={item.new_price}
                      old_price={item.old_price} rating={item.rating}
                       pruductbuycount={item.pruductbuycount} assuredImage={item.assuredImage} starimg={item.starimg}/>
                })}
            </div>
        </div>
    )
}
export default Popular;
