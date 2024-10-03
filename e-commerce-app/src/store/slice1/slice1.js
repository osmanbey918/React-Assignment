
import { createSlice } from "@reduxjs/toolkit";
const slice1 = createSlice({
    name: 'counter',
    initialState: { value: 10 },
    reducers: {
        increment: (state) => {
            state.value += 1;
            alert(state);
            
        }
    }
})

export const { increment } = slice1.actions;
export default slice1.reducer;