import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// const fetchUserById = createAsyncThunk(
//     'users/fetchById',
//     // Declare the type your function argument here:
//     async (userId) => {
//       const response = await fetch(`https://reqres.in/api/users/${userId}`)
//       // Inferred return type: Promise<MyData>
//       return (await response.json())
//     },
//   )