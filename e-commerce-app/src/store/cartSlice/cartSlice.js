import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async () => {
        const response = await fetch("https://fakestoreapi.com/carts/users");
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
    reducers: {
        addtocart: (state, action) => {
            const { id, title, price, image } = action.payload;
            const existingProduct = state.carts.find((item) => item.id === id);
            if (!existingProduct) {
                state.carts.push({ id, title, price, image });
            } else {
                alert("This product is already in your cart.");
            }
        },
        deleteCart: (state, action) => {

            state.carts = state.carts.filter(
                cart => cart.id !== action.payload
            );
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            // console.log("fetch carts in reducer", action.payload);
            state.carts = action.payload;
        });
    },
});

export const { addtocart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
