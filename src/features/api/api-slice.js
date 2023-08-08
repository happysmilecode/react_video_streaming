import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `/videos?_page=${page}&_limit=10`,
      providesTags: ["Videos"],
    }),
    updateStamps: builder.mutation({
      query: ({ id, stamp }) => ({
        url: `videos/${id}`,
        method: "PUT",
        body: { stamp },
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const { useGetVideosQuery } = apiSlice;
