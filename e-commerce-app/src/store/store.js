import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productSlice/ProductSlice";

export const store = configureStore({
reducer:{
    
    productSlice: productReducer,
}
})