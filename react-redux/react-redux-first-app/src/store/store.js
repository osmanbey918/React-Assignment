import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/reducers';  

// Configure the store with your reducers
const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;
