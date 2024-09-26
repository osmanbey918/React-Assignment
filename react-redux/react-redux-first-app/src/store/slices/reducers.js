import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // data: initialData,
    value: 0,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
        increment: (state) => {
            state.value += 1
        },
        reset: (state) => {
            state.value = 0
        },
    },
});

export const { increment, decrement,reset } = dataSlice.actions;
export default dataSlice.reducer;