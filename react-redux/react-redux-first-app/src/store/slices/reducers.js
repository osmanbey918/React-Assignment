// reducer.js
import { createSlice } from '@reduxjs/toolkit';
import initialData from '../../constant/data';


const initialState = {
    data: initialData,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        removeItem: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
    },
});

export const { removeItem } = dataSlice.actions;
export default dataSlice.reducer;