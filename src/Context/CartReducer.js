const CartReducer = (state, action) => {
    const { shoppingcart, qty, totalPrice } = state;

    let product;
    let updatedQty;
    let updatedPrice;

    switch(action.type) {
        case 'ADD_TO_CART':
            console.log(shoppingcart)
            const check = shoppingcart.find((product)=> product.id === action.id)
            if(check) {
                return state;
            } else {
                product = action.product;
                product["qty"] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;

                return {
                    shoppingcart: [product, ...shoppingcart],
                    qty: updatedQty,
                    totalPrice: updatedPrice,
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                shoppingcart: [...shoppingcart].filter((product) => product.id !== action.id)
            };

        default: 
            return state;
    }
};

export default CartReducer;