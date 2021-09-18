import React, { createContext, useState } from "react";
import { Dress } from '../utils/dress'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [products] = useState(Dress)
    console.log(products)
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductContextProvider;