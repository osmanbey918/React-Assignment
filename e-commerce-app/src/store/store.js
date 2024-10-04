import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slice1/slice1";
import productReducer from "./productSlice/ProductSlice";

export const store = configureStore({
reducer:{
    counter : slice1,
    productSlice: productReducer,
}
})