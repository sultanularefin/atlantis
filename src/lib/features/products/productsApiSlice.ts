import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    get_One_Product_Payload__Interface,
    One_Product_for_Home_Page_Interface
} from "../../../interfaces/products/product.ts";
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
            getOneProduct: builder.query<One_Product_for_Home_Page_Interface,
                { /*one_product_payload: get_One_Product_Payload__Interface */

                    product_Id: number,
                    btn_Pressed_State: boolean,
                    prev_Quantity: number,
                }>(
                {
                    query: ({product_Id}) =>
                        `/products?${product_Id}`,
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
    useGetOneProductQuery,
    useCreatePostMutation
} = productsApiSlice;
