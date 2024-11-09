


import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import {RootState} from "@/lib/store";
import {RootState} from '../../app/store';
import {monetary_Unit_Interface} from "../../../ui/ui_utils/localization_utils.ts";
import {productsApiSlice} from "./productsApiSlice.ts";
import {
    local_Cart_Item,
    One_Product_for_Home_Page_Interface,
    One_Product_Item_For_Detail_Interface
} from "../../../interfaces/products/product.ts";
import {increment_Decrement_Single_Item_Payload_Interface} from "../../../interfaces/products/increment.ts";
import {
  // MultipleImageHeaderNull_route_date_interface,
  MultipleImageHeaderNull_route_date_interface,
} from '../../../ui/screens/MultipleImageHeaderNull.tsx';
interface products_State_Interface {
    // value: number

    delivery_Currency: monetary_Unit_Interface,
    product_State: One_Product_for_Home_Page_Interface[],
    previous_Show_Detail_Button_Index_for_Item: number,
    local_Cart_Array: local_Cart_Item[],
    local_Cart_Price_Total: number,
    local_Cart_Weight_Total: number,

    single_Product_State: One_Product_Item_For_Detail_Interface,
    two_Image__data_For_Tag_State: MultipleImageHeaderNull_route_date_interface,

}


const initialState: products_State_Interface = {
    // value: 0,


    delivery_Currency: { // delivery_currency_code ==="BDT"
        index: 3,
        name: "Taka",
        unicode: "\u09F3",
        Currency_Code: "BDT",
        text: 'ট',
    },
    product_State: [],
    previous_Show_Detail_Button_Index_for_Item: -1,
    // added on april 07, 2023
    local_Cart_Array: [],
    local_Cart_Price_Total: 0,
    local_Cart_Weight_Total: 0,

    single_Product_State: {} as One_Product_Item_For_Detail_Interface,

    two_Image__data_For_Tag_State:
        {
            /*
            date:  '',//string, //props.date,
            feedOwnerName: '', //string,
            */
            some_uris: [], //string[],
            tapIndex: 0, //number,
            title: '', //string,//props.content,
            //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021
            /*
            feedId: -1, //number,// string, // number
            id : -1, //number,//string, // number,
            loggerID: '',//string,
            postUserID: '',// string,

             */

        },


};





const increment_Single_Product_2_For_Details_Page = (state: any,
                                                     action: PayloadAction<increment_Decrement_Single_Item_Payload_Interface>) => {


    const increment_Payload = action.payload;
    const temp_Product_ID = increment_Payload.product_ID;


    state.single_Product_State.single_Prod_Quantity += 1; //action.payload;


    const temp_Cart = state.local_Cart_Array;

    // console.log("temp_Cart: >>>",temp_Cart);


    if (temp_Cart.length === 0) {


        // const temp_Cart_Item:local_Cart_Item= add_Item_To_Cart_33(/*state.product_State, */temp_Product_ID);


        // common code -----------------------------add temp_cart_item___begins here
        //  TEMP CART  LENGTH 0
        const foundIndex_read = state.product_State.findIndex((one_Product: One_Product_Item_For_Detail_Interface) =>
            one_Product.id === temp_Product_ID);

        // state.product_State[one_Product_Index].


        // if (foundIndex_read){

        const one_Item = state.product_State[foundIndex_read];


        const cart_Item: local_Cart_Item = {
            name: one_Item.name.toString(),// one_Item.name,
            quantity: 1,
            // price: one_Item.view_price,
            price: one_Item.price,
            image: one_Item.image_url[0],
            id: one_Item._id,
            index: foundIndex_read,
            weight: one_Item.item_weight,
        };

        state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
        state.product_State[foundIndex_read].btn_Pressed = true;

        // price begins
        // state.local_Cart_Price_Total = one_Item.view_price;
        state.local_Cart_Price_Total = one_Item.price;


        state.local_Cart_Weight_Total = one_Item.item_weight;

        // price ends

        // common code ----------------add temp_cart_item__ends here

        // console.log("__temp_Cart_Item__ length(0):", cart_Item);

        // temp_Cart.concat({...temp_Cart_Item});
        // temp_Cart.concat({...temp_Cart_Item});
        // state.read_follower_data = state.read_follower_data.concat(newData);

        // state.local_Cart_Array.concat(temp_Cart_Item);

        // temp_Cart.concat([...temp_Cart_Item]);

        // console.log("---at 0 and temp_Cart.length: ",temp_Cart.length);


        // state.local_Cart_Array=[{...temp_Cart_Item}];

        state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);

        return;


    } else {
        // else if (temp_Cart.length > 0) {
        //  TEMP CART  LENGTH  > 0

        // console.log("___at TEMP CART  LENGTH  > 0 ");

        // console.log("__temp_Product_ID__: ",temp_Product_ID);
        // console.log("temp_Cart: ", temp_Cart);


        // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
        const foundIndex_Already_In_Cart = temp_Cart.findIndex((one_Product: local_Cart_Item) =>
            one_Product.id === temp_Product_ID);


        // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
        if (foundIndex_Already_In_Cart !== -1) {

            // const one_Item =  temp_Cart[foundIndex_Already_In_Cart];

            // console.log("at __foundIndex_Already_In_Cart: ");


            // eslint-disable-next-line operator-assignment
            temp_Cart[foundIndex_Already_In_Cart].quantity = (temp_Cart[foundIndex_Already_In_Cart].quantity) + 1;


            // price begins
            state.local_Cart_Price_Total += temp_Cart[foundIndex_Already_In_Cart].price;

            // price ends

            state.local_Cart_Weight_Total += temp_Cart[foundIndex_Already_In_Cart].weight;


            state.local_Cart_Array = temp_Cart;//[...temp_Cart];


            // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
            state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].temp_Cart_Quantity = temp_Cart[foundIndex_Already_In_Cart].quantity;
            state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].weight
                = (temp_Cart[foundIndex_Already_In_Cart].quantity) * (temp_Cart[foundIndex_Already_In_Cart].weight);


            /*  console.log("_foundIndex_Already_In_Cart: ",foundIndex_Already_In_Cart);

              console.log("temp_Cart[foundIndex_Already_In_Cart]: ",temp_Cart[foundIndex_Already_In_Cart]);

              console.log("_state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].temp_Cart_Quantity__: ",
                  state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].temp_Cart_Quantity);
  */


            return;


        } else {
            // -1;
            // foundIndex_Already_In_Cart === -1;

            // const temp_Cart_Item:local_Cart_Item= add_Item_To_Cart_33(temp_Product_ID);


            // common code -----------------------------add temp_cart_item___begins here
            //  TEMP CART  LENGTH 0
            const foundIndex_read = state.product_State.findIndex((one_Product: One_Product_Item_For_Detail_Interface) =>
                one_Product.id === temp_Product_ID);

            // state.product_State[one_Product_Index].


            // if (foundIndex_read){

            const one_Item = state.product_State[foundIndex_read];


            const cart_Item: local_Cart_Item = {
                name: one_Item.name.toString(),// one_Item.name,
                quantity: 1,
                // price: one_Item.view_price,
                price: one_Item.price,
                image: one_Item.image_url[0],
                id: one_Item._id,
                index: foundIndex_read,
                weight: one_Item.item_weight,
            };


            state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
            state.product_State[foundIndex_read].btn_Pressed = true;
            // temp_Cart_Quantity: number,
            //     btn_Pressed: boolean,


            // price begins
            // state.local_Cart_Price_Total += one_Item.view_price;
            state.local_Cart_Price_Total += one_Item.price;
            // price ends

            state.local_Cart_Weight_Total += one_Item.item_weight;


            // common code ----------------add temp_cart_item__ends here


            // const temp_Cart_Item:local_Cart_Item= add_New_Item_In_Cart(state.product_State,temp_Product_ID);

            // temp_Cart.concat(temp_Cart_Item);
            state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);
            // temp_Cart.concat(cart_Item);


            // foundIndex_Already_In_Cart


            // state.local_Cart_Array=[...temp_Cart];

            return;
        }

    }


};

const return_modified_Doc = (
    one_Doc: One_Product_for_Home_Page_Interface,
    cart_IDs: number[],
    local_Cart: local_Cart_Item[]) => {
    if (cart_IDs.includes(one_Doc.id)) {
        // local_Cart.findIndex()

        const foundIndex_Already_In_Cart = local_Cart.findIndex((one_Product: local_Cart_Item) =>
            one_Product.id === one_Doc.id);

        console.log("local_Cart[foundIndex_Already_In_Cart].quantity: ", local_Cart[foundIndex_Already_In_Cart].quantity);


        return {

            ...one_Doc,
            show_Details_Btn: true,
            btn_Pressed: true,
            // offer_percentage: Number(one_Doc.offer_percentage),
            temp_Cart_Quantity: local_Cart[foundIndex_Already_In_Cart].quantity,
        };
    } else {
        return {

            ...one_Doc,
            // offer_percentage: Number(one_Doc.offer_percentage),
            show_Details_Btn: false,
            btn_Pressed: false,
        };

    }


};


const populateTag_data_for_multiple_Images_2 = (state: any,
                                                action: PayloadAction<MultipleImageHeaderNull_route_date_interface>) => {


    // const temp_Multiple_2__Image_data: MultipleImageHeaderNull_route_date_interface = action.payload;

    state.two_Image__data_For_Tag_State = action.payload;//temp_Multiple_2__Image_data;


};

const disable_Btn_Pressed_State_In_Home_Page = (state: any,
                                                action: PayloadAction<number>) => {


    // state.product_State[action.payload].temp_Cart_Quantity = 1;
    state.product_State[action.payload].btn_Pressed = false;
    state.product_State[action.payload].temp_Cart_Quantity = 0;


};




const increment_Single_Cart_Item_2__For_Home_Page = (state: any,
                                                     action: PayloadAction<number>) => {


    const home_Item_Index = action.payload;

    const temp_Cart = state.local_Cart_Array;


    const temp_Product_ID = state.product_State[home_Item_Index]._id;
    const one_Item = state.product_State[home_Item_Index];

    if (temp_Cart.length === 0) {


        const cart_Item: local_Cart_Item = {
            name: one_Item.name.toString(),// one_Item.name,
            quantity: 1,
            // price: one_Item.view_price,
            price: one_Item.price,
            image: one_Item.image_url[0],
            id: one_Item._id,
            index: home_Item_Index,//foundIndex_read,
            weight: one_Item.item_weight,
        };

        state.product_State[home_Item_Index].temp_Cart_Quantity = 1;
        state.product_State[home_Item_Index].btn_Pressed = true;

        // price begins
        // state.local_Cart_Price_Total = one_Item.view_price;

        state.local_Cart_Price_Total = one_Item.price;

        state.local_Cart_Weight_Total = one_Item.item_weight;

        // price ends

        // common code ----------------add temp_cart_item__ends here

        // console.log("__temp_Cart_Item__ length(0):", cart_Item);

        // temp_Cart.concat({...temp_Cart_Item});
        // temp_Cart.concat({...temp_Cart_Item});
        // state.read_follower_data = state.read_follower_data.concat(newData);

        // state.local_Cart_Array.concat(temp_Cart_Item);

        // temp_Cart.concat([...temp_Cart_Item]);

        // console.log("---at 0 and temp_Cart.length: ",temp_Cart.length);


        // state.local_Cart_Array=[{...temp_Cart_Item}];

        state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);

        return;


    } else {
        // else if (temp_Cart.length > 0) {
        //  TEMP CART  LENGTH  > 0

        console.log("___at TEMP CART  LENGTH  > 0 ");

        // console.log("__temp_Product_ID__: ",temp_Product_ID);
        // console.log("temp_Cart: ", temp_Cart);


        // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
        const foundIndex_Already_In_Cart = temp_Cart.findIndex((one_Product: local_Cart_Item) =>
            one_Product.id === temp_Product_ID);


        // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
        if (foundIndex_Already_In_Cart !== -1) {

            // const one_Item =  temp_Cart[foundIndex_Already_In_Cart];

            // console.log("at __foundIndex_Already_In_Cart: ");


            // eslint-disable-next-line operator-assignment
            temp_Cart[foundIndex_Already_In_Cart].quantity = (temp_Cart[foundIndex_Already_In_Cart].quantity) + 1;


            // price begins
            state.local_Cart_Price_Total += temp_Cart[foundIndex_Already_In_Cart].price;

            // price ends

            state.local_Cart_Weight_Total += temp_Cart[foundIndex_Already_In_Cart].weight;


            state.local_Cart_Array = temp_Cart;//[...temp_Cart];


            // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
            state.product_State[home_Item_Index].temp_Cart_Quantity = temp_Cart[foundIndex_Already_In_Cart].quantity;

            return;


        } else {
            // -1;
            // foundIndex_Already_In_Cart === -1;

            // const temp_Cart_Item:local_Cart_Item= add_Item_To_Cart_33(temp_Product_ID);


            // common code -----------------------------add temp_cart_item___begins here
            //  TEMP CART  LENGTH 0
            /* const foundIndex_read = state.product_State.findIndex((one_Product: Doc) =>
                 one_Product._id === temp_Product_ID);*/

            // state.product_State[one_Product_Index].


            // if (foundIndex_read){

            // const one_Item = state.product_State[foundIndex_read];


            const cart_Item: local_Cart_Item = {
                name: one_Item.name.toString(),// one_Item.name,
                quantity: 1,
                // price: one_Item.view_price,
                price: one_Item.price,
                image: one_Item.image_url[0],
                id: one_Item._id,
                index: home_Item_Index,
                weight: one_Item.item_weight,
            };


            state.product_State[home_Item_Index].temp_Cart_Quantity = 1;


            // state.product_State[foundIndex_read].btn_Pressed = true;
            // temp_Cart_Quantity: number,
            //     btn_Pressed: boolean,


            // price begins
            // state.local_Cart_Price_Total += one_Item.view_price;

            state.local_Cart_Price_Total += one_Item.price;


            // state.local_Cart_Price_Total = one_Item.price;

            // price ends

            state.local_Cart_Weight_Total += one_Item.item_weight;


            // common code ----------------add temp_cart_item__ends here


            // const temp_Cart_Item:local_Cart_Item= add_New_Item_In_Cart(state.product_State,temp_Product_ID);

            // temp_Cart.concat(temp_Cart_Item);
            state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);
            // temp_Cart.concat(cart_Item);


            // foundIndex_Already_In_Cart


            // state.local_Cart_Array=[...temp_Cart];

            return;
        }

    }


};


const decrement_Single_Cart_Item_2_For_Home_Page = (state: any,
                                                    action: PayloadAction<number>) => {


    // const decrement_Payload = action.payload;
    // const temp_Product_ID = decrement_Payload.product_ID;
    // const previous_Cart_Qtity = decrement_Payload.single_Cart_Item_Qtity;


    const home_Item_Index = action.payload;

    // const temp_Cart = state.local_Cart_Array;

    // console.log("temp_Cart: >>>",temp_Cart);

    const temp_Product_ID = state.product_State[home_Item_Index]._id;
    const one_Item = state.product_State[home_Item_Index];


    /*
    const decrement_Payload = action.payload;
    const temp_Product_ID = decrement_Payload.product_ID;
    const updated_Quantity = decrement_Payload.quantity_Single_Product;

    */

    /*
    if (decrement_Payload.quantity_Single_Product === 0) {
        // state.single_Product_Add_Btn_Pressed_State = false;

        state.single_Product_State.item.single_Prod_Add_Btn_Pressed_State = false;// action.payload;

    }

    state.single_Product_State.item.single_Prod_Quantity = updated_Quantity;//  decrement_Payload.quantity_Single_Product;// action.payload;
    // state.single_Product_Quantity__State = action.payload;


    */


    let temp_Cart = state.local_Cart_Array;


    //  TEMP CART  LENGTH 0


    // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
    const foundIndex_Already_In_Cart_Decrement = temp_Cart.findIndex((one_Product: local_Cart_Item) =>
        one_Product.id === temp_Product_ID);


    // ORDER IS IMPORTANT ORDER:2
    // eslint-disable-next-line operator-assignment
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity = (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity) - 1;


    // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;


    // ORDER IS IMPORTANT ORDER:1
    // eslint-disable-next-line operator-assignment
    temp_Cart[foundIndex_Already_In_Cart_Decrement].weight =
        (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity) * (temp_Cart[foundIndex_Already_In_Cart_Decrement].weight);


    /* state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].weight
         = ((temp_Cart[foundIndex_Already_In_Cart].quantity) + 1)*(temp_Cart[foundIndex_Already_In_Cart].weight);*/


    // price decrement begins
    state.local_Cart_Price_Total -= temp_Cart[foundIndex_Already_In_Cart_Decrement].price;

    // price decrement ends


    state.local_Cart_Weight_Total -= temp_Cart[foundIndex_Already_In_Cart_Decrement].weight;


    // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
    state.product_State[home_Item_Index].temp_Cart_Quantity
        = (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity);


    if (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity === 0) {

        // const temp_local_Cart = state.local_Cart_Array;

        // console.log("temp_Cart: (when 0) ", temp_Cart);
        if (temp_Cart.length === 1) {

            // state.local_Cart_Array = [];

            temp_Cart = [];
            // state.product_State[home_Item_Index].temp_Cart_Quantity = 0;//
            state.product_State[home_Item_Index].btn_Pressed = false;
            // (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity) - 1;
            state.local_Cart_Array = temp_Cart;

        } else if (temp_Cart.length === 2) {

            // extra [] added to save it as an array.

            temp_Cart = [temp_Cart[(foundIndex_Already_In_Cart_Decrement === 1)
                ? 0
                : 1
                ]
            ];


            // state.product_State[home_Item_Index].temp_Cart_Quantity = 0;//
            state.product_State[home_Item_Index].btn_Pressed = false;

            console.log("temp_Cart when previous length was 2", temp_Cart);


            state.local_Cart_Array = temp_Cart;
            // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].temp_Cart_Quantity = 0;//
            // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].btn_Pressed = false;
        } else if (temp_Cart.length > 2) {

            temp_Cart = (foundIndex_Already_In_Cart_Decrement === 0)
                ? (temp_Cart.slice(1, temp_Cart.length))
                : (temp_Cart.slice(0, foundIndex_Already_In_Cart_Decrement)).concat(temp_Cart.slice(foundIndex_Already_In_Cart_Decrement + 1, temp_Cart.length));


            state.product_State[home_Item_Index].temp_Cart_Quantity = 0;//
            // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].btn_Pressed = false;
            state.product_State[home_Item_Index].btn_Pressed = false;

            state.local_Cart_Array = temp_Cart;
        }


    }
        // state.local_Cart_Array= state.local_Cart_Array.concat(temp_Cart_Item);

    // updated_Quantity

    else {

        // console.log("decrement_Single_Cart_Item_2_For_Home_Page >> [temp_Cart]: at else -- ", temp_Cart);

        state.local_Cart_Array = temp_Cart;
    }


};





const update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State_2 = (state: any,
                                                                                               action: PayloadAction<number>) => {


    // state.product_State[action.payload].temp_Cart_Quantity = 1;
    state.product_State[action.payload].btn_Pressed = true;
    state.product_State[action.payload].temp_Cart_Quantity = 0;


};


const single_Product__Show_Details_Button_true_2 = (state: any,
                                                    action: PayloadAction<number>) => {


    const one_Product_Index = action.payload;//state.editing_Product_Info;


    const value_boolean = state.product_State[one_Product_Index].show_Details_Btn;


    state.product_State[one_Product_Index].show_Details_Btn = !value_boolean;


    const prev_index = state.previous_Show_Detail_Button_Index_for_Item;
    if ((prev_index !== -1) && (one_Product_Index !== prev_index)) {
        state.product_State[prev_index].show_Details_Btn = false;


    }


    state.previous_Show_Detail_Button_Index_for_Item = one_Product_Index;


    return;
    // one_Product_Index


};

export const productSlice = createSlice({
    name: 'products',

    initialState,
    reducers: {

        single_Product__Show_Details_Button_true: single_Product__Show_Details_Button_true_2,
        // added on may 8, 2023
        update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State: update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State_2,
        decrement_Item_From_Home: decrement_Single_Cart_Item_2_For_Home_Page,
        increment_Item_From_Home: increment_Single_Cart_Item_2__For_Home_Page,
        disable_Btn_Pressed_State_In_Home_Page_0: disable_Btn_Pressed_State_In_Home_Page,
        populateTag_data_for_multiple_Images: populateTag_data_for_multiple_Images_2,





    },
    extraReducers: (builder) => {
        builder
            .addMatcher(productsApiSlice.endpoints.getProducts.matchFulfilled, (
                state, action) => {


                if (action.payload !== undefined) {




                    const local_Cart_IDs = (state.local_Cart_Array.length === 0)
                        ? []
                        : state.local_Cart_Array.map((one_Product: local_Cart_Item) => one_Product.id);

                    if(action.payload?.length>0){


                        state.product_State =  action.payload.map((one_Product: One_Product_for_Home_Page_Interface, index:number) => (


                            return_modified_Doc(
                                one_Product,
                                local_Cart_IDs,
                                state.local_Cart_Array
                            )
                        ));
                    }

                }
            });
    },
});

export const {
    single_Product__Show_Details_Button_true,
    update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State,
    decrement_Item_From_Home,
    increment_Item_From_Home,
    disable_Btn_Pressed_State_In_Home_Page_0,
    populateTag_data_for_multiple_Images,

} = productSlice.actions;


// export const selectCount = (state: RootState) => state.products.value; scan_Reducer
export const select_Shipped_From_State_Or_Delivery_Currency = (state: RootState) => state.product_Reducer.delivery_Currency;
export const export_Single_Product_Add_BTN_Pressed_State = (state: RootState) => state.product_Reducer.single_Product_State.single_Prod_Add_Btn_Pressed_State;

export const export_Single_Product_Quantity_Value_State = (state: RootState) => state.product_Reducer.single_Product_State.single_Prod_Quantity;


export const select_Local_Cart = (state: RootState) => state.product_Reducer.local_Cart_Array;
export const select_Local_Cart_Length = (state: RootState) => state.product_Reducer.local_Cart_Array.length;

export const select_Local_Cart_Price_Localized_Monetary_Unit = (state: RootState) => state.product_Reducer.local_Cart_Price_Total;
export const export_Single_Product_Details = (state: RootState) => state.product_Reducer.single_Product_State;

export const multiple_image_route_data_through_redux = (state: RootState) => state.product_Reducer.two_Image__data_For_Tag_State;


export default productSlice.reducer;
