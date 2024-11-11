import {
  createApi,
  fetchBaseQuery,
  QueryArgFrom,
  ResultTypeFrom,
} from '@reduxjs/toolkit/query/react';
import {
  get_One_Product_Payload__Interface,
  local_Cart_Item,
  One_Product_Base_Interface,
  One_Product_for_Home_Page_Interface,
  One_Product_Item_For_Detail_Interface,
} from '../../../interfaces/products/product.ts';
import {RootState} from '../../app/store.ts';
import // productSlice,
// test_4_letters
'./productSlice.ts';
import {
  BaseQueryMeta,
  BaseQueryResult,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import {Post_of_Json_PlaceHolder_interface} from "@/types/Post";

// One_Product_Interface

const return_modified_Doc = (
  one_Doc: One_Product_for_Home_Page_Interface,
  cart_IDs: number[],
  local_Cart: local_Cart_Item[],
): One_Product_for_Home_Page_Interface => {
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

const baseURL = 'https://fakestoreapi.com';
export const productsApiSlice = createApi({
  reducerPath: 'products',

  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
  }),

  // baseQuery: customFetchBase,

  endpoints: (builder) => {
    return {
      getProducts: builder.query<
        One_Product_for_Home_Page_Interface[],
        {limit: number}
      >({
        query: ({limit}) => `/products?limit=${limit}`,

        // UNABLE TO SOLVE THIS TYPESCRIPT ERROR ON 11TH NOVEMBER 2024, TRIED 2 HOURS MAY BE, OVER ALL
        // UNABLE TO SOLVE THIS TYPESCRIPT ERROR ON 11TH NOVEMBER 2024, TRIED 2 HOURS MAY BE, OVER ALL
        // UNABLE TO SOLVE THIS TYPESCRIPT ERROR ON 11TH NOVEMBER 2024, TRIED 2 HOURS MAY BE, OVER ALL

        //@ts-ignore
        async onQueryStarted(arg, api) {
          // async onQueryStarted(arg/*: QueryArg*/, api/*: QueryLifecycleAp<QueryArg, BaseQuery, ResultType, ReducerPath>*/) {
          try {
            const {data} = await api.queryFulfilled;

            const state: any = api.getState() as RootState;

            const local_Cart_IDs: number[] =
              state.product_Reducer.local_Cart_Array.length === 0
                ? []
                : state.product_Reducer.local_Cart_Array.map(
                    (one_Product: local_Cart_Item) => one_Product.id,
                  );
            const yourData = data.map(
              (
                one_Product: One_Product_for_Home_Page_Interface,
                index: number,
              ) =>
                return_modified_Doc(
                  one_Product,
                  local_Cart_IDs,
                  state.product_Reducer.local_Cart_Array,
                ),
            );

            return {yourData: data};
          } catch (err) {
            console.error(err);
          }
        },
        transformResponse: (
          response: One_Product_for_Home_Page_Interface[],
          meta: unknown,
          arg: unknown,
        ): One_Product_for_Home_Page_Interface[] => {
          return response.map(
            (item: One_Product_for_Home_Page_Interface, index: number) => ({
              ...item,
              show_Details_Btn: false,
              btn_Pressed: false,
            }),
          );
        },

        queryFn: (arg, queryApi, extraOptions, baseQuery) => {
          const one_Prod: One_Product_for_Home_Page_Interface = {
            // id: arg,
            // name: getRandomName(),
            // ...arg,

            id: 1,
            title: '44',
            price: 33,
            description: 'abcd',
            category: 'ff',
            image: ['https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',],
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

          console.log('one_Prod: in <<queryFn>>: ', one_Prod);
          return {data: [one_Prod]};
        },
      }),

      /*
         getProducts: builder.query<
        One_Product_for_Home_Page_Interface[],
        {limit: number}
      >({
        query: ({limit}) => `/products?limit=${limit}`,
       */

      getOneProduct: builder.query<
        One_Product_Item_For_Detail_Interface,
        {
          //one_product_payload: get_One_Product_Payload__Interface

          product_Id: number;
          // btn_Pressed_State: boolean;
          // prev_Quantity: number;
          // single_Prod_Quantity: number;
          // single_Prod_Add_Btn_Pressed_State: boolean;
        }
      >({
        query: ({
          product_Id
                  // single_Prod_Quantity,
                  // single_Prod_Add_Btn_Pressed_State,
        }) => `/products/${product_Id}`,
        /*  onQueryStarted: (args, api) => {
            console.log('API Request Started: <<args>>: ', args);
            console.log('API Request Started: <<api>>: ', api);
          },*/
        // Use onQueryStarted to log details when the query is fired
        onQueryStarted: /*async*/ (arg, {queryFulfilled, dispatch}) => {
          console.log('Request made:');
          console.log('Method: GET');
          console.log(`URL: ${baseURL}/products/${arg.product_Id}`);
          try {
            // const { data } = await queryFulfilled;
            // console.log('Response Data:', data);
          } catch (error) {
            console.log('Error:', error);
          }
        },
        // transformResponse(baseQueryReturnValue: BaseQueryResult<BaseQueryResult<any>>, meta: BaseQueryMeta<BaseQueryResult<any>>, arg: QueryArgFrom<any>) {
        // transformResponse: (response: Product, meta, arg: number) => {
        transformResponse: (
          response: One_Product_Item_For_Detail_Interface,
          meta,
          arg,
        ): any /*Promise<ResultTypeFrom<One_Product_for_Home_Page_Interface>>*/ => {


          return {
            ...response,
            // image:[response.image,response.image,response.image],// for more than one image test
            image: [response.image],
          /*  single_Prod_Quantity: arg.single_Prod_Quantity,

            single_Prod_Add_Btn_Pressed_State:
              arg.single_Prod_Add_Btn_Pressed_State,*/
          };
        },
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  // useCreatePostMutation,
} = productsApiSlice;

// export const { useGetUsersQuery } = api; // for use in React components
export const {
  getProducts,
  getOneProduct
} = productsApiSlice.endpoints; // for accessing in slice or middleware
export const apiReducer = productsApiSlice.reducer;
