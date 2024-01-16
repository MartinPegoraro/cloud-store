import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../../../components/Redux/MenuSlice";


const store = configureStore({
    reducer: {
        menu: menuReducer,
    }
})

export default store;