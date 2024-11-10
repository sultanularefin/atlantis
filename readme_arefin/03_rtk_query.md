

## prodctsApiSlice.ts.md


```ts

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  get_One_Product_Payload__Interface,
  local_Cart_Item,
  One_Product_Base_Interface,
  One_Product_for_Home_Page_Interface,
} from '../../../interfaces/products/product.ts';
import {RootState} from '../../app/store.ts';
import {productSlice, test_4_letters} from './productSlice.ts';
// import {Post_of_Json_PlaceHolder_interface} from "@/types/Post";

// One_Product_Interface

const return_modified_Doc = (
  one_Doc: One_Product_for_Home_Page_Interface,
  cart_IDs: number[],
  local_Cart: local_Cart_Item[],
):One_Product_for_Home_Page_Interface => {
  if (cart_IDs.includes(one_Doc.id)) {
    // local_Cart.findIndex()

    const foundIndex_Already_In_Cart = local_Cart.findIndex(
      (one_Product: local_Cart_Item) => one_Product.id === one_Doc.id,
    );

    /*  console.log(
        'local_Cart[foundIndex_Already_In_Cart].quantity: ',
        local_Cart[foundIndex_Already_In_Cart].quantity,
      );*/

    // console.log('at if');
    return {
      ...one_Doc,
      // image:one_Doc.image,
      show_Details_Btn: true,
      btn_Pressed: true,
      // offer_percentage: Number(one_Doc.offer_percentage),
      temp_Cart_Quantity: local_Cart[foundIndex_Already_In_Cart].quantity,
    };
  } else {
    // console.log('at else');
    return {
      ...one_Doc,
      // offer_percentage: Number(one_Doc.offer_percentage),
      show_Details_Btn: false,
      btn_Pressed: false,
    };
  }
};

export const productsApiSlice = createApi({
  reducerPath: "products",
  // reducerPath: 'product_Reducer',
  /* baseQuery: fetchBaseQuery({
     baseUrl: 'https://fakestoreapi.com',
   }),*/
  baseQuery: fetchBaseQuery({
    // baseUrl: '/api',
    baseUrl: 'https://fakestoreapi.com',
    // Make sure to pass `getState` to `baseQuery`
    /* prepareHeaders: (headers, { getState }) => {
 
 
       return headers;
     },*/
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query<
        One_Product_for_Home_Page_Interface[],
        {limit: number}
      >({
        query: ({limit}) => `/products?limit=${limit}`,

        // getProducts: builder.query<TransformedProduct[], void>({
        //   query: () => '/products',
        // Transform response before storing it in Redux
        // transformResponse: (response: { sideA: Tracks; sideB: Tracks }, meta, arg) => {
        // async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        async onQueryStarted(arg, { dispatch,getState, queryFulfilled }) {
          try {

            const { data } = await queryFulfilled;
            // const productSliceState = getState().products; // Accessing another slice's state
            // Perform your transformation with the response and another slice's state
            // console.log("data: ", data.length);
            // console.log("productSliceState: ", productSliceState);


            // Cast state as `RootState`
            const state:any = getState() as RootState;
            // console.log("state: ",state.product_Reducer);
            // state.product_State product_Reducer


            // let data2:One_Product_for_Home_Page_Interface[]=[];

            const local_Cart_IDs: number[] = (state.product_Reducer.local_Cart_Array.length === 0)
              ? []
              : state.product_Reducer.local_Cart_Array.map((one_Product: local_Cart_Item) => one_Product.id);

            // if(data?.length>0){


            const yourData = data.map((one_Product: One_Product_for_Home_Page_Interface, index:number) => (


              return_modified_Doc(
                one_Product,
                local_Cart_IDs,
                state.product_Reducer.local_Cart_Array
              )
            ));


            // return modifiedData as da


            // }

            // const modifiedData = data.map(item => ({ ...item, newProperty: 'newValue', // Example modification })); console.log(modifiedData);

            console.log("yourData: ",yourData);
            // await queryFulfilled;

            // `onSuccess` side-effect
            dispatch(test_4_letters(33));

            return { yourData: data };
            // return yourData;
          } catch (err) {
            console.error(err);
          }



        },
        /*  transformResponse: (
            response: One_Product_for_Home_Page_Interface[],
            meta:unknown,
            arg:unknown,
  
  
  
          ): One_Product_for_Home_Page_Interface[] => {
  
            console.log("inside transformResponse section (response): ", response);
            console.log("inside transformResponse section (meta): ", meta);
            console.log("inside transformResponse section (arg): ", arg);
  
  
  
  
  
            return response;
          },*/

        queryFn: (arg, queryApi, extraOptions, baseQuery) => {
          const one_Prod: One_Product_for_Home_Page_Interface = {
            // id: arg,
            // name: getRandomName(),
            // ...arg,

            id: 1,
            title: "44",
            price: 33,
            description: "abcd",
            category: 'ff',
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
              rate: 33,
              count: 33,
            },
            show_Details_Btn: true,

            temp_Cart_Quantity: 33,
            btn_Pressed: true,
          };
          // For the success case, the return type for the `data` property
          // must match `ResultType`
          //              v


          console.log("one_Prod: in <<queryFn>>: ",one_Prod);
          return { data: [one_Prod] };
        },




      }),
      getOneProduct: builder.query<
        One_Product_for_Home_Page_Interface,
        {
          /*one_product_payload: get_One_Product_Payload__Interface */

          product_Id: number;
          btn_Pressed_State: boolean;
          prev_Quantity: number;
        }
      >({
        query: ({product_Id}) => `/products?${product_Id}`,
      }),
      /* createPost: builder.mutation<
         One_Product_for_Home_Page_Interface,
         Omit<One_Product_for_Home_Page_Interface, 'id'>
       >({
         query: post => ({
           url: '/products',
           method: 'POST',
           body: post,
         }),
       }),*/
    };
  },



});

export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  // useCreatePostMutation,
} = productsApiSlice;

```
