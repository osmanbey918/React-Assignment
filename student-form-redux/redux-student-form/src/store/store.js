import { configureStore } from "@reduxjs/toolkit";
import slicer from "./slices";
import formSlice from "./formSlice";
export const store = configureStore({
    reducer: {
        add: slicer,
        form: formSlice,
    }
})