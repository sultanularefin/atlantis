import React, {useState} from "react";
import {
    Pressable, StyleSheet,
    Text,
    View
} from "react-native";

/*import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light,
    ukbd_Text_Navy_Blue_color
} from "../../../../ui_utils/important_Colors";*/
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

// import {useAppDispatch, useAppSelector} from "../../../../../lib/app/hooks";
import hairlineWidth = StyleSheet.hairlineWidth;


/*import {
    decrement_Item_From_Home,

    increment_Decrement_Single_Item_Payload_Interface,
    update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State,
    increment_Item_From_Home,
    update_single_Product_Add_Btn_Pressed_State,
    disable_Btn_Pressed_State_In_Home_Page_0,
    // add_To_Cart_API,
    // add_Item_To_Cart_Payload_Interface,
    local_Cart_Item,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    select_Store_ID,
    select_City_ID,
    select_Country_ID,
    export_Unique_Cart_ID, select_Store_Data,
    // diable_Btn_Pressed_State_In_Home_Page_0
} from "../../../../../lib/Reducers/product_Slice";*/
import Decrement_Btn_Home_Page from "./Decrement_Btn_Home_Page";
import Increment_Button_Home_Page from "./Increment_Button_Home_Page";
import Love_Button_Home_Page from "./Love_Button_Home_Page";
// import {Store} from "../../../../../lib/interfaces_Slice/product_Related_Interfaces";
// import {get_Detail_By_User_ID_server_Token} from "../../../../../lib/interfaces_Slice/user_Related_Interfaces";
// import {select_Logger_Data_BY_ID} from "../../../../../lib/Reducers/authSlice";
/*import {
    add_Item_To_Cart_Payload_Interface,
    add_To_Cart_API,
    select_Cart_ID
} from "../../../../../lib/Reducers/cart_order_Slice";*/
import {useAppDispatch, useAppSelector} from "../../../../../lib/app/hooks.ts";
import {
  decrement_Item_From_Home,
  disable_Btn_Pressed_State_In_Home_Page_0,
  increment_Item_From_Home,
  select_Local_Cart,
  select_Local_Cart_Price_Localized_Monetary_Unit, store_temp_cart,
  update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State,
} from '../../../../../lib/features/products/productSlice.ts';
import {local_Cart_Item} from "../../../../../interfaces/products/product.ts";
import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light,
    ukbd_Text_Navy_Blue_color
} from "../../../../ui_utils/important_Colors.ts";
import {productsApiSlice} from '../../../../../lib/features/products/productsApiSlice.ts';


interface Add_Cart_OR_Favorite__Btn_Home_Page {
    t_Height: number,//string,//number,
    t_Width: number,//string,//string,
    product_Id: number,//string,

    index: number,

    quantity: number,
    add_Button_Pressed_State: boolean,
    bg_Color: string,

}


const Add_Cart_OR_Favorite__Btn_Home_Page: React.FC<Add_Cart_OR_Favorite__Btn_Home_Page> = (
    {
        t_Height,
        t_Width,
        product_Id,
        index,
        quantity,
        add_Button_Pressed_State,
        bg_Color,
    }
) => {


    const dispatch = useAppDispatch();


    const abc = () => {

        console.log("abc pressed");
    };


    const add_To_Cart_Pressed = () => {


        console.log("dispatch(add_To_Cart_Pressed pressed For Item in Home)");


       /* const decrement_Payload: increment_Decrement_Single_Item_Payload_Interface = {
            quantity_Single_Product: quantity - 1, //used
            product_ID: product_Id,
        };
        const

        */

        if (!add_Button_Pressed_State) {



          // Manually update the query cache
          dispatch(
            productsApiSlice.util.updateQueryData('getProducts', {limit:10}, (draftUsers) => {

              draftUsers[index].btn_Pressed = true;
              draftUsers[index].temp_Cart_Quantity = 0;
            })
          );

        }

        else{
            console.log("__at ___Else___add_To_Cart_Pressed");
            return;
        }

      /*  else if(add_Button_Pressed_State){

            console.log


        }*/





    };

    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);

    const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);


  // const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);



    const increment_from_home=(home_Item_Index:number)=>{




      const temp_Cart:local_Cart_Item[] = local_Cart;//state.local_Cart_Array;



      dispatch(
        productsApiSlice.util.updateQueryData('getProducts', {limit:10}, (draft_Products) => {


          const temp_Product_ID = draft_Products[home_Item_Index].id;
          const one_Item = draft_Products[home_Item_Index];



          if (temp_Cart.length === 0) {
            const cart_Item: local_Cart_Item = {
              name: one_Item.title.toString(), // one_Item.name,
              quantity: 1,
              // price: one_Item.view_price,
              price: one_Item.price,
              image: one_Item.image[0],
              id: one_Item.id,
              index: home_Item_Index, //foundIndex_read,
              // weight: one_Item.item_weight,
            };

            draft_Products[home_Item_Index].temp_Cart_Quantity = 1;
            draft_Products[home_Item_Index].btn_Pressed = true;

            temp_Cart.concat(cart_Item);



            return;
          } else {
            // else if (temp_Cart.length > 0) {
            //  TEMP CART  LENGTH  > 0

            console.log('___at TEMP CART  LENGTH  > 0 ');



            // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
            const foundIndex_Already_In_Cart = temp_Cart.findIndex(
              (one_Product: local_Cart_Item) => one_Product.id === temp_Product_ID,
            );

            // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
            if (foundIndex_Already_In_Cart !== -1) {

              console.log("foundIndex_Already_In_Cart: ",foundIndex_Already_In_Cart);

              // eslint-disable-next-line operator-assignment
              temp_Cart[foundIndex_Already_In_Cart].quantity =
                temp_Cart[foundIndex_Already_In_Cart].quantity + 1;

              draft_Products[home_Item_Index].temp_Cart_Quantity =
                temp_Cart[foundIndex_Already_In_Cart].quantity;

              // temp_Cart = temp_Cart; //[...temp_Cart];

              return;
            } else {


              const cart_Item: local_Cart_Item = {
                name: one_Item.title.toString(), // one_Item.name,
                quantity: 1,
                // price: one_Item.view_price,
                price: one_Item.price,
                image: one_Item.image[0],
                id: one_Item.id,
                index: home_Item_Index,
                // weight: one_Item.item_weight,
              };

              draft_Products[home_Item_Index].temp_Cart_Quantity = 1;
              temp_Cart.concat(cart_Item);

              return;
            }

          }

        })

      );

      dispatch(store_temp_cart(temp_Cart));

      // temp_Cart = temp_Cart.concat(cart_Item); // to do add item to cart

    };

    const increment_button_Pressed = () => {



      // 999

      increment_from_home(index);






    };

    const decrement_button_Pressed = () => {


        if (quantity === 0) {

            // dispatch(diable_Btn_Pressed_State_In_Home_Page_0(index));

            dispatch(disable_Btn_Pressed_State_In_Home_Page_0(index));
            return;
        }
        else{
            dispatch(decrement_Item_From_Home(index));
            return;
        }






    };


    const box_Height = t_Height;//t_Width/4;
    const heart_Width = t_Height;//t_Width / 5;
    const add_Width = t_Width - (t_Height);

    return (

        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: t_Height,
                width: t_Width,
                // backgroundColor: 'gold',//bg_Color,
            }}>
            <View
                style={{
                    // flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // paddingHorizontal: 4,
                    height: t_Height,
                    width: t_Width,
                    // borderColor: ukbd_red,
                    // backgroundColor: 'blue',
                }}
            >


                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: t_Height,
                        alignItems: 'flex-end',
                        // backgroundColor: 'tomato',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            borderColor: ukbd_red,
                            borderWidth: hairlineWidth,//1,
                            // flex: 2,
                            justifyContent: 'flex-end',
                            height: box_Height,
                            // backgroundColor: 'teal',


                        }}

                    >

                        {
                            !add_Button_Pressed_State ? (
                                <Pressable

                                    onPressOut={add_To_Cart_Pressed}

                                    style={({pressed}) => [
                                        {

                                            backgroundColor: pressed ? ukbd_red : 'transparent',
                                            justifyContent: 'center',
                                            width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            height: box_Height,


                                        }]}
                                >
                                    {({pressed}) => (
                                        <View style={{
                                            // backgroundColor: pressed ? ukbd_red : 'transparent',
                                            justifyContent: 'center',
                                            width: '100%',//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                        }}>


                                            <SimpleLineIcons
                                                name={"bag"}
                                                size={box_Height / 2}
                                                // size={'5%'}
                                                color={pressed ? 'white' : ukbd_red} //"red"
                                                style={{
                                                    //paddingHorizontal: 4,
                                                    fontWeight: '100',
                                                    paddingRight: 5,

                                                }}

                                            />


                                            <Text
                                                style={{
                                                    //color: ukbd_red,//ukbd_navy_blue,
                                                    // color: {pressed? 'white'
                                                    //         : ukbd_red
                                                    // },
                                                    // color: {pressed ? ukbd_navy_blue : ukbd_red},
                                                    color: (pressed ? 'white' : ukbd_red),
                                                    fontSize: 18,
                                                    // lineHeight: 14,
                                                    fontWeight: (pressed ? '400' : "300"),
                                                    fontFamily: "RobotoCondensed-Regular",
                                                    textAlign: "left",

                                                }}>ADD</Text>


                                        </View>
                                    )}
                                </Pressable>
                            ) : (
                                <View

                                    style={{
                                        justifyContent: 'center',
                                        width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: ukbd_red,
                                    }}
                                >

                                    <Decrement_Btn_Home_Page
                                        comp_Height_2={box_Height}
                                        btn_Pressed={decrement_button_Pressed}
                                        comp_Width={40}
                                        icon_Color={'white'}
                                    />


                                    <View

                                        style={{
                                            justifyContent: 'center',
                                            width: add_Width - (40 + 40),//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            backgroundColor: ukbd_red,
                                        }}>

                                        <Text
                                            style={{
                                                //color: ukbd_red,//ukbd_navy_blue,
                                                // color: {pressed? 'white'
                                                //         : ukbd_red
                                                // },
                                                // color: {pressed ? ukbd_navy_blue : ukbd_red},
                                                color: 'white',
                                                fontSize: 18,
                                                // lineHeight: 14,
                                                // fontWeight: (pressed?'400':"300"),
                                                fontFamily: "RobotoCondensed-Regular",
                                                textAlign: "left",

                                            }}>{quantity}</Text>


                                    </View>


                                    <Increment_Button_Home_Page
                                        comp_Height_2={box_Height}
                                        btn_Pressed={increment_button_Pressed}
                                        comp_Width={40}
                                        icon_Color={'white'}
                                    />


                                </View>

                            )


                        }

                        {/*80 % ends here*/}


                        {/*20% begins here*/}

                        <Love_Button_Home_Page
                            comp_Height_2={box_Height}
                            heart_Pressed={abc}
                            comp_Width={heart_Width}
                        />

                        {/*20% ends here*/}

                    </View>


                </View>


            </View>
        </View>
    );
};

export default Add_Cart_OR_Favorite__Btn_Home_Page;

