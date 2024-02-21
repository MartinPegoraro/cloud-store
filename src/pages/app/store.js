import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../../../components/Redux/MenuSlice";
import ShoppingCartReducer from "../../../components/Redux/ShoppingCart";

const store = configureStore({
    reducer: {
        menu: menuReducer,
        shoppingCart: ShoppingCartReducer
    }
})

export default store;