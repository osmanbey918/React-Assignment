import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async () => {
        const response = await fetch("https://fakestoreapi.com/carts/user/2");
        const data = await response.json();
        console.log("data in fetchProducts action", data);
        return data;
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: [],
    },
    reducers: {},
        extraReducers: builder => {

        builder.addCase(fetchCart.fulfilled, (state, action) => {
            console.log("fetch carts in reducer", action.payload);

            state.carts = action.payload;
        },)

    }
})


export const { deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;