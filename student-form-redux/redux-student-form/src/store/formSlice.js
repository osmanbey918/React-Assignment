import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: {},
    error: null,
  },
  reducers: {
    submitForm: (state, action) => {
      state.data = action.payload;
      state.error = null; // Clear errors on successful submit
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { submitForm, setError } = formSlice.actions;
export default formSlice.reducer;
