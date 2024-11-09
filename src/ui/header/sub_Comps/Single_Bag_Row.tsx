import {StyleSheet, Text, View} from "react-native";
import {ukbd_navy_blue, ukbd_red} from "../../ui_utils/important_Colors";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {MonetaryUnits} from "../../ui_utils/localization_utils";
import React from "react";
import {Monetary_Header_Text_Style, numberWithCommas} from "./Bag_Button";
import hairlineWidth = StyleSheet.hairlineWidth;


interface Single_Bag_Row_Interface {
    comp_Height: number,
    local_Cart_Length_2: number,
    local_Cart_Price_2: number,

    currency_Sign: string,
    with_Commas: boolean,
    comp_Width_Single_ROw: number,

}

const Single_Bag_Row: React.FC<Single_Bag_Row_Interface> = ({
                                                                // nav,
                                                                comp_Height,
                                                                local_Cart_Length_2,
                                                                local_Cart_Price_2,
                                                                currency_Sign,
                                                                // arrow_Pressed_2,
                                                                with_Commas,
                                                                comp_Width_Single_ROw,
                                                            }) => {
// const Single_Bag_Row= ()=>{
    return (

        <View


            style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottomWidth: hairlineWidth,
                borderBottomColor: ukbd_navy_blue,
                paddingBottom: 5,
                width: comp_Width_Single_ROw/1.5,


            }}

        >
            <View

                style={{
                    flexDirection: 'column',
                    // height: comp_Height,
                    justifyContent: 'center',
                    alignItems: 'center',
                }

                }>
                <SimpleLineIcons
                    name={"bag"}
                    size={((local_Cart_Length_2) < 10)
                        ? (comp_Height / 2)
                        : ((local_Cart_Length_2 < 100) && (local_Cart_Length_2 >= 10)) ? (comp_Height / 1.5)
                            : (comp_Height / 1.2)}
                    color={ukbd_red} //"red"
                    style={{
                        //paddingHorizontal: 4,
                        fontWeight: '100',
                        // paddingRight: 5,
                        // backgroundColor: ukbd_red,

                    }}

                />

                <Text

                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlignVertical: 'center',
                        paddingTop: 7,
                        /*left:((local_Cart_Length_2)<10)
                            ?((comp_Height / 2)/2)
                            :((local_Cart_Length_2<100) && (local_Cart_Length_2 >= 10))?((comp_Height / 1.5)/2)
                                :((comp_Height / 1.2)/2),*/
                        color: ukbd_red,
                    }}
                >{local_Cart_Length_2}</Text>


            </View>

            <View style={{
                flexDirection: 'column',
                // height: comp_Height,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'green',
                // height: comp_Height,
                marginTop: 5,
            }

            }>

                <Text style={{
                    ...Single_Bag_Row_Style_Sheet.monetary_Text_Style_Single_Row,
                    // textAlign: 'center',
                    // textAlignVertical: 'center',
                }}> {currency_Sign} {(!with_Commas)
                    ? parseFloat(String(local_Cart_Price_2)).toFixed(2)
                    :numberWithCommas(local_Cart_Price_2)}</Text>


            </View>


        </View>
    );
};

export default Single_Bag_Row;


const Single_Bag_Row_Style_Sheet = StyleSheet.create({

    monetary_Text_Style_Single_Row: {
        // fontWeight: '400',//'bold',
        fontSize: 16,
        color: ukbd_red,//ukbd_navy_blue,
        letterSpacing: 1.5,
    },
});

