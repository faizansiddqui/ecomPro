import React from "react"
import './NewCollection.css'
import new_collection from '../Assests/new_collections'
import Item from "../Items/Items"

const Newcollection = () => {
    return (
        <div className="new-collection">
            <h1> NEW COLLECTIONS </h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} 
                    new_price={item.new_price} old_price={item.old_price}  rating={item.rating} 
                    starimg={item.starimg} assuredImage={item.assuredImage} pruductbuycount={item.pruductbuycount}/>
                })}
            </div>
        </div>
    )
}

export default Newcollection;
