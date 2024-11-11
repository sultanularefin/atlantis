import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ukbd_navy_blue} from "../../../ui_utils/important_Colors";
// import {Cart_Style_Root} from "../../../screens/drawer_Screens/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import hairlineWidth = StyleSheet.hairlineWidth;


interface Cart_Box_UKBD_Props {
    comp_Height_3: number,
    comp_Width_3: number,

    icon_name: string,
    description_text: string,
    heading_Text: string,
    // add_Button_Pressed_State: boolean,

}


const Cart_Box_UKBD: React.FC<Cart_Box_UKBD_Props> = (
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




            <View style={{

                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: comp_Height_3,
                flexWrap: 'wrap',
                width: (comp_Width_3 - 4), // 10 is padding,
                // backgroundColor: 'purple',
                padding: 10,
            }}>

                    <Text
                        style={{
                            fontSize: 14,
                            color: ukbd_navy_blue,
                            letterSpacing: 1,
                        }}
                    >
                        {description_text}

                    </Text>
            </View>


    );

};

export default Cart_Box_UKBD;
export const Cart_Box_UKBD_Styles = StyleSheet.create({

    box_Outer_View:
        {
            // flex: 2,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

            // alignSelf: 'center',
            // backgroundColor: 'teal',
            padding: 10,
            /*




        borderWidth: hairlineWidth,
        borderColor: ukbd_navy_blue,
        */
        },


});
