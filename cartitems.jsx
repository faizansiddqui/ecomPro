import React, { useContext } from "react";
import './CartItem.css'
import { ShopContext } from '../../Context/shopContext';
import remove_icon from '../Assests/cart_cross_icon.png'


const CartItem = (e)=>{
    const {getTotalCartAmount, all_product, cartItems, removeFromCarts} = useContext(ShopContext);
    return(
        <div className="cartItems">
            <div className="cartitems-format-main">
                <span>Product</span>
                <span className="title">Title</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Remove</span>
            </div>
            <hr />
           
            {all_product.map((e, i)=>{
                if(cartItems[e.id]>0){
                    return  <div key={i}>
                    <div  className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <span>{e.name}</span>
                        <span>${e.new_price}</span>
                        <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                        <span>${e.new_price*cartItems[e.id]} </span>
                        <img className="cartItems-remove-icon" src={remove_icon} onClick={()=>{removeFromCarts(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>;
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1> Cart Totals </h1>
                    <div>
                        <div className="cartitems-total-items">
                            <span>Subtotal</span>
                            <span> ${getTotalCartAmount()} </span>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <span> Shipping Fee</span>
                            <span> Free</span>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3> Total </h3>
                            <h3> ${getTotalCartAmount()} </h3>
                        </div>
                    </div>
                    <button> PROCEED TO CHECKOUT </button>
                </div>
                <div className="cartitems-promocode">
                    <span> If you have promo code, Enter it here</span>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code Enter Here"/>
                        <button> Submit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
