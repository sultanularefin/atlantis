import React from "react";
import {Pressable, StyleSheet} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import hairlineWidth = StyleSheet.hairlineWidth;


export interface Delivery_Detail_Page_Circle_Button_Props{
    bg_Color: string,
    icon_Color: string,
    comp_initial_Color: string,
    on_Pressed_Color: string,

    icon_Name: string,
    // icon
    on_Press:()=>void,
    comp_Height_5: number,
    comp_Width_5: number,
    // border_Color: string,
}

const Identity_Circle_Button: React.FC<Delivery_Detail_Page_Circle_Button_Props> = (
    {
        bg_Color,
        icon_Color,
        comp_initial_Color,
        on_Pressed_Color,


        icon_Name,
        on_Press,
        comp_Height_5,
        comp_Width_5,
        // border_Color,
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
                    // ...styles.addButton,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    // alignSelf: "center",
                    backgroundColor: pressed
                        ? on_Pressed_Color
                        : bg_Color,
                    // height: '100%',
                    height: comp_Height_5,
                    width: comp_Width_5,
                    borderRadius: comp_Height_5/2,

                    /*

                    borderColor: border_Color,
                    borderWidth: hairlineWidth,

                    */


                    // position: 'absolute',
                    // left: 20,


                    opacity: pressed
                        ? 0.5
                        : 1,


                }
            ]}>

            <EvilIcons
                name= {icon_Name}
                color={icon_Color}
                size={(comp_Width_5 / 1.1)}
                style={{
                    // paddingLeft:(comp_He,
                }
                }
            />

        </Pressable>

    );
};

export default Identity_Circle_Button;
