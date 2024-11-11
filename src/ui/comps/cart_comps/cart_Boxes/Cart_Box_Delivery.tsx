import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ukbd_navy_blue} from "../../../ui_utils/important_Colors";
// import {Cart_Style_Root} from "../../../screens/drawer_Screens/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import hairlineWidth = StyleSheet.hairlineWidth;
import {Cart_Box_UKBD_Styles} from "./Cart_Box_UKBD";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


interface Cart_Box_Delivery_Props {
    comp_Height_3: number,
    comp_Width_3: number,

    icon_name: string,
    description_text: string,
    heading_Text: string,
    // add_Button_Pressed_State: boolean,

}


const Cart_Box_Delivery: React.FC<Cart_Box_Delivery_Props> = (
    {
        comp_Height_3,
        comp_Width_3,
        icon_name,
        description_text,
        heading_Text,
        // add_Button_Pressed_State
    }
) => {

    return (

        <View
            style={{

                ...Cart_Box_UKBD_Styles.box_Outer_View,
                width: comp_Width_3 - 1,
                backgroundColor: 'transparent',

                padding: 12,
                // backgroundColor: 'green',
                // paddingHorizontal: (inner_Width - inner_Width_withIN_Box),

            }}

        >

            {/*Row begins here*/}
            <View style={{

                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: comp_Height_3,
            }}>
                {/*icon part begins here*/}
                <View style={{


                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: inner_Width_withIN_Box,
                    width: comp_Width_3 / 7,
                    // backgroundColor: 'gold',

                }}>

                    {
                        (icon_name === "")
                            ? null :
                            (
                                <MaterialCommunityIcons

                                    name="truck-outline"
                                    size={comp_Height_3 / 3}
                                    color={ukbd_navy_blue} //"red"
                                    style={{}}
                                />
                            )
                    }


                    {/* icon_name={""}
                    description_text={'Unlimited UK & EU deliveries for £10.00 per year, Global for £40.00 per year'}
                    heading_Text={"UKBD"}*/}

                </View>

                {/*icon part ends here*/}


                {/*Heading part begins here*/}
                <View style={{


                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: comp_Width_3,
                    width: comp_Width_3 / 4.5, // ((comp_Width_3 / 7)+ (comp_Width_3 / 4) +)+ (comp_Width_3 / 4) +
                    // backgroundColor: 'tomato',

                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: ukbd_navy_blue,
                        }}
                    >
                        {heading_Text}
                    </Text>

                </View>

                {/*Heading part ends here*/}


                {/*Description part begins here*/}
                <View style={{


                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: comp_Width_3,
                    width: comp_Width_3 - ((comp_Width_3 / 7) + (comp_Width_3 / 4.5) + (comp_Width_3 / 12)),
                    // backgroundColor: 'deepskyblue',
                    paddingHorizontal: 5,

                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            // fontWeight: 'bold',
                            color: ukbd_navy_blue,
                            textAlign: 'justify',

                        }}
                    >
                        {(description_text.length < 85)
                            ? description_text
                            : `${description_text.substring(0, 83)}...`
                        }

                    </Text>

                </View>

                {/*Description part ends here*/}


                {/*expandable icon part begins here*/}
                <View style={{


                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: comp_Width_3,
                    width: comp_Width_3 / 12,
                    // backgroundColor: 'gold',

                }}>

                    <Ionicons
                        name={"chevron-down-sharp"}
                        size={comp_Height_3 / 3}
                        color={ukbd_navy_blue} //"red"
                        style={{}}

                    />

                </View>
                {/*expandable icon part ends here*/}

            </View>
            {/*Row ends here*/}
        </View>

    );

};

export default Cart_Box_Delivery;

