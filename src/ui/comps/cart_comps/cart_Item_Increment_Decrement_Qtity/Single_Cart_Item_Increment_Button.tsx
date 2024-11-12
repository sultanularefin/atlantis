
import React from "react";
import {
    Pressable,
    StyleSheet,
    View,
} from "react-native";

// import {ukbd_red, ukbd_red_light} from "../../../../ui_utils/important_Colors";
import Ionicons from "react-native-vector-icons/Ionicons";


import hairlineWidth = StyleSheet.hairlineWidth;

import {
    ukbd_red,
    ukbd_red_light
} from "../../../ui_utils/important_Colors";


export interface Increment_Button_Props{
    comp_Height_2: number,
    btn_Pressed: ()=>void,
    comp_Width: number,
    icon_Color: string,
}


const Single_Cart_Item_Increment_Button: React.FC<Increment_Button_Props> = (
    {
        comp_Height_2,
        btn_Pressed,
        comp_Width,
        icon_Color,
    }
) => {
// const Increment_Button= ()=>{

    return(

        <Pressable

            onPress={btn_Pressed}
            style={({pressed}) => [
                {

                    backgroundColor: pressed
                        ? ukbd_red_light
                        : 'transparent',
                        // : ukbd_red,
                    opacity: pressed
                        ? 0.5
                        : 1,

                    justifyContent: 'center',
                    width: comp_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                    height: comp_Height_2,
                    alignItems: 'center',
                    flexDirection: 'column',


                }]}
        >



            <Ionicons
                name={"add-sharp"}
                size={comp_Height_2 / 2}
                color={icon_Color} //"red"
                style={{
                    //paddingHorizontal: 4,
                    // fontWeight: '100',
                    // paddingRight: 5,

                }}

            />
        </Pressable>
    );
};

export default Single_Cart_Item_Increment_Button;
