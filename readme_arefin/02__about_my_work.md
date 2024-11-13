







```ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getExampleData: builder.query({
      query: (id) => `/data/${id}`,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const anotherSliceState = getState().anotherSlice; // Accessing another slice's state
          // Perform your transformation with the response and another slice's state
          console.log(data, anotherSliceState);
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useGetExampleDataQuery } = api;



```
