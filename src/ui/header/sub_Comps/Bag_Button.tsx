import React, {useState} from "react";

import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    bg_Color_List_And_Phone_BG,
    ukbd_navy_blue,
    ukbd_overlay_Color,
    ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_red_light
} from "../../ui_utils/important_Colors";
// import {Header_Props} from "../Header_DashBoard_Home";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";


import hairlineWidth = StyleSheet.hairlineWidth;
import Single_Bag_Row from "./Single_Bag_Row";

import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useAppSelector} from "../../../lib/app/hooks.ts";
import {
    select_Local_Cart_Length,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    select_Shipped_From_State_Or_Delivery_Currency,
    // select_Shipped_From_State_Or_Delivery_Currency
} from '../../../lib/features/products/product_Slice.ts';
import Vertical_Divider_Full_Width_Active_Order from "../../../divider/Vertical_Divider_Full_Width_Active_Order.tsx";
import {
    convert_TO_BDT_From_GBP,
    monetary_Unit_Interface} from '../../ui_utils/localization_utils.ts';

interface Bag_Button_Props {
    nav: any,
    comp_Height: number,
    // arrow_Pressed_2: (monetary_Unit_Text: string, value_Converted_To_String: string, length: number,)=>void,
    comp_Width: number,
    bg_color: string,
}


export const numberWithCommas = (value: number) => {
    let value_2 = value.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(value_2)) {
        value_2 = value_2.replace(pattern, "$1,$2");
    }

    return value_2;
};


