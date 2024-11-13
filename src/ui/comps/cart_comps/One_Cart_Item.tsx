import React,
{
    useRef
} from "react";

import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
    findNodeHandle, Pressable,
} from "react-native";


import {useActionSheet} from "@expo/react-native-action-sheet";
import Snackbar from "react-native-snackbar";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {unwrapResult} from "@reduxjs/toolkit";


// import {useAppDispatch} from "../../../appStore/app/hooks";
// import {delete_One_Cart_Item, local_Cart_Item} from "../../../appStore/Reducers/product_Slice";
import {
    ukbd_navy_blue,
    ukbd_place_holder_TextColor,
    ukbd_red, ukbd_red_light,
    very_light_red_ukbd
} from "../../ui_utils/important_Colors";
import moment from "moment/moment";
// import {base_Image_URL} from "../../../utils_server/server_settings";
import Single_Cart_Item_Increment_Decrement_Root
    from "./cart_Item_Increment_Decrement_Qtity/Single_Cart_Item_Increment_Decrement_Root";
import hairlineWidth = StyleSheet.hairlineWidth;
import {local_Cart_Item} from "../../../interfaces/products/product.ts";
import {useAppDispatch} from "../../../lib/app/hooks.ts";
import {delete_One_Cart_Item} from "../../../lib/features/products/product_Slice.ts";
// import {numberWithCommas} from "../../headers/sub_Comps/Bag_Button";

// import {OrderList} from "../../../appStore/interfaces_Slice/order_Related_Interfaces";


export interface One_Cart_Item_Props {
    one_Cart: local_Cart_Item,//one_Product__interface,
    index: number;
    comp_Width_2: number;
    comp_Height_2: number;
    navigation_Attribute: any;

    delivery_Currency_Sign: string,
    // with_Commas: boolean,

}


