import React from 'react';
import {
  View,
  Text,
  // TouchableOpacity,
  Pressable,
  StyleSheet,
  // Image,
  // Modal,
  ImageBackground,
  Image,
  Platform,
  // TouchableWithoutFeedback,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const BagIcon = require('../../../assets/images/svg/bag-shopping.svg');
const Bag = require('../../../assets/images/Bag.svg');
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const product1 = require('../../../assets/images/p1.jpg');

import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import Item_Detail from './Item_Detail';
import Ten_Off from './Ten_Off';
// import WAS_Value from "./WAS_Value";
import Ten_15_Days_Home from './Ten_15_Days_Home';

import Svg, {
  Defs,
  G,
  Path,
  TextPath,
  TSpan,
  Text as Text_SVG,
} from 'react-native-svg';

import {
  bag_Bg_Color_From_HSLA,
  item_In_Home_Page_Border_Color,
  ukbd_navy_blue,
  ukbd_overlay_Color,
  ukbd_place_holder_TextColor,
  ukbd_red,
  very_light_red_ukbd,
} from '../ui_utils/important_Colors.ts';

import Image_Pre_Fetch_1 from '../ui_utils/Image_Pre_Fetch_1.tsx';
import Item_Price_Related_Comps from '../comps/Item_Price_Related_Comps.tsx';
import {monetary_Unit_Interface} from '../ui_utils/localization_utils.ts';
import {useAppDispatch} from '../../lib/app/hooks.ts';

import {
  product_detail_only_in_double_tap,
  single_Product__Show_Details_Button_true,
} from '../../lib/features/products/product_Slice.ts';
import {One_Product_for_Home_Page_Interface} from '../../interfaces/products/product.ts';
import Add_Cart_OR_Favorite__Btn_Home_Page from '../screens/details_page/add_button/home_page/Add_Cart_OR_Favorite__Btn_Home_Page.tsx';
import Vertical_Divider_Full_Width_Active_Order from '../../divider/Vertical_Divider_Full_Width_Active_Order.tsx';
import hairlineWidth = StyleSheet.hairlineWidth;

import {
  // Animated,
  runOnJS,
  // useAnimatedStyle
} from 'react-native-reanimated';
import {productsApiSlice} from '../../lib/features/products/productsApiSlice.ts';
import {home_page_product_limit} from '../../config/business_constants.ts';
import Snackbar from 'react-native-snackbar';

export interface Item_Interface {
  item_navigation: any;
  /*
  item_Pressed: (itemID: string) => void,
  wish_Button_Pressed: (itemID: string) => void,
  */
  item_Data: One_Product_for_Home_Page_Interface;
  comp_Height: number; // height is dynamic
  comp_Width: number;
  inner_Comp_Width_2: number;

  currency_Code_Delivery: monetary_Unit_Interface;
  // local_Currency_2: monetary_Unit_Interface,
  // exchange_Rate: number,

  // conversion_Rate: number, //={conversion_Rate}
  // show_Details_Btn: boolean,
  index_Value: number;
  is_Small_Device: boolean;
}

const Home_Item: React.FC<Item_Interface> = ({
  item_navigation,
  // item_Pressed,
  // wish_Button_Pressed,
  item_Data,
  comp_Height,
  comp_Width,
  inner_Comp_Width_2,
  currency_Code_Delivery,
  // local_Currency_2,
  // exchange_Rate,
  // conversion_Rate,//: number,
  // show_Details_Btn,
  index_Value,
  is_Small_Device,
}) => {
  // console.log("__item_Data: ", item_Data);
  // console.log("__item_Data.price: ", item_Data.price);
  // console.log("__item_Data.item_Data.view_price: ", item_Data.view_price);

  const dispatch = useAppDispatch();

  const product_Wish_Button_Pressed = (productID: string) => {
    // return;

    return item_navigation.navigate('Product_Details_Page', {
      single_Product_ID: item_Data.id,
    });

    /*
    return props.navigation_For_Header.navigate('Archived_Page_Reaction_with_Tab_Pages', {
      postID: Number(props.onePostItem.id),
      userID: props.logger_ID,
      primary_Index2: props.primaryIndex,
      parent_Page: 'ixprez',
    });
    */
  };

  const product_Details_Button_Pressed = (/*productID: string*/) => {
    console.log('___product_Details_Button_Pressed___');
    return item_navigation.navigate('Product_Details_Page', {
      single_Product_ID: item_Data.id,
      add_Button_Pressed_State: item_Data.btn_Pressed,
      quantity: item_Data.temp__Quantity,
    });

    /*
    return props.navigation_For_Header.navigate('Archived_Page_Reaction_with_Tab_Pages', {
      postID: Number(props.onePostItem.id),
      userID: props.logger_ID,
      primary_Index2: props.primaryIndex,
      parent_Page: 'ixprez',
    });
    */
  };
  const externalLibraryFunction = (one_Product_Index: number) => {
    let value_boolean;
    dispatch(
      productsApiSlice.util.updateQueryData(
        'getProducts',
        {limit: home_page_product_limit},
        (draft_Products) => {

          value_boolean = draft_Products[one_Product_Index].show_Details_Btn;

          draft_Products[one_Product_Index].show_Details_Btn = !value_boolean;


        },
      ),
    );

    if (!value_boolean) {
      // return product_Details_Button_Pressed();


      dispatch(product_detail_only_in_double_tap(null));
    }


    return;
  };

  const singleTap = Gesture.Tap().onEnd((_event, success) => {
    'worklet';

    if (success) {
      console.log('Yes single tap and index: ', index_Value);

      runOnJS(externalLibraryFunction)(index_Value);
    } else {
      return;
    }
  });

  const double_tap_2 = (index_Value_2: number) => {
    return product_Details_Button_Pressed();
  };

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        runOnJS(double_tap_2)(index_Value);

        console.log('double tap!');
      }
    });

  const taps = Gesture.Exclusive(doubleTap, singleTap);

  const detail_BTN_10_P_Off_Width = comp_Width / 2.4;
  const detail_BTN_10_P_Off_Height = 30; //24;//30; //35;//comp_Height / 10;

  const gesture_Detector_Height =
    comp_Height - (detail_BTN_10_P_Off_Height + 10);

  const img_height = gesture_Detector_Height / 3;

  const width_Without_Padding = comp_Width - 14;
  // console.log("__item_Data.view_price__: ", item_Data.view_price);
  // console.log(`__item_Data.offer_percentage__", ${item_Data.offer_percentage} ${typeof item_Data.offer_percentage}`);

  return (
    <View
      style={{
        ...Item_Styles.itemGrid,
        width: comp_Width,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 7, // const width_Without_Padding = comp_Width-20;
        paddingVertical: 5,
        height: comp_Height, //'100%',// using percentage dimensions
        // backgroundColor: 'deepskyblue',
        // https://reactnative.dev/docs/height-and-width#percentage-dimensions

        // scaleY: -1, // https://github.com/facebook/react-native/issues/30034
      }}>
      <GestureDetector gesture={taps}


      >
        <View
          style={{
            ...Item_Styles.item_Style_With_Gesture,
            height: gesture_Detector_Height,
            width: width_Without_Padding, //comp_Width-10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          {/*Detail Button Section at top begins here*/}

          <View
            style={{
              ...Item_Styles.item_Top_Section,
              width: width_Without_Padding, //comp_Width-10,//inner_Comp_Width_2,// - 10,

              height: detail_BTN_10_P_Off_Height, //'30%',//deail_BTN_10_P_Off_Height * 1.5,

              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexDirection: 'row',
              // backgroundColor: 'teal',
              zIndex: 15,
            }}>
            <Ten_Off
              comp_Height={detail_BTN_10_P_Off_Height}
              comp_Width={detail_BTN_10_P_Off_Width}
            />

            {/* {item_Data.show_Details_Btn ? (
              <Item_Detail
                product_Details_Button_Pressed_2={
                  product_Details_Button_Pressed
                }

                comp_Height={detail_BTN_10_P_Off_Height}
                comp_Width={detail_BTN_10_P_Off_Width}
                zIndex_1={15}
              />
            ) : null}*/}
          </View>

          {/*Detail Button Section at top ends here*/}

          <View
            style={{
              ...Item_Styles.itemImgHolder,
              width: inner_Comp_Width_2,
              // paddingTop: 1,
              height: gesture_Detector_Height / 3,
            }}>
            {!item_Data.image[0] ? null : item_Data.image[0] !== '' ? (
              <Image_Pre_Fetch_1
                img_height={img_height}
                img_width={inner_Comp_Width_2}
                // img_height
                // inner_Comp_Width_2

                imageUrl={`${item_Data.image}`}
                id_temp={item_Data.image[0]}
                resizeMode={Platform.OS === 'android' ? 'center' : 'contain'}
              />
            ) : null}
          </View>

          <View
            style={[
              // Item_Styles.itemDetails,

              {
                flexDirection: 'column',
                width: inner_Comp_Width_2,
                // backgroundColor: 'cyan',
                // alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'flex-start',

                // height: (deail_BTN_10_P_Off_Height * 2.2) +
              },
            ]}>
            <View
              style={{
                // 911
                height: is_Small_Device
                  ? gesture_Detector_Height / 6.5
                  : gesture_Detector_Height / 5.5,
                // (gesture_Detector_Height/5)+ (gesture_Detector_Height/ 4)
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text
                style={Item_Styles.itemTitle}
                numberOfLines={is_Small_Device ? 2 : 3}
                ellipsizeMode="tail">
                {item_Data.title}
                {/*{index_Value}*/}
              </Text>
            </View>

            <Item_Price_Related_Comps
              item_Data__price={item_Data.price}
              // item_Data__offer_percentage={item_Data.offer_percentage}
              comp_Height={gesture_Detector_Height / 4}
              inner_Comp_Width_2={inner_Comp_Width_2}
              currency_Code_Delivery={currency_Code_Delivery}
              // local_Currency_2={local_Currency_2}
              // conversion_Rate={conversion_Rate}
              index_Value={index_Value}
            />

            <Ten_15_Days_Home
              comp_Height_2={gesture_Detector_Height / 16}
              content={'Delivers within 10 to 15 days'}
              comp_Width={inner_Comp_Width_2}
              bg_Color={ // {'tomato'}
                'transparent'
              }
            />

            {is_Small_Device ? null : (
              <Vertical_Divider_Full_Width_Active_Order
                // imporTANT
                compHeight={4}
              />
            )}
          </View>

          {item_Data.show_Details_Btn || item_Data.btn_Pressed ? (
            <View
              style={{
                position: 'absolute',
                top: 0,
                // right: 0,
                // bottom: 0,
                width: width_Without_Padding, //comp_Width - 10, //PADDING (5 +5 =10)//
                // height: comp_Height - ((deail_BTN_10_P_Off_Height) * 2 + 10),//(10 + (deail_BTN_10_P_Off_Height) + (deail_BTN_10_P_Off_Height)) +2,
                // PADDING (5 +5 =10) + ADD TO CART (Button with heart) HEIGHT AT BOTTOM + Details and 10% Off Height at top
                //height: comp_Height, // (5+ 5) = 10 vertical padding, 5 extra
                //

                height: gesture_Detector_Height, //'100',//'45%',//'90%', //HIEGHT IS AUTO NOW
                left: 0,
                // customer_Reg_Response_Interface
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightsteelblue', //ukbd_overlay_Color,//'grey',//ukbd_overlay_Color,//'transparent',// ukbd_overlay_Color, //"gray",

                // ukbd_overlay_Color,//'lightsteelblue',
                opacity: 0.7,
                zIndex: 14,
              }}>
              <Svg
                width={detail_BTN_10_P_Off_Height * 2}
                height={detail_BTN_10_P_Off_Height * 2}
                viewBox="0 0 52 52">
                <G>
                  <Path
                    fill={bag_Bg_Color_From_HSLA}
                    d="M1.683,32h28.635c0.442,0,0.86-0.194,1.146-0.531c0.286-0.338,0.407-0.782,0.334-1.218l-3.538-21
		C28.137,8.526,27.515,8,26.779,8H22V6c0-3.309-2.691-6-6-6s-6,2.691-6,6v2H5.221C4.485,8,3.863,8.526,3.741,9.251l-3.538,21
		c-0.073,0.436,0.048,0.88,0.334,1.218C0.823,31.806,1.24,32,1.683,32z M11,6c0-2.757,2.243-5,5-5s5,2.243,5,5v2H11V6z M4.728,9.417
		C4.768,9.175,4.976,9,5.221,9H10v4c0,0.276,0.224,0.5,0.5,0.5S11,13.276,11,13V9h10v4c0,0.276,0.224,0.5,0.5,0.5S22,13.276,22,13V9
		h4.779c0.245,0,0.453,0.175,0.493,0.417l3.538,21c0.025,0.147-0.015,0.292-0.111,0.406S30.467,31,30.317,31H1.683
		c-0.149,0-0.285-0.063-0.382-0.177s-0.136-0.258-0.111-0.406L4.728,9.417z"
                  />
                </G>
              </Svg>
            </View>
          ) : null}
        </View>
      </GestureDetector>

      {/*bottom favourite row begins here*/}

      <Add_Cart_OR_Favorite__Btn_Home_Page
        t_Height={detail_BTN_10_P_Off_Height}
        t_Width={width_Without_Padding} // padding 5*2,
        product_Id={item_Data.id}
        home_item_index={index_Value}
        quantity={item_Data.temp__Quantity}
        add_Button_Pressed_State={item_Data.btn_Pressed}
        bg_Color={'transparent'}
        // {'cyan'}
      />

      {/*bottom favourite row ends here*/}
    </View>
  );
};

export const favorite_Button_Styles = StyleSheet.create({
  item_Top_Portion: {
    // flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', //'white',//"#ffffff",
  },
  // item_Top_Portion

  // wishButton
});
const Item_Styles = StyleSheet.create({
  itemGrid: {},

  item_Style_With_Gesture: {
    backgroundColor: '#FFF',
    borderRadius: 2,

    borderStyle: 'solid',

    /*
    borderWidth: hairlineWidth,//1,

    borderColor: ukbd_red,

    //item_In_Home_Page_Border_Color,//ukbd_red, item_In_Home_Page_Border_Color,////"rgba(255, 0, 0, 0.05)"

    */

    borderLeftWidth: hairlineWidth, // 0.6,
    borderTopWidth: hairlineWidth, // 0.6,
    borderRightWidth: hairlineWidth, //0.6,
    borderTopColor: ukbd_red,
    borderRightColor: ukbd_red,
    borderLeftColor: ukbd_red,
  },
  itemImgHolder: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  itemTitle: {
    color: ukbd_navy_blue, //"#012965",
    // height: deail_BTN_10_P_Off_Height * 1.5,
    fontSize: 15,
    // lineHeight: 14,
    fontWeight: '500',
    // fontFamily: "RobotoCondensed-Regular",
    textAlign: 'left',
    // height: 45,
    // marginBottom: 10
    // display: 'none',
    letterSpacing: 0,
  },

  item_Top_Section: {},
});
export default Home_Item;