const Bag_Button: React.FC<Bag_Button_Props> = ({
                                                    nav,
                                                    comp_Height,
                                                    comp_Width,
                                                    bg_color,
                                                    // arrow_Pressed_2,
                                                }) => {
    // const Bag_Button = ()=>{


    // const local_Monetary_Unit = useAppSelector(select_Local_Currenc);
    const insets = useSafeAreaInsets();


    const local_Cart_Length = useAppSelector(select_Local_Cart_Length);

    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);

    const [modal_Visible_State, set_Modal_Visible_State] = useState<boolean>(false);

    // const exchange_Rate: number = useAppSelector(select_Exchange_Rate);


    const Home_State_Delivery_Currency: monetary_Unit_Interface = useAppSelector(select_Shipped_From_State_Or_Delivery_Currency);
    // const local_Currency: monetary_Unit_Interface = useAppSelector(select_Local_Currency);

    // const exchange_Rate: number = useAppSelector(select_Exchange_Rate);

    // const conversion_Rate: number = useAppSelector(select_Conversion_Rate);



    const bag_Button_Pressed = () => {

        console.log("__navigate to __App Stack __bag_Button_Pressed");
        return nav.navigate("Cart");
        // return nav.navigate("AppStack");
        // ukbd_navy_blue
    };

    const arrow_Pressed = () => {

        console.log("__at__arrow_Pressed__");
        set_Modal_Visible_State(true);

        // return arrow_Pressed_2(MonetaryUnits[3].text, numberWithCommas(local_Cart_Price),local_Cart_Length);

    };


    return (

        <View style={{
            flexDirection: 'column',
            height: comp_Height,// - 1,
            justifyContent: 'center',
            alignItems: 'center',
        }

        }>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal_Visible_State}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    set_Modal_Visible_State(!modal_Visible_State);
                }}>
                <View style={{
                    ...modal_Styles.centeredView,

                    // imp code.. april 11,2023
                    paddingTop: insets.top + comp_Height,
                    paddingRight: comp_Width / 16,


                }}>
                    <View
                        style={{
                            ...modal_Styles.modalView,
                            width: comp_Width / 2.5,

                        }}

                    >


                        <Single_Bag_Row
                            comp_Height={comp_Height}
                            local_Cart_Length_2={local_Cart_Length}
                            local_Cart_Price_2={local_Cart_Price}
                            currency_Sign={Home_State_Delivery_Currency.text}
                            with_Commas={true}
                            comp_Width_Single_ROw={comp_Width / 2.5}
                        />

                        <Vertical_Divider_Full_Width_Active_Order
                            compHeight={10}
                        />

                        <Single_Bag_Row
                            comp_Height={comp_Height}
                            local_Cart_Length_2={local_Cart_Length}
                            local_Cart_Price_2={
                                convert_TO_BDT_From_GBP(local_Cart_Price,'GBP', 1)
                            }

                            currency_Sign={Home_State_Delivery_Currency.text}
                            // currency_Sign={MonetaryUnits[4].text}
                            //currency_Sign={MonetaryUnits[4].text}
                            with_Commas={true}
                            comp_Width_Single_ROw={comp_Width / 2.5}
                        />

                        {/*<Text style={modal_Styles.modalText}>Hello World!</Text>*/}


                        <Vertical_Divider_Full_Width_Active_Order
                            compHeight={20}
                        />


                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            // paddingVertical: 10,
                        }}>
                            <Pressable
                                style={{
                                    ...modal_Styles.button,
                                    width: comp_Width / 5,
                                }}
                                onPress={() => set_Modal_Visible_State(!modal_Visible_State)}>
                                <Text style={modal_Styles.textStyle}>Close</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>


            <View

                style={{
                    flexDirection: 'row',
                    height: comp_Height - 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            >

                <Pressable


                    onPress= {bag_Button_Pressed}
                >
                    {({pressed}) => (
                        <View style={{
                            flexDirection: 'row',
                            height: comp_Height - 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:
                                pressed
                                    ? bg_Color_List_And_Phone_BG
                                    : 'transparent',//'white',
                        }}>


                            <MaterialIcons
                                name={"shopping-bag"}
                                size={comp_Height / 2}
                                color={pressed ? ukbd_red_light : bg_color} //"red"
                                style={{
                                    //paddingHorizontal: 4,
                                    fontWeight: '100',
                                    // paddingRight: 5,
                                    // backgroundColor: ukbd_red,

                                }}

                            />

                            <Text style={Monetary_Header_Text_Style.monetary_Text_Style}>{local_Cart_Length}</Text>


                            <View style={{
                                flexDirection: 'column',
                                height: comp_Height,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 15,
                                // paddingTop: 4,
                            }}>
                                <Text style={{
                                    ...Monetary_Header_Text_Style.monetary_Text_Style,
                                    // textAlign: 'center',
                                    // textAlignVertical: 'center',
                                }}>

                                    {/*{MonetaryUnits[3].text} {numberWithCommas(local_Cart_Price)}*/}

                                    {Home_State_Delivery_Currency.text} {parseFloat(local_Cart_Price).toFixed(2)}

                                    {/*return parseFloat(String(cv)).toFixed(2);*/}


                                </Text>
                            </View>

                        </View>
                    )
                    }


                </Pressable>
                <View
                    style={{

                    paddingLeft: 15,
                    // paddingTop: 4,
                }}
                >

                    <Pressable
                        style={({pressed}) => [
                            {
                                flexDirection: 'column',
                                height: comp_Height,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }]
                        }

                        onPress={arrow_Pressed}
                    >

                        {
                            ({pressed}) => (

                                <MaterialIcons
                                    name={"arrow-drop-down"}
                                    size={comp_Height / 2}
                                    color={pressed ? 'white' : ukbd_red} //"red"
                                    style={{
                                        //paddingHorizontal: 4,
                                        fontWeight: '100',
                                        // paddingRight: 5,
                                        // backgroundColor: ukbd_red,

                                    }}

                                />
                            )
                        }


                    </Pressable>


                </View>
            </View>


        </View>
    );
};

export default Bag_Button;


export const Monetary_Header_Text_Style = StyleSheet.create({

    monetary_Text_Style: {
        fontWeight: '600',//'bold',
        fontSize: 20,
        color: ukbd_red,//ukbd_navy_blue,
    },
});


const modal_Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',//'flex-start',
        alignItems: 'flex-end',


    },
    modalView: {
        marginHorizontal: 20,
        backgroundColor: 'white',
        // borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 2,//20,
        // padding: 10,
        elevation: 2,
        height: 30,
        backgroundColor: ukbd_navy_blue,//ukbd_place_holder_TextColor,//'#2196F3',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',


    },
 /*   buttonOpen: {
        backgroundColor: '#F194FF',
    },*/

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

 /*   modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '400',//'bold',
        fontSize: 14,
        color: ukbd_red,//ukbd_navy_blue,
    },
    */
});

