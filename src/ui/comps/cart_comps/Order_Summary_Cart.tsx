import {Pressable, StyleSheet, Text, View} from "react-native";
import {
    bg_Color_List_And_Phone_BG, order_Summary_BG_Color,
    ukbd_navy_blue,
    ukbd_red, ukbd_red_light,
    very_light_red_ukbd
} from "../../ui_utils/important_Colors";
// import {numberWithCommas} from "../../headers/sub_Comps/Bag_Button";
import Promotion_Code_Input from "./inputs/Promotion_Code_Input";
import {button_Styles} from "../../screens/identity/Login_Page";
import Fontisto from "react-native-vector-icons/Fontisto";
import React from "react";
// import {Cart_Style_Root} from "../../screens/drawer_Screens/Cart";
import {One_Cart_Item_Props} from "./One_Cart_Item";
import hairlineWidth = StyleSheet.hairlineWidth;
/*import {
    local_Cart_Item, select_Conversion_Rate,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    select_Local_Currency,
    select_Shipped_From_State_Or_Delivery_Currency,
    select_Total__Local_Cart_Weight
} from "../../../appStore/Reducers/product_Slice";
import {useAppSelector} from "../../../appStore/app/hooks";*/
import {convert_TO_BDT_From_GBP, monetary_Unit_Interface} from "../../ui_utils/localization_utils";
import {navigate} from "@react-navigation/routers/src/CommonActions";
// import List_Header_Common from "../delivery_And_Payment/List_Header_Common";
import Order_Summary_Common_Text_View_wrapper_Space_Between
    from "./Order_Summary_Common_Text_View_wrapper_Space_Between";
import {useAppSelector} from "../../../lib/app/hooks.ts";
import {local_Cart_Item} from "../../../interfaces/products/product.ts";
import {
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit, select_Shipped_From_State_Or_Delivery_Currency
} from "../../../lib/features/products/product_Slice.ts";
import List_Header_Common from "../../header/List_Header_Common.tsx";

export interface Order_Summary_Cart_Interface {

    inner_Comp_Width: number,
    order_Summary_Inner_Comp_Width: number,
    checkout_Button_Pressed_0: () => void,
    nav: any,
    proceed_Btn_Visible: boolean,


}


// /Users/sultanularefin/progs/ukbd2/nayeem_Vai_ukbd/website_react/src/Utils/common.js
export const calculatePercentage = (percentage: number, number: number) => {
    return (percentage / 100) * number;
};

const Order_Summary_Cart: React.FC<Order_Summary_Cart_Interface> = ({
                                                                        inner_Comp_Width,
                                                                        order_Summary_Inner_Comp_Width,
                                                                        checkout_Button_Pressed_0,
                                                                        nav,
                                                                        proceed_Btn_Visible,

                                                                    }) => {

// const Order_Summary_Cart = ()=>{
    const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);
    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);

    const Home_State_Delivery_Currency: monetary_Unit_Interface = useAppSelector(select_Shipped_From_State_Or_Delivery_Currency);

    // const local_Monetary_Unit = useAppSelector(select_Local_Currency);
    // const With_Commas = (local_Monetary_Unit.Currency_Code === "BDT");
    // const local_Cart_Weight_Total = useAppSelector(select_Total__Local_Cart_Weight);
    // const parcentage_price = (cart_total_parcentage).toFixed(2);
    const percentage_price = (local_Cart_Price / 100) * 20;//calculatePercentage(20, Number(local_Cart_Price));
    //calculatePercentage(20, Number(local_Cart_Price)).toFixed(2);
    // const weight_price = (local_Cart_Weight_Total * 2);//.toFixed(2);

    // Shipping & Duties  £7.25 (DEFAULT)
    // Handling Charge in the UK  20%(DEFAULT)

    // const conversion_Rate: number = useAppSelector(select_Conversion_Rate);


    const take_Customer_To_Home_Page = () => {
        // return navigation.navigate("Cart");
        return nav.navigate("Home");
    };


    // const  = local_Cart_Weight_Total
    return (


        <View


            style={{

                //height: displayHeight,// (displayHeight- (displayHeight / 15)),
                flexDirection: "column",
                // flex: 9,
                justifyContent: "flex-start",
                alignItems: 'center',
                backgroundColor: order_Summary_BG_Color,//bg_Color_List_And_Phone_BG,//'aliceblue',
                paddingTop: 20,
            }

            }

        >


            <List_Header_Common
                // comp_Width={inner_Comp_Width}
                comp_Width={inner_Comp_Width}
                inner_Comp_Width={order_Summary_Inner_Comp_Width}
                title={"Order Summary"}
                bg_Color={'transparent'}
            />


            {/*My bag {X} items begins here*/}

            <Order_Summary_Common_Text_View_wrapper_Space_Between
                total_width={order_Summary_Inner_Comp_Width}
                left_Text={`My bag (${local_Cart.length} items)`}
                right_Text={`${Home_State_Delivery_Currency.text} ${parseFloat(String(local_Cart_Price)).toFixed(2)}`}


            />




            <Order_Summary_Common_Text_View_wrapper_Space_Between
                total_width={order_Summary_Inner_Comp_Width}
                left_Text={`Handling Charge in the UK`}
                right_Text={`${Home_State_Delivery_Currency.text} ${parseFloat(String(percentage_price)).toFixed(2)}`}
            />


            {/*<Order_Summary_Common_Text_View_wrapper_Space_Between
                total_width={order_Summary_Inner_Comp_Width}
                left_Text={`Shipping, customs & duties.`}
                right_Text={`${Home_State_Delivery_Currency.text} ${parseFloat(String(weight_price)).toFixed(2)}`}
            />*/}




            {/*add promotion begins here*/}
            <View style={{

                width: order_Summary_Inner_Comp_Width,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'center',
                paddingTop: 10,
                // backgroundColor: 'tomato',

                paddingBottom: 20,
                borderBottomWidth: hairlineWidth,
                borderBottomColor: ukbd_navy_blue,

            }}>
                <View style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                    // paddingTop: 10,

                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            // fontWeight: 'bold',
                            color: ukbd_navy_blue,
                        }}
                    >
                        Add your promotion code
                    </Text>
                </View>

                {/*Promotion code input begins here*/}
                <View style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                    paddingTop: 10,

                }}>


                    <Promotion_Code_Input
                        comp_Width={order_Summary_Inner_Comp_Width - 1} //-6 to -1
                        text_Input_Comp_Height={(order_Summary_Inner_Comp_Width / 7)}
                        // ref_email_FPass={ref_Email_Forget_Pass}
                        // on_Next_From_FP_OTP_Input_2={update_index}
                    />


                </View>

                {/*Promotion code input ends here*/}
            </View>


            {/*add promotion ends here*/}


            {/*Total excluding delivery begins here */}


            <View style={{

                width: order_Summary_Inner_Comp_Width,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'center',
                paddingTop: 10,
                paddingBottom: 20,

            }}>
                {/*row begins here*/}
                <View style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {/* left part quantity begins here */}
                    <View style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row'}}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: ukbd_navy_blue,
                            }}
                        >Total

                        </Text>
                        <Text style={{
                            fontSize: 15,
                            // fontWeight: 'bold',
                            color: ukbd_navy_blue,
                        }}> (Incl. delivery in Dhaka)</Text>
                    </View>
                    {/* left part quantity ends here*/}

                    {/* right part quantity ends here*/}


                   {/* <View>
                        <Text
                            style={Order_Summary_Cart_Styles.local_Price_Style}
                        >
                            {Home_State_Delivery_Currency.text}
                            {
                                parseFloat(String(Number(local_Cart_Price + percentage_price +
                                    weight_price))).toFixed(2)
                            }


                        </Text>
                    </View>*/}

                    {/* right part quantity ends here*/}
                </View>
                {/*row ends above*/}
            </View>


            {/*Total excluding delivery ends here */}


            {/* BDT price equivalent begins here */}

            <View style={{

                width: order_Summary_Inner_Comp_Width,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'center',
                // paddingTop: 5,
                paddingBottom: 4,
                // backgroundColor: 'tomato',

            }}>
                {/*row begins here*/}
                <View style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {/* left part quantity begins here */}
                    <View>
                        <Text
                            style={{
                                fontSize: 13,
                                // fontWeight: 'bold',
                                color: ukbd_navy_blue,
                            }}
                        >
                            {/*Total (excluding delivery)*/}


                            Equivalent Taka (BDT) excluding VAT :
                        </Text>
                    </View>
                    {/* left part quantity ends here*/}

                    {/* right part quantity ends here*/}


                    <View>
                        <Text
                            style={{
                                ...Order_Summary_Cart_Styles.local_Price_Style,
                                fontSize: 13,
                            }}
                        >

                            {/* {local_Monetary_Unit.text} {(!With_Commas)
                            ? parseFloat(String(Number(local_Cart_Price + parcentage_price +

                                weight_price))).toFixed(2)
                            : numberWithCommas(Number(local_Cart_Price + parcentage_price +

                                weight_price))
                        }*/}


                           {/* {local_Monetary_Unit.text}*/}
                            {/*{local_Cart_Price}*/}
                           {/* {
                                convert_TO_BDT_From_GBP(local_Cart_Price + percentage_price +

                                    weight_price, 'GBP', 1)


                            }*/}

                            {/*  local_Cart_Price_2={
                            convert_TO_BDT_From_GBP(local_Cart_Price,'GBP', conversion_Rate)
                        }*/}
                        </Text>
                    </View>

                    {/* right part quantity ends here*/}
                </View>
                {/*row ends above*/}
            </View>
            {/* BDT price equivalent ends here */}


            {/*proceed to Checkout Button begins here*/}


            <View
                style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                    paddingTop: 10,
                    paddingBottom: 20,

                }}>

                <Pressable
                    onPress={checkout_Button_Pressed_0}
                    disabled={!proceed_Btn_Visible}

                    // style={Login_Page_styles.loginButton}

                    style={({pressed}) => [
                        {
                            ...button_Styles.loginButton,
                            height: 30,//24,// as told by sir,
                            backgroundColor: (!proceed_Btn_Visible)
                                ? ukbd_red_light
                                : pressed ? very_light_red_ukbd
                                    : ukbd_red,
                            /*
                            backgroundColor: pressed
                                ?

                                very_light_red_ukbd

                                : ukbd_red,
                            */
                            width: order_Summary_Inner_Comp_Width,

                        }
                    ]
                    }


                >
                    <Text style={Order_Summary_Cart_Styles.loginText}>PROCEED TO CHECKOUT</Text>
                </Pressable>
            </View>


            {/*proceed to Checkout Button ends here*/}


            {/*Continue Shopping Button Begins here*/}
            <View
                style={{

                    width: order_Summary_Inner_Comp_Width,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    paddingTop: 10,
                    paddingBottom: 20,

                }}

            >

                <Pressable
                    onPress={take_Customer_To_Home_Page}


                    style={({pressed}) => [
                        {

                            backgroundColor: pressed ? bg_Color_List_And_Phone_BG : 'transparent',
                            //width: order_Summary_Inner_Comp_Width,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            //width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',


                        }]}
                >


                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingRight: 10,
                        }}>

                        <Fontisto

                            name="arrow-left-l"
                            size={order_Summary_Inner_Comp_Width / 16}
                            color={ukbd_navy_blue}
                            style={{}}

                        />

                    </View>


                    <Text
                        style={{
                            fontSize: 18,
                            // fontWeight: 'bold',
                            color: ukbd_navy_blue,
                            letterSpacing: 1.1,
                        }}
                    >
                        Continue Shopping
                    </Text>
                </Pressable>

            </View>

            {/*Continue Shopping Button ends here*/}


        </View>


    );
};

export default Order_Summary_Cart;


export const Order_Summary_Cart_Styles = StyleSheet.create({
    loginText: {
        color: "#fff",
        // fontFamily: "RobotoCondensed-Regular",
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 1.1,

        // fontWeight: "bold",//"300",
        // textTransform: "uppercase"
    },
    local_Price_Style: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: ukbd_navy_blue,
        letterSpacing: 1.1,
    },

    common_View_Shipping_Handling_Charge_Style: {
        // width: order_Summary_Inner_Comp_Width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: 10,
        paddingTop: 10,
        // backgroundColor: 'red',
        borderTopColor: ukbd_navy_blue,
        borderTopWidth: hairlineWidth,
    }
});
