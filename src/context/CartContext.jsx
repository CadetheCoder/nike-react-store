import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product){
        setCartItems((prevItems) => [...prevItems, product]);
    }

    function cartTotal(){
        return cartItems.length;
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartTotal, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    )
}