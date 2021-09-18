import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, dispatch ] = useReducer(CartReducer, {
        shoppingcart: [],
        qty: 0,
        totalPrice: 0,
    });

    return (
        <cartContext.Provider value={{ ...cart, dispatch }}>
            {children}
        </cartContext.Provider>
    )
} 
