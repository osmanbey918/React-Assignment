import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset:(state)=> {
      state.value = 0
      alert('you are great usman')
    },
  },
})

export const { increment, decrement,reset, } = counterSlice.actions

export default counterSlice.reducer