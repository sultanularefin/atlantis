import {StyleSheet, Text, View} from "react-native";
import {ukbd_navy_blue} from "../../ui_utils/important_Colors";
import React from "react";
import {Order_Summary_Cart_Interface, Order_Summary_Cart_Styles} from "./Order_Summary_Cart";
import hairlineWidth = StyleSheet.hairlineWidth;


export interface Order_Summary_Text_View_Wrapper_Props{

    total_width: number,
    left_Text: string,
    right_Text: string,
}



const Order_Summary_Common_Text_View_wrapper_Space_Between: React.FC<Order_Summary_Text_View_Wrapper_Props> = ({
                                                                                                                   total_width,
                                                                                                                   left_Text,
                                                                                                                   right_Text,
                                                                    }) => {
// const Order_Summary_Common_Text_View_wrapper_Space_Between = () =>{

    return(

        <View style={{

            width: total_width,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignSelf: 'center',
            paddingTop: 10,

            paddingBottom: 10,
            // paddingTop: 10,
            // backgroundColor: 'red',
            borderBottomColor: ukbd_navy_blue,
            borderBottomWidth: hairlineWidth,

        }}>
            {/*row begins here*/}
            <View style={{

                width: total_width,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* left part quantity begins here */}
                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            // fontWeight: 'bold',
                            color: ukbd_navy_blue,
                            letterSpacing: 0.8,
                        }}
                    >
                        {left_Text}



                    </Text>
                </View>
                {/* left part quantity ends here*/}

                {/* right part quantity ends here*/}


                <View>
                    <Text
                        style={Order_Summary_Cart_Styles.local_Price_Style}
                    >

                        {right_Text}
                        {/*{Home_State_Delivery_Currency.text}

                        {
                            parseFloat(String(local_Cart_Price)).toFixed(2)
                        }*/}
                    </Text>
                </View>

                {/* right part quantity ends here*/}
            </View>
            {/*row ends above*/}
        </View>
    );
};

export default Order_Summary_Common_Text_View_wrapper_Space_Between;
