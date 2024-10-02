import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slice1/slice1";
export const store = configureStore({
reducer:{
    counter : slice1,
}
})