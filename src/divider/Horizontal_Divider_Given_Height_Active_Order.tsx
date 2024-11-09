import {View} from "react-native";
import React from "react";


export interface Horizontal_Divider_Given_Height_Active_Order{

    comp_Width: number,
    comp_Height: number,
    bg_Color: string,

}
const Horizontal_Divider_Given_Height_Active_Order: React.FC<Horizontal_Divider_Given_Height_Active_Order> = (
    {
        comp_Width,
        comp_Height,
        bg_Color,



    }
) => {


    return(

        <View

            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: comp_Width,//displayHeight / 70,
                backgroundColor: bg_Color,//'grey',//'blue',
                height: comp_Height,
            }}>


        </View>
    );
};

export default Horizontal_Divider_Given_Height_Active_Order;

