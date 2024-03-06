
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice ({
    //set initial state, user will be empty, token will be empty
    name: 'auth',
    initialState: { 
        user: null, 
        token: null
    },
    //here we get reducers to set the current user and token to the user state and token state
    reducers: {
        setCredentials: ( state, action ) => {
            const { user, accessToken } = action.payload;
            state.user = user
            state.token = accessToken
        },
        //on logout, reset user and token to null
        logOut: ( state, action ) => {
            state.user = null
            state.token = null
        }
    },
})

//export the set credentials and log out functions
export const { setCredentials, logOut } = authSlice.actions
//export the authSlice reducer
export default authSlice.reducer;
//export current user
export const selectCurrentUser = ( state ) => state.auth.user;
export const selectCurrentToken = ( state ) => state.auth.token;