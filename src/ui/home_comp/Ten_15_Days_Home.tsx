import {StyleSheet, Text, View} from "react-native";
/*import {
    ukbd_navy_blue,
    ukbd_overlay_Color,
    ukbd_place_holder_TextColor,
    ukbd_Text_Navy_Blue_color
} from "../../ui_utils/important_Colors";
import {previousPrice} from "../../ui_utils/localization_utils";*/
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    ukbd_navy_blue,
    ukbd_overlay_Color,
    ukbd_place_holder_TextColor,
    ukbd_Text_Navy_Blue_color
} from "../ui_utils/important_Colors.ts";


export interface Ten_15_Days_Interface{

    comp_Height_2: number,
    content: string,

    comp_Width: number,
    bg_Color: string,

}
const Ten_15_Days_Home: React.FC<Ten_15_Days_Interface> = (
    {
        // product_Details_Button_Pressed_2,
        // comp_Height,
        //comp_Width,
        comp_Height_2,
        content,

        comp_Width,
        bg_Color,




    }) => {
// const Ten_15_Days_Home = ()=>{
    return(

        <View style={{
            backgroundColor: bg_Color,
            // width: "60%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: comp_Height_2,
            width: comp_Width,

        }}>
            <MaterialCommunityIcons

                name="truck-outline"
                //size={comp_Height / 40}
                size={comp_Height_2/1.2}
                //height: comp_Height / 7, //'100%',
                color={ukbd_place_holder_TextColor}
            />

            <View style={{
                // backgroundColor: 'red',
                // width: "60%",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                height: comp_Height_2,
                width: (comp_Width-(comp_Height_2/1.2)),

            }}>
            <Text style={Ten_15_Days_Styles.delivery_Constraints}
                     numberOfLines={1}
                     ellipsizeMode="tail"> {content}</Text>



            </View>
        </View>
    );
};

export default Ten_15_Days_Home;

// const Item_Styles = StyleSheet.create({
const Ten_15_Days_Styles = StyleSheet.create({
    delivery_Constraints: {
        color: ukbd_navy_blue,
        // fontSize: 10,
        fontWeight: "500",
        // letterSpacing: 0.6,
        textTransform: 'capitalize',
        fontSize: 10,
        // fontFamily: "RobotoCondensed-Regular"


//         color: #012965;
// font-family: var(--robotoC);
// font-weight: 500;
// letter-spacing: .8px;
// text-transform: capitalize;
    },
});



