import React, { useState } from "react";
import all_product from '../Component/Assests/all_product'
import { createContext } from "react";
import ShowProduct from "../Component/Assests/showProduct";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}))
    }
    
    console.log(cartItems);``
    const removeFromCarts = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const calculateOff = (productId) => {
        const product = all_product.find(item => item.id === productId);
        if (!product) return 0;
        
        return Math.floor((product.old_price - product.new_price) / product.old_price * 100);
    }
    
    const contxtValue = {ShowProduct, all_product, cartItems, addToCart, removeFromCarts, getTotalCartAmount, getTotalCartItems, calculateOff}

    return (
        <ShopContext.Provider value={contxtValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