const One_Cart_Item: React.FC<One_Cart_Item_Props> = ({
                                                          one_Cart,
                                                          index,
                                                          comp_Width_2,
                                                          comp_Height_2,
                                                          navigation_Attribute,

                                                          delivery_Currency_Sign,
                                                          // with_Commas,


                                                      }) => {


    const dispatch = useAppDispatch();
    // const item = oneComment;

    // CODES RELATED TO PRESSING AN ELEMENT AND ACTION SHEETS OPENS UP RESIDES HERE: ______Begins__here____


    // const {showActionSheetWithOptions} = useActionSheet();


    const onSingleTap = () => {
        console.log(" one Single Tap");
    };

    const one_comp_Width = comp_Width_2 / 2;

    const image_Width_Height = one_comp_Width / 3;//3.5;

    const price_Width = one_comp_Width / 2.3;


    const cart_Item_Delete_BTN_Pressed = () => {

        console.log("__at __cart_Item_Delete_BTN_Pressed");
        return dispatch(delete_One_Cart_Item(index));

    };


    const one_Cart_Item_Pressed = () => {

        console.log("__at one_Cart_Item_Pressed");
        // return navigation_Atribute.navigate()


        // console.log("one_Cart >> ",one_Cart);


        return navigation_Attribute.navigate('Product_Details_Page', {
            single_Product_ID: one_Cart.product_ID,
            add_Button_Pressed_State: true,//one_Cart.btn_Pressed,
            quantity: one_Cart.quantity,

        });


    };


    return (

        <View


            // onPress={navigate_To_Product_Detail_Page}


            style={
                {

                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: comp_Width_2,
                    height: comp_Height_2,
                    // backgroundColor: 'gold',
                }
            }>
            <View


                // onPress={navigate_To_Product_Detail_Page}


                style={
                    {


                        // backgroundColor: "royalblue",
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignContent: 'center',
                        height: comp_Height_2,
                        width: comp_Width_2,//'100%',
                        //paddingLeft: 5, //5 +


                    }
                }>


                {/*image part and name part begins here shopping bag page*/}


                <Pressable

                    onPress={one_Cart_Item_Pressed}
                    style={{
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // backgroundColor: 'tomato',
                        // paddingLeft: 6,
                        width: one_comp_Width,//'70%',//comp_Widht_2*0.91 // 5 +
                    }}
                >


                    {


                        (one_Cart?.image) ? (
                            <View

                                style={{
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    // backgroundColor: 'violet',
                                    /*
                                    paddingLeft: 3, // 10 padding horizontal
                                    paddingRight: 7,
                                    */
                                }}

                            ><Image
                                style={{

                                    width: image_Width_Height,  // 10 (padding Horizontal) + (one_comp_Width / 3) (img width)
                                    height: image_Width_Height,//comp_Height_2 / 1.6,
                                }}


                                source={{
                                    uri: `${one_Cart.image}`,

                                }}

                                resizeMode={"center"}
                            />

                                <View
                                    style={{
                                        flexDirection: "column",
                                        // backgroundColor: 'gold',
                                        // width: one_comp_Width,
                                        // height: comp_Height_2,

                                    }}

                                ><Text style={{
                                    fontSize: 12,
                                    color: ukbd_red_light,
                                }}>{delivery_Currency_Sign}/U: {one_Cart.price}</Text>
                                </View>

                            </View>
                        ) : (<View

                                style={{
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                }}

                            ><Image
                                style={{



                                    width: image_Width_Height,
                                    height: image_Width_Height,
                                }}


                                source={{
                                    uri: "https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png",

                                }}

                                resizeMode={"center"}
                            />
                            </View>

                        )
                    }

                    <View style={{
                        flexWrap: 'wrap',
                        minHeight: comp_Height_2,

                        width: (one_comp_Width - ((image_Width_Height))),
                        // 10 (padding Horizontal) + (one_comp_Width / 3) (img width)
                        // backgroundColor: 'teal',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 4,
                        paddingRight: 4,


                    }}>

                        <Text style={One_Cart_Item_Styles.title_}
                              // numberOfLines={4}
                              ellipsizeMode="tail"
                              numberOfLines={5}

                        >
                            {one_Cart.name}
                        </Text>


                    </View>

                </Pressable>


                {/*image part  and name part ends here shopping bag page*/}


                {/*quantity  part and price part begins here*/}
                <View
                    style={{

                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // backgroundColor: 'red',
                        width: one_comp_Width,//comp_Widht_2*0.91
                        // paddingL

                    }}
                >

                    <View
                        style={{
                            flexDirection: "column",
                            // backgroundColor: 'gold',
                            width: one_comp_Width,
                            height: comp_Height_2,
                        }}

                    >

                        {/*index dot and date begins here */}
                        <View style={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: one_comp_Width,
                            height: comp_Height_2,
                            // backgroundColor: 'green',


                        }}>

                            {/* quantity part begins here*/}

                            <View
                                style={{
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    width: one_comp_Width - (price_Width),
                                    // backgroundColor: 'orange',

                                }}>

                                {/*1st row increment, quantity, decrement begins here */}


                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    // backgroundColor: 'deepskyblue',
                                    // width: one_comp_Width-(one_comp_Width/3.5),
                                    height: comp_Height_2 / 2,
                                    borderBottomColor: ukbd_navy_blue,
                                    borderBottomWidth: hairlineWidth,
                                    // paddingLeft: 6,

                                }}>

                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        // backgroundColor: 'orange',
                                        // width: one_comp_Width-(one_comp_Width/3.5),
                                        height: comp_Height_2 / 2,

                                    }}>
                                        <Single_Cart_Item_Increment_Decrement_Root
                                            comp_Height_3={comp_Height_2 / 2}
                                            comp_Width_3={one_comp_Width - (price_Width)}
                                            this_product_id={one_Cart.product_ID}
                                            quantity={one_Cart.quantity}
                                            product_index={one_Cart.product_Index}
                                            cart_item_Index={index}
                                        />
                                    </View>
                                </View>


                                {/*1st row increment, quantity, decrement ends here */}

                                {/*2nd row delete begins here */}

                                <Pressable

                                    onPress={cart_Item_Delete_BTN_Pressed}
                                    style={({pressed}) => [
                                        {

                                            backgroundColor: pressed ? very_light_red_ukbd : 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            // backgroundColor: 'deepskyblue',
                                            width: 22 * 2,
                                            // width: one_comp_Width - (price_Width),
                                            // width: one_comp_Width-(one_comp_Width/3.5),
                                            height: comp_Height_2 / 2,

                                        }
                                    ]}>
                                    <FontAwesome5
                                        name="trash-alt"
                                        color={ukbd_navy_blue}
                                        size={22}/>
                                </Pressable>

                                {/*2nd row delete begins here */}


                            </View>


                            {/* quantity part ends here*/}


                            {/*Price part begins here*/}

                            <View
                                style={{
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    width: price_Width,//one_comp_Width / 3.1
                                    // backgroundColor: 'red',

                                }}>

                                <Text style={
                                    One_Cart_Item_Styles.monetary_Text_Style_Single_Cart_Item
                                }>

                                    {/*{local_Currency_Sign} {one_Cart.price * one_Cart.quantity}
*/}

                                    {delivery_Currency_Sign} {parseFloat(String(one_Cart.price * one_Cart.quantity)).toFixed(2)}

                                    {/*{delivery_Currency_Sign} {(!with_Commas)
                                    ? parseFloat(String(one_Cart.price * one_Cart.quantity)).toFixed(2)
                                    :numberWithCommas(one_Cart.price * one_Cart.quantity)}*/}


                                </Text>

                            </View>

                            {/*Price Part ends here*/}


                        </View>

                        {/*index dot and date ends here */}

                    </View>


                </View>

                {/*quantity part and price part __ends__ here*/}


            </View>

        </View>
    );


};


export default One_Cart_Item;


const One_Cart_Item_Styles = StyleSheet.create({


        common_Text_Style_Order_List: {

            fontSize: 12,
            color: ukbd_navy_blue,
        },


        title_:
            {
                color: ukbd_navy_blue,
                fontSize: 12,
                // lineHeight: 14,
                // fontWeight: "300",
                // fontFamily: "RobotoCondensed-Regular",
                textAlign: 'left',// "justify",

            },

        monetary_Text_Style_Single_Cart_Item: {
            // fontWeight: '400',//'bold',
            fontSize: 16,
            color: ukbd_navy_blue,//ukbd_navy_blue,
            letterSpacing: 1.2,
        },


    }
);
