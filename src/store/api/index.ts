import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/api'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
})

export const appApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({})
})
