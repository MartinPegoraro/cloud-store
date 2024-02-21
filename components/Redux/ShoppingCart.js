import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTrue: false,
    products: []
}

export const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        toggleVerifyShoppingCart: (state, { payload }) => {
            const { isTrue } = payload;
            state.isTrue = isTrue;
        },
        toggleShoppingCart: (state, { payload }) => {
            const { products } = payload;
            state.products.push(products)
        },
    },
})

export const {
    toggleVerifyShoppingCart,
    toggleShoppingCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const verifyShoppingCart = (state) => state.shoppingCart.isTrue;
export const productsShoppingCart = (state) => state.shoppingCart.products;
