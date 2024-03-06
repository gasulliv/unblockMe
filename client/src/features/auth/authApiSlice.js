import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    //define endpoints
    endpoints: builder => ({
        login: builder.mutation({
            query: crendentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...crendentials }
            })
        })
    })
})

export const {
    useLoginMutation
} = authApiSlice;