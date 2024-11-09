import React from "react";
import {FlexAlignType, Pressable, StyleSheet} from "react-native";
// import {ukbd_navy_blue, ukbd_red_light, very_light_red_ukbd} from "../../../../ui_Utils/important_Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import hairlineWidth = StyleSheet.hairlineWidth;
// import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
// import {One_Pending_Pickup_Point_Props} from "../../pending/One_Pending_Pickup_Point";


export interface Identity_Normal_Button_Props{
    bg_Color: string,
    icon_Color: string,
    comp_initial_Color: string,
    on_Pressed_Color: string,

    icon_Name: string,
    // icon
    on_Press:()=>void,
    comp_Height_5: number,
    comp_Width_5: number,
    align_Items: FlexAlignType,
    // border_Color: string,
}

const Identity_Normal_Button: React.FC<Identity_Normal_Button_Props> = (
    {
        bg_Color,
        icon_Color,
        comp_initial_Color,
        on_Pressed_Color,


        icon_Name,
        on_Press,
        comp_Height_5,
        comp_Width_5,
        align_Items,

        // border_Color ,
        // navigation_2,
        // one_Order,

    }
) => {
// const Delivery_Detail_Page_Circle_Button = ()=>{

    return (
        <Pressable
            onPress={
                on_Press
            }
            style={({pressed}) => [
                {

                    flexDirection: "column",
                    alignItems: align_Items,
                    justifyContent: "center",
                    backgroundColor: pressed
                        ? on_Pressed_Color
                        : bg_Color,
                    opacity: pressed
                        ? 0.5
                        : 1,
                }
            ]}>

            <EvilIcons
                name= {icon_Name}
                color={icon_Color}
                size={(comp_Width_5)}
                style={{
                    // paddingLeft:(comp_He,
                }
                }
            />

        </Pressable>

    );
};

export default Identity_Normal_Button;
