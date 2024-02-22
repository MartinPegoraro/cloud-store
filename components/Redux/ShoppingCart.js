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
        toggleShoppingCartAddProduct: (state, { payload }) => {
            const { products } = payload;
            state.products.push(products)
        },
        toggleShoppingCartDeleteProduct: (state, { payload }) => {
            const { id } = payload;
            state.products = state.products.filter(product => product.id !== id);
            if (state.products.length <= 0) {
                state.isTrue = false
            }
        },
    },
})

export const {
    toggleVerifyShoppingCart,
    toggleShoppingCartAddProduct,
    toggleShoppingCartDeleteProduct
} = cartSlice.actions;

export default cartSlice.reducer;

export const verifyShoppingCart = (state) => state.shoppingCart.isTrue;
export const productsShoppingCart = (state) => state.shoppingCart.products;
