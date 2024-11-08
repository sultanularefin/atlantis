import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {One_Product_for_Home_Page_Interface} from "../../../interfaces/products/product.ts";
// import {Post_of_Json_PlaceHolder_interface} from "@/types/Post";

// One_Product_Interface
export const productsApiSlice = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com",
    }),
    endpoints: (builder) => {
        return {
            getProducts: builder.query<One_Product_for_Home_Page_Interface[],
                { limit: number }>(
                {
                    query: ({limit}) =>
                        `/products?limit=${limit}`,
                }
            ),
            createPost: builder.mutation<One_Product_for_Home_Page_Interface,
                Omit<One_Product_for_Home_Page_Interface, "id">>(
                {
                    query: (post) => (
                        {
                            url: "/products",
                            method: "POST",
                            body: post,
                        }
                    ),
                }
            ),
        };
    },
});

export const {
    useGetProductsQuery,
    useCreatePostMutation
} = productsApiSlice;
