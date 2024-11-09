import {StyleSheet, Text, View} from "react-native";
// import WAS_Value from "./WAS_Value";
// import {convert_TO_BDT_From_GBP, monetary_Unit_Interface, previousPrice} from "../../ui_utils/localization_utils";
// import Excluding_Shipping_and_Duties from "./Excluding_Shipping_and_Duties";
import React from "react";
// import {Item_Interface} from "./Item";
// import {Doc} from "../../../appStore/interfaces_Slice/product_Related_Interfaces";
// import {ukbd_navy_blue} from "../../ui_utils/important_Colors";
import hairlineWidth = StyleSheet.hairlineWidth;
import {convert_TO_BDT_From_GBP, monetary_Unit_Interface} from "../ui_utils/localization_utils.ts";
import {ukbd_navy_blue} from "../ui_utils/important_Colors.ts";

export interface Item_Price_Related_Comps_Interface {


    item_Data__price: number,
    // item_Data__offer_percentage: number,//?:number,

    comp_Height: number, // height is dynamic

    inner_Comp_Width_2: number,

    currency_Code_Delivery: monetary_Unit_Interface,
    // local_Currency_2: monetary_Unit_Interface,
    // conversion_Rate: number, //={conversion_Rate}

    index_Value: number,

}

const Item_Price_Related_Comps: React.FC<Item_Price_Related_Comps_Interface> = (
    {


        // item_navigation,
        // item_Pressed,
        // wish_Button_Pressed,
        // item_Data,
        item_Data__price,
        // item_Data__offer_percentage,
        comp_Height,
        // comp_Width,
        inner_Comp_Width_2,
        currency_Code_Delivery,
        // local_Currency_2,
        // exchange_Rate,
        // conversion_Rate,//: number,
        // show_Details_Btn,
        index_Value,


    }) => {
// const Item_Price_Related_Comps = ()=>{


    const integer = Math.floor(item_Data__price);

    // console.log("integer: ",integer);


    const decimal_Part_Temp = (item_Data__price % 1);

    // console.log("decimal_Part: ",decimal_Part);

// parseFloat(String(cv)).toFixed(2);

    // console.log("decimal part converted: ",parseFloat(String(decimal_Part)).toFixed(2));

// .split('.')[1]
    const decimal_Part_2 = String(parseFloat(String(decimal_Part_Temp)).toFixed(2)).split('.')[1];
// String(parseFloat(String(decimal_Part)).toFixed(2))).split('.')[1]


    return (

        <View style={{
            ...Item_Price_Related_Comps_Styles.priceContainer,
            width: inner_Comp_Width_2,
            // backgroundColor: 'cyan',
        }}>
            <View style={Item_Price_Related_Comps_Styles.priceCon1}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // backgroundColor: 'teal',
                }}>
                    <Text>

                        <Text style={Item_Price_Related_Comps_Styles.prices}>
                            {currency_Code_Delivery.unicode} {integer}.
                        </Text>

                        <Text

                            style={Item_Price_Related_Comps_Styles.price_After_Decimal}
                        >
                            {decimal_Part_2}
                        </Text>
                    </Text>

                </View>

               {/* {
                    (item_Data__offer_percentage === 0)
                        ? null : (
                            <WAS_Value
                                // comp_Width={0 /*comp_Width / 3.6*!/
                                was_Val={previousPrice(
                                    // item_Data.view_price,
                                    item_Data__price,
                                    item_Data__offer_percentage
                                )}
                                monetary_Sign={currency_Code_Delivery.unicode}
                                bg_Color={"transparent"}
                                // bg_Color={"red"}
                            />)

                }*/}
            </View>


            {/*column below the line begins here*/}
            <View style={{
                // ...Item_Price_Related_Comps_Styles.priceCon2,

                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",//'flex-start',//"space-between"
                // flex: 1,
                width: inner_Comp_Width_2,
                height: inner_Comp_Width_2 / 6,
                // backgroundColor: 'gold',
            }}>


                {/*<Text style={{
                    color: 'cyan'
                }}>DD</Text>*/}

                <View

                    style={{
                        // backgroundColor: 'red',
                        // width: comp_Height/2,//"40%"
                        /*

                        flexDirection: 'row',
                        flexShrink: 0,//0.3,

                        */
                        flexBasis: 'auto',//0.3,
                        // flexGrow: 0.5,

                    }}><Text style={Item_Price_Related_Comps_Styles.pricesAlt}>
                    {currency_Code_Delivery.unicode} {convert_TO_BDT_From_GBP(
                    // item_Data.view_price,
                    item_Data__price,
                    // item_Data.input_price,
                    currency_Code_Delivery.Currency_Code,
                    1,
                    // exchange_Rate
                    // "BDT",
                    // 0.0076,
                    // props.activeDelivery.exchange_rate_website

                    // curreny_Code,
                    // exchange_Rate,
                )
                }

                </Text>
                </View>

               {/* <View

                    style={{
                        // backgroundColor: 'red',
                        // width: comp_Height/2,//"40%"
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        // alignSelf: 'flex-end',
                        alignContent: 'flex-end',
                        // flexBasis: 0.4,

                        flexShrink: 0.4,
                        flexGrow: 0.96,

                    }}>
                    <Excluding_Shipping_and_Duties
                        comp_Height_2={inner_Comp_Width_2 / 8}
                        // comp_Width={inner_Comp_Width_2 * 0.64}
                    />
                </View>*/}




            </View>
        </View>
    );
};

export default Item_Price_Related_Comps;

const Item_Price_Related_Comps_Styles = StyleSheet.create({

    pricesAlt: {
        color: ukbd_navy_blue,
        fontSize: 14,
        fontWeight: "300",
        fontFamily: "RobotoCondensed-Regular"
    },

    /*    pricesWas: {
            color: "#012965",
            fontSize: 10,
            fontWeight: "300",
            fontFamily: "RobotoCondensed-Regular"
        },*/
    priceCon2: {},
    prices: {
        color: ukbd_navy_blue,
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "RobotoCondensed-Regular",
        textAlign: "left"
    },


    price_After_Decimal: {
        color: ukbd_navy_blue,
        fontSize: 14,
        fontWeight: "300",
        fontFamily: "RobotoCondensed-Regular",
        textAlign: "left"
    },


    priceContainer: {

        // marginBottom: 10
        // paddingHorizontal: 5,
    },

    priceCon1: {
        // backgroundColor: 'gold',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: hairlineWidth,//1,
        borderStyle: "solid",
        borderColor: ukbd_navy_blue,//"rgba(1, 41, 101, 0.05)"
    },

});


