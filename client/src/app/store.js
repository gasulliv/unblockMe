import  { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore ({
    reducer: {
        [ apiSlice.reducerPath ]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => 
    //needed for RTK to cache our results
        getDefaultMiddleware().concat(apiSlice.middleware),
    //on production, swap to off
    devTools: true
})