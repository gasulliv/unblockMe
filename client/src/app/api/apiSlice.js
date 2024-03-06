import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

//attach access token to headers each time 
//and if there is a cookie, attach crendentials 
//to that cookie each time
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
    crendentials: 'include',
    prepareHeaders: ( headers, { getState } ) => {
        const token = getState().auth.token
        if( token ) {
            headers.set( "authorization",  `Bearer ${token}`) 
        }
        return headers;
    } 

})
//create a wrapper query for the base query
const baseQueryWithReauth = async ( args, api, extraOptions ) => {
    //if there's no issue, then just return the result
    let result = await baseQuery( args, api, extraOptions )
    //if there's a 403, send the refresh token 
    if ( result?.error?.originalStatus === 403 ) {
        console.log('sending refrensh token');
        const refreshResult = await baseQuery( '/refresh', api, extraOptions )
        console.log(refreshResult);
         if( refreshResult?.data ) {
            const user = api.getState().auth.user;
            //store new token and user, we only get token back
            api.dispatch( setCredentials ( {...refreshResult.data, user } ) )
            //retry original query with new access token
            result = baseQuery( args, api, extraOptions )
         }  else {
        //if there's any other error besides 403, simply log out
        api.dispatch( logOut() );
        }
    }
    return result

}

export const apiSlice = createApi({
    baseQuery : baseQueryWithReauth,
    endpoints: builder => ({})
})