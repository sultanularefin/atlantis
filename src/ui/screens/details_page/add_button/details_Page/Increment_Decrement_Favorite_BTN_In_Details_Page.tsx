import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// import {ukbd_navy_blue, ukbd_red, ukbd_red_light, ukbd_Text_Navy_Blue_color} from "../../../../ui_utils/important_Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// import {useAppDispatch, useAppSelector} from "../../../../../lib/app/hooks";
import hairlineWidth = StyleSheet.hairlineWidth;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Love_Button from './Love_Button';
import Increment_Button from './Increment_Button';
import Decrement_Btn from './Decrement_Btn';
/*import {
    // add_Item_To_Cart_Payload_Interface,
    // add_To_Cart_API,
    decrement_Single_Product_For_Details_Page, disable_Btn_Pressed_State_In_Home_Page_0,
    export_Single_Product_Add_BTN_Pressed_State,
    export_Single_Product_Quantity_Value_State, export_Unique_Cart_ID,
    increment_Decrement_Single_Item_Payload_Interface,
    // increment_Single_Product,
    increment_Single_Product_For_Details_Page,
    local_Cart_Item, select_City_ID, select_Country_ID,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    select_Store_Data,
    select_Store_ID,
    update_single_Product_Add_Btn_Pressed_State
} from "../../../../../lib/Reducers/product_Slice";
import {get_Detail_By_User_ID_server_Token} from "../../../../../lib/interfaces_Slice/user_Related_Interfaces";
import {select_Logger_Data_BY_ID} from "../../../../../lib/Reducers/authSlice";
import {
    add_Item_To_Cart_Payload_Interface,
    add_To_Cart_API,
    select_Cart_ID
} from "../../../../../lib/Reducers/cart_order_Slice";*/
// import {Store} from "../../../../../lib/interfaces_Slice/product_Related_Interfaces";
import {useAppDispatch, useAppSelector} from '../../../../../lib/app/hooks.ts';
import {
  add_price_to_total_cart_price,
  decrement_cart_item_for_home_index_0, deduct_price_to_total_cart_price,
  // decrement_Single_Product_For_Details_Page,
  increment_cart_item_for_home_index_0,
  // increment_Single_Product_For_Details_Page,
  select_Local_Cart,
  select_Local_Cart_Price_Localized_Monetary_Unit,
  select_single_product_extra_data,
  store_temp_cart_object,
  update_product_detail_extra_data,
  update_single_Product_Add_Btn_Pressed_State,
} from '../../../../../lib/features/products/product_Slice.ts';
import {
  local_Cart_Item,
  One_Product_Item_For_Detail_Interface,
  single_product_other_extra_data_interface,
} from '../../../../../interfaces/products/product.ts';
import {select_Logger_Data_BY_ID} from '../../../../../lib/features/auth/auth_Slice.ts';
import {get_Detail_By_User_ID_server_Token} from '../../../../../interfaces/user/user_data.ts';
import {increment_Decrement_Single_Item_Payload_Interface} from '../../../../../interfaces/products/increment.ts';
import {
  ukbd_navy_blue,
  ukbd_red,
  ukbd_red_light,
  ukbd_Text_Navy_Blue_color,
} from '../../../../ui_utils/important_Colors.ts';
import {productsApiSlice} from '../../../../../lib/features/products/productsApiSlice.ts';
import {home_page_product_limit} from '../../../../../config/business_constants.ts';
import {One_Product_for_Home_Page_Interface} from '../../../../../interfaces/products/product';
import {MaybeDrafted} from '@reduxjs/toolkit/dist/query/core/buildThunks';

interface Add_Favorite_Details_Props {
  comp_Height: number;
  t_Width: number;
  this_prod_id: number; //string,

  quantity: number;
  add_Button_Pressed_State: boolean;
}

const Increment_Decrement_Favorite_BTN_In_Details_Page: React.FC<
  Add_Favorite_Details_Props
> = ({
  comp_Height,
  t_Width,
  this_prod_id,
  quantity,
  add_Button_Pressed_State,
}) => {
  const local_Cart_Price = useAppSelector(
    select_Local_Cart_Price_Localized_Monetary_Unit,
  );

  const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);

  const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(
    select_Logger_Data_BY_ID,
  );

  // console.log("quantity: ",quantity);

  const dispatch = useAppDispatch();

  const abc = () => {
    console.log('abc pressed');
  };


  const single_product_extra_data:single_product_other_extra_data_interface = useAppSelector(select_single_product_extra_data);


  const add_To_Cart_Pressed = () => {
    // console.log('dispatch(add_To_Cart_Pressed pressed)');


    const payload_one_product_additional_data:single_product_other_extra_data_interface={
      single_Prod_Quantity: 0,// single_product_extra_data.single_Prod_Quantity+1,
      single_Prod_Add_Btn_Pressed_State: !(single_product_extra_data.single_Prod_Add_Btn_Pressed_State),
    };

    // single_Prod_Quantity
    // single_Prod_Add_Btn_Pressed_State
    dispatch(update_product_detail_extra_data(payload_one_product_additional_data));


  };

  const increment_button_Pressed = () => {




    console.log("at << increment_button_Pressed>> ");

    const payload_one_product_additional_data:single_product_other_extra_data_interface={
      single_Prod_Quantity: single_product_extra_data.single_Prod_Quantity+1,
      single_Prod_Add_Btn_Pressed_State: true,//!(single_product_extra_data.single_Prod_Add_Btn_Pressed_State),
    };


    dispatch(update_product_detail_extra_data(payload_one_product_additional_data));




    dispatch(
      productsApiSlice.util.updateQueryData(
        'getProducts',
        {limit: home_page_product_limit},
          // (draft_Products:MaybeDrafted<One_Product_for_Home_Page_Interface>) => {
        (draft_Products) => {


          const Index_among_all_products = draft_Products.findIndex((prod_item:One_Product_for_Home_Page_Interface,
                                                                index: number) => prod_item.id === this_prod_id);


          // console.log("Index_among_all_products: ",Index_among_all_products);

          if (Index_among_all_products) {
            // state.home_State.paginate_data.docs[action.payload].temp__Quantity = 1;
            draft_Products[Index_among_all_products].btn_Pressed = true;
            // draft_Products[Index_among_all_products].temp__Quantity += 1;

            // console.log("draft_Products[Index_among_all_products].temp__Quantity: ",draft_Products[Index_among_all_products].temp__Quantity);

            draft_Products[Index_among_all_products].temp__Quantity +=1;
            // console.log("draft_Products[Index_among_all_products].temp__Quantity: ",draft_Products[Index_among_all_products].temp__Quantity);


            const one_Item = draft_Products[Index_among_all_products];


            if (local_Cart.length === 0) {
              const cart_Item: local_Cart_Item = {
                name: one_Item.title, // one_Item.name,
                quantity: 1,

                price: one_Item.price,
                image: one_Item.image,
                id: one_Item.id,
                index: Index_among_all_products, //foundIndex_read,
              };

              // draft_Products[home_item_index].temp__Quantity = 1;
              // draft_Products[home_item_index].btn_Pressed = true;

              dispatch(store_temp_cart_object(cart_Item));


            } else {
              console.log('___at TEMP CART  LENGTH  > 0 ');

              // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
              const foundIndex_Already_In_Cart = local_Cart.findIndex(
                (cart_Product: local_Cart_Item) =>
                  cart_Product.id === this_prod_id,
              );

              // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
              if (foundIndex_Already_In_Cart !== -1) {
                // draft_Products[Index_among_all_products].temp__Quantity += 1;

                dispatch(
                  increment_cart_item_for_home_index_0(foundIndex_Already_In_Cart),
                );

                // return;
              } else {
                const cart_Item: local_Cart_Item = {
                  name: one_Item.title, // one_Item.name,
                  quantity: 1,

                  price: one_Item.price,
                  image: one_Item.image,
                  id: one_Item.id,
                  index: Index_among_all_products,
                };

                // draft_Products[Index_among_all_products].temp__Quantity = 1;

                dispatch(store_temp_cart_object(cart_Item));

                // return;
              }
            }


          }

          // console.log("draft_Products[Index_among_all_products].temp__Quantity: ",draft_Products[Index_among_all_products].temp__Quantity);

          const item_temp_cart_price = draft_Products[Index_among_all_products].price;
          dispatch(add_price_to_total_cart_price(item_temp_cart_price));

        },
      ),
    );

    return;



  };

  const decrement_button_Pressed = () => {
    console.log('__decrement_button_Pressed__');
    // set_value_State(value_State-1);

    if (quantity === 0) {

      const payload_one_product_additional_data:single_product_other_extra_data_interface={
        single_Prod_Quantity: 0,//single_product_extra_data.single_Prod_Quantity+1,
        single_Prod_Add_Btn_Pressed_State: false,//!(single_product_extra_data.single_Prod_Add_Btn_Pressed_State),
      };


      dispatch(update_product_detail_extra_data(payload_one_product_additional_data));





    }else{


      // 999


      if(single_product_extra_data.single_Prod_Quantity===0){

        const payload_one_product_additional_data:single_product_other_extra_data_interface={
          single_Prod_Quantity: 0,//single_product_extra_data.single_Prod_Quantity-1,
          single_Prod_Add_Btn_Pressed_State: false,//!(single_product_extra_data.single_Prod_Add_Btn_Pressed_State),
        };

        dispatch(update_product_detail_extra_data(payload_one_product_additional_data));


      }else{

        const payload_one_product_additional_data:single_product_other_extra_data_interface={
          single_Prod_Quantity: single_product_extra_data.single_Prod_Quantity-1,
          single_Prod_Add_Btn_Pressed_State: true,//!(single_product_extra_data.single_Prod_Add_Btn_Pressed_State),
        };

        dispatch(update_product_detail_extra_data(payload_one_product_additional_data));


      }





      dispatch(
          productsApiSlice.util.updateQueryData(
              'getProducts',
              {limit: home_page_product_limit},
              // (draft_Products:MaybeDrafted<One_Product_for_Home_Page_Interface>) => {
              (draft_Products) => {


                const Index_among_all_products = draft_Products.findIndex((prod_item:One_Product_for_Home_Page_Interface,
                                                                           index: number) => prod_item.id === this_prod_id);


                // console.log("Index_among_all_products: ",Index_among_all_products);

                if (Index_among_all_products) {

                  draft_Products[Index_among_all_products].temp__Quantity -= 1;
                  // console.log("draft_Products[Index_among_all_products].temp__Quantity: ",draft_Products[Index_among_all_products].temp__Quantity);


                  const one_Item = draft_Products[Index_among_all_products];



                    // console.log('___at TEMP CART  LENGTH  > 0 ');

                    // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
                    const foundIndex_Already_In_Cart = local_Cart.findIndex(
                        (cart_Product: local_Cart_Item) =>
                            cart_Product.id === this_prod_id,
                    );

                    // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
                    if (foundIndex_Already_In_Cart !== -1) {
                      // draft_Products[Index_among_all_products].temp__Quantity += 1;

                      dispatch(
                          decrement_cart_item_for_home_index_0(foundIndex_Already_In_Cart),
                      );

                      const item_temp_cart_price = draft_Products[foundIndex_Already_In_Cart].price;
                      dispatch(deduct_price_to_total_cart_price(item_temp_cart_price));

                      // return;

                  }


                }



              },
          ),



      );

      return;


      /*const decrement_Payload: increment_Decrement_Single_Item_Payload_Interface =
          {
            quantity_Single_Product: quantity - 1, //used
            product_ID: this_prod_id,
          };

      dispatch(decrement_Single_Product_For_Details_Page(decrement_Payload));*/

    }



  };

  const box_Height = comp_Height;
  const heart_Width = t_Width / 5;
  const add_Width = t_Width - heart_Width;

  return (
    <View
      style={{
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // paddingHorizontal: 4,
        height: comp_Height,
        width: t_Width,
        // borderColor: ukbd_red,
        // backgroundColor: 'blue',
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: comp_Height,
          alignItems: 'flex-end',
          // backgroundColor: 'tomato',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: ukbd_red,
            borderWidth: hairlineWidth, //1,
            // flex: 2,
            justifyContent: 'flex-end',
            height: box_Height,
            // backgroundColor: 'teal',
          }}>
          {!add_Button_Pressed_State ? (
            <Pressable
              onPressOut={add_To_Cart_Pressed}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? ukbd_red : 'transparent',
                  justifyContent: 'center',
                  width: add_Width, //t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: box_Height,
                },
              ]}>
              {({pressed}) => (
                <View
                  style={{
                    // backgroundColor: pressed ? ukbd_red : 'transparent',
                    justifyContent: 'center',
                    width: '100%', //(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <SimpleLineIcons
                    name={'bag'}
                    size={box_Height / 2}
                    color={pressed ? 'white' : ukbd_red} //"red"
                    style={{
                      //paddingHorizontal: 4,
                      fontWeight: '100',
                      paddingRight: 5,
                    }}
                  />

                  <Text
                    style={{
                      color: pressed ? 'white' : ukbd_red,
                      fontSize: 18,
                      // lineHeight: 14,
                      fontWeight: pressed ? '400' : '300',
                      fontFamily: 'RobotoCondensed-Regular',
                      textAlign: 'left',
                    }}>
                    ADD
                  </Text>
                </View>
              )}
            </Pressable>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                width: add_Width, //t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: ukbd_red,
              }}>
              <Decrement_Btn
                comp_Height_2={box_Height}
                btn_Pressed={decrement_button_Pressed}
                comp_Width={40}
                icon_Color={'white'}
              />

              <View
                style={{
                  justifyContent: 'center',
                  width: add_Width - (40 + 40), //(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
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
                    fontFamily: 'RobotoCondensed-Regular',
                    textAlign: 'left',
                  }}>
                  {quantity}
                </Text>
              </View>

              <Increment_Button
                comp_Height_2={box_Height}
                btn_Pressed={increment_button_Pressed}
                comp_Width={40}
                icon_Color={'white'}
              />
            </View>
          )}

          {/*80 % ends here*/}

          {/*20% begins here*/}

          <Love_Button
            comp_Height_2={box_Height}
            heart_Pressed={abc}
            comp_Width={heart_Width}
          />

          {/*20% ends here*/}
        </View>
      </View>
    </View>
  );
};

export default Increment_Decrement_Favorite_BTN_In_Details_Page;
