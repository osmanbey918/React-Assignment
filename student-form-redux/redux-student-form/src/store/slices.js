import { createSlice } from "@reduxjs/toolkit";

const slicer = createSlice({
    name: 'slicer',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    }
})

export const { increment } = slicer.actions;
export default slicer.reducer;