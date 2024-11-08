import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
// import {ukbd_overlay_Color, ukbd_red, very_light_red_ukbd} from "../../ui_Utils/important_Colors";
import hairlineWidth = StyleSheet.hairlineWidth;
import {ukbd_red, very_light_red_ukbd} from "../ui_utils/important_Colors.ts";
// import {Item_Interface} from "./Item";



export interface Item_Detail_Interface{
    product_Details_Button_Pressed_2: ()=>void,
    comp_Height: number, //string,//number,
    comp_Width: number,
    zIndex_1: number,

}
const Item_Detail: React.FC<Item_Detail_Interface> = (
    {
        product_Details_Button_Pressed_2,
        comp_Height,
        comp_Width,
        zIndex_1,




    }) => {
// const Item_Detail = ()=>{

    return(
        <Pressable
            onPress={product_Details_Button_Pressed_2}


            style={({ pressed }) => [
                {
                    // ...Item_Styles.addButton,

                    backgroundColor: pressed
                        ? very_light_red_ukbd
                        :'white',
                        // 'aliceblue'
                        // :"transparent",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    zIndex: zIndex_1,


                    // height: comp_Height / 30,
                    height: comp_Height,//comp_Height / 10,
                    width: comp_Width-1,//"40%",
                    // backgroundColor: "white",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    borderStyle: "solid",//"dashed",
                    /*borderBottomWidth: hairlineWidth,// 0.6,
                    borderLeftWidth: hairlineWidth,//0.6,
                    borderBottomColor: ukbd_red,
                    borderLeftColor: ukbd_red,*/
                    borderColor: ukbd_red,
                    borderWidth: hairlineWidth,


                }]}
            // underlayColor="white"
        >
            <Text style={{
                color: ukbd_red
            }}>
                Details
            </Text>
        </Pressable>
    );
};

export default Item_Detail;
