import { configureStore, createReducer } from "@reduxjs/toolkit";

import productReducer from "./productSlice/ProductSlice";
import cartReducer from "./cartSlice/cartSlice";

export const store = configureStore({
    reducer: {

        productSlice: productReducer,
        cartSlice: cartReducer,
    }
})