import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath: "articleApi", 
    endpoints: (buider) => ({
        getSummary: buider.query({
            query: (params) => `test`
        })
    })
})