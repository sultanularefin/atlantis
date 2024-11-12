import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

// import {ukbd_navy_blue, ukbd_red, ukbd_red_light, ukbd_Text_Navy_Blue_color} from "../../../../ui_utils/important_Colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// import {useAppDispatch, useAppSelector} from "../../../../../appStore/app/hooks";

import hairlineWidth = StyleSheet.hairlineWidth;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Single_Cart_Item_Increment_Button from './Single_Cart_Item_Increment_Button';
import Single_Cart_Item_Decrement_Btn from './Single_Cart_Item_Decrement_Btn';

import {
  ukbd_navy_blue,
  ukbd_place_holder_TextColor,
  ukbd_red,
  ukbd_red_light,
  ukbd_Text_Navy_Blue_color,
} from '../../../ui_utils/important_Colors';
/*import {
    useAppDispatch,
    useAppSelector,
} from "../../../../appStore/app/hooks";*/
/*import {
    decrement_Single_Cart_Item,

    increment_Decrement_Single_Cart_Item_Payload_Interface,
    increment_Decrement_Single_Item_Payload_Interface,
    increment_Single_Cart_Item,
    one_Cart_Item_Update_With_TextIpnut_Payload_Interface,
    update_One_Cart_Item_Value_Through_Text_Input,

} from "../../../../appStore/Reducers/product_Slice";*/
import {common_Text_Input_Styles} from '../../../screens/identity/Login_Page';
import {useAppDispatch} from '../../../../lib/app/hooks.ts';
import {productsApiSlice} from '../../../../lib/features/products/productsApiSlice.ts';
import {home_page_product_limit} from '../../../../config/business_constants.ts';
import {local_Cart_Item} from '../../../../interfaces/products/product.ts';
import {
  add_price_to_total_cart_price,
  decrement_cart_item_for_home_index_0,
  deduct_price_to_total_cart_price,
  increment_cart_item_for_home_index_0,
  store_temp_cart_object,
} from '../../../../lib/features/products/product_Slice.ts';

interface Single_Cart_Item_Increment_Decrement_Root_Props {
  comp_Height_3: number;
  comp_Width_3: number;
  this_product_id: number; //string,

  quantity: number;
  product_index: number;
  cart_item_Index: number;
  // add_Button_Pressed_State: boolean,
}

const Single_Cart_Item_Increment_Decrement_Root: React.FC<
  Single_Cart_Item_Increment_Decrement_Root_Props
> = ({
  comp_Height_3,
  comp_Width_3,
  this_product_id,
  quantity,
  product_index,
  cart_item_Index,
  // add_Button_Pressed_State
}) => {
  // const email_Formatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const number_Formatter = /^[0-9]+$/;

  const dispatch = useAppDispatch();

  const one_cart__item_increment_button_pressed = () => {
    console.log('__increment_Single_Cart_Item__Button_Pressed__');

    // dispatch(increment_Single_Cart_Item(index));

    dispatch(
      productsApiSlice.util.updateQueryData(
        'getProducts',
        {limit: home_page_product_limit},
        draft_Products => {
          // const temp_this_product_id = draft_Products[home_item_index].id;
          // const one_Item = draft_Products[this_product_id];
          // const one_Item_by_product_index = draft_Products[product_index];

          /*console.log('one_Item_by_product_index: ', one_Item_by_product_index);
          console.log('product_index: ', product_index);

          console.log('one_Item: ', one_Item);
          console.log('this_product_id: ', this_product_id);
          console.log('cart_item_Index', cart_item_Index);*/

          draft_Products[product_index].temp__Quantity += 1;

          dispatch(increment_cart_item_for_home_index_0(cart_item_Index));

          const item_temp_cart_price = draft_Products[product_index].price;
          dispatch(add_price_to_total_cart_price(item_temp_cart_price));
        },
      ),
    );
  };

  const update_One_Cart_Item_Value = (str: string) => {
    // console.log("__number_Formatter.test(str)__: ",number_Formatter.test(str));

    console.log('below are commented on 11th nov 2024');
  };

  const one_cart__item_decrement_button_pressed = () => {
    // 999

    /*  if (quantity === 0) {
                      dispatch(
                          productsApiSlice.util.updateQueryData(
                              'getProducts',
                              {limit: home_page_product_limit},
                              draft_Products => {
                                  // state.home_State.paginate_data.docs[action.payload].temp__Quantity = 1;
                                  draft_Products[this_product_id].btn_Pressed = false;
                                  draft_Products[this_product_id].temp__Quantity = 0;
                              },
                          ),
                      );

                      return;
                  } else {*/

    dispatch(
      productsApiSlice.util.updateQueryData(
        'getProducts',
        {limit: home_page_product_limit},
        draft_Products => {
          // const temp_this_product_id = draft_Products[home_item_index].id;
          // const one_Item = draft_Products[this_product_id];

          draft_Products[product_index].temp__Quantity -= 1;

          dispatch(decrement_cart_item_for_home_index_0(cart_item_Index));

          const item_temp_cart_price = draft_Products[product_index].price;

          dispatch(deduct_price_to_total_cart_price(item_temp_cart_price));
        },
      ),
    );

    // }
  };

  const box_Height = comp_Height_3; //comp_Height_3 / 2;
  // const heart_Width= t_Width/5;
  const add_Width = comp_Width_3; //t_Width -(heart_Width);

  return (
    <View
      style={{
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // paddingHorizontal: 4,
        height: comp_Height_3,
        width: comp_Width_3,
        // borderColor: ukbd_red,
        // backgroundColor: 'blue',
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: comp_Height_3,
          alignItems: 'flex-end',
          // backgroundColor: 'tomato',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // borderColor: 'tomato',//ukbd_red,
            //borderWidth: hairlineWidth,//1,
            // flex: 2,
            justifyContent: 'flex-end',
            height: box_Height,
            // backgroundColor: 'teal',
          }}>
          <View
            style={{
              justifyContent: 'center',
              width: add_Width, //t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: 'transparent', //ukbd_red,
            }}>
            <Single_Cart_Item_Decrement_Btn
              comp_Height_2={box_Height}
              btn_Pressed={one_cart__item_decrement_button_pressed}
              comp_Width={40}
              icon_Color={ukbd_navy_blue}
            />

            <View
              style={{
                justifyContent: 'center',
                width: add_Width - (40 + 40), //(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'transparent', //ukbd_red,//'transparent',//ukbd_red,
              }}>
              <TextInput
                style={{
                  height: box_Height, //deviceHeight/15.5,

                  width: add_Width - (40 + 40),
                  // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
                  // divider width (2) january 26, 2023, arefin
                  // ...common_Text_Input_Styles.text_Input_Email,
                  textDecorationLine: 'none',
                  // backgroundColor: 'teal',
                  // paddingLeft: 15,
                  fontSize: 18,
                  letterSpacing: 1.5, //1.5,//0.5,
                  color: ukbd_navy_blue,
                  // backgroundColor: 'blue',
                }}
                placeholder={`${quantity}`}
                caretHidden={false}
                placeholderTextColor={ukbd_place_holder_TextColor}
                autoCapitalize="none"
                // caretHidden={true} uncomment this line otherwise cursor will not show , don't make "false" either.....
                autoCorrect={false} // ios only
                keyboardType={'numeric'}
                // ref={ref_email_FPass}
                onChangeText={value => update_One_Cart_Item_Value(value)}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                textContentType={'creditCardNumber'} // ios
                cursorColor={ukbd_place_holder_TextColor} //android
                // onSubmitEditing={on_Next_From_FP_Email_Input_2}
                value={quantity.toString()}
                returnKeyType={'next'}
                textAlign={'center'}
              />
            </View>

            <Single_Cart_Item_Increment_Button
              comp_Height_2={box_Height}
              btn_Pressed={one_cart__item_increment_button_pressed}
              comp_Width={40}
              icon_Color={ukbd_navy_blue}
            />
          </View>

          {/*80 % ends here*/}
        </View>
      </View>
    </View>
  );
};

export default Single_Cart_Item_Increment_Decrement_Root;
