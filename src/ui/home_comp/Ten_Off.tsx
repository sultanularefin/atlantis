import React from "react";
import {
    Pressable, StyleSheet,
    Text,
    View,
} from "react-native";
/*import {
    ukbd_overlay_Color,
    ukbd_red
} from "../../ui_utils/important_Colors";*/
import hairlineWidth = StyleSheet.hairlineWidth;
import {
    ukbd_overlay_Color,
    ukbd_red
} from "../ui_utils/important_Colors.ts";



export interface Ten_Off_Interface{
    // product_Details_Button_Pressed_2: ()=>void,
    comp_Height: number,// string,// number,
    comp_Width: number,

}
const Ten_Off: React.FC<Ten_Off_Interface> = (
    {
        // product_Details_Button_Pressed_2,
        comp_Height,
        comp_Width,




    }) => {
// const Item_Detail = ()=>{

    return(
        <View
            //onPress={product_Details_Button_Pressed_2}


            style={
                {
                    // ...Item_Styles.addButton,

                    backgroundColor: 'transparent',//'white',// 'aliceblue',
                    /*
                    backgroundColor: pressed
                        ? ukbd_overlay_Color
                        // 'aliceblue'
                        :"transparent",
                    */
                    position: "absolute",

                    left: 0,
                    top: 0,


                    // height: comp_Height / 30,
                    height: comp_Height,//comp_Height / 10,
                    width: comp_Width,//"40%",
                    // backgroundColor: "white",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    borderStyle: "solid",//"dashed",
                    borderBottomWidth: hairlineWidth,// 0.6,
                    borderRightWidth: hairlineWidth,//0.6,
                    borderBottomColor: ukbd_red,
                    borderRightColor: ukbd_red,

                 /*   borderColor: ukbd_red,
                    borderWidth: hairlineWidth,*/


                }}
            // underlayColor="white"
        >
            <Text style={{
                color: ukbd_red
            }}>
                10% Off
            </Text>
        </View>
    );
};

export default Ten_Off;
