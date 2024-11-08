import {Pressable, StyleSheet, View} from "react-native";
import {ukbd_red} from "../../../../ui_Utils/important_Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import hairlineWidth = StyleSheet.hairlineWidth;
import EvilIcons from "react-native-vector-icons/EvilIcons";


export interface Love_Button_Home_Page_Props{
    comp_Height_2: number,
    heart_Pressed: ()=>void,
    comp_Width: number,
}


const Love_Button_Home_Page: React.FC<Love_Button_Home_Page_Props> = (
    {
        comp_Height_2,
        heart_Pressed,
        comp_Width,
    }
) => {
// const Love_Button_Home_Page= ()=>{

    return(
        <View
            style={{
                borderLeftColor: ukbd_red,//'red',
                // borderBottomColor: `${ukbd_red}`,//'red',
                borderLeftWidth: hairlineWidth,//1,
                // borderBottomWidth: 1,
                width: comp_Width,//t_Height / 35,
                // backgroundColor: 'gold',
                height: comp_Height_2,//'100%',//t_Height / 35,

                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}


        >
            <Pressable
                onPress={heart_Pressed}


                style={
                    ({pressed}) => [
                        {
                            // ...styles.addButton,
                            // ...favorite_Button_Styles.wishButton,

                            width: comp_Width-1,//t_Height / 35,
                            // backgroundColor: 'gold',
                            height: comp_Height_2,//'100%',//t_Height / 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',

                            backgroundColor: pressed
                                ? ukbd_red
                                : "transparent",


                        }]}

            >
                {({pressed}) => (
                    <EvilIcons
                        // name={"md-heart-outline"}
                        // name={"md-heart-outline"}
                        name={"heart"}
                        size={comp_Height_2 /1.5}

                        color={pressed ? 'white' : ukbd_red} //"red"
                        // color="green"
                        // color="ivory"



                        style={{
                            // backgroundColor: {pressed ? 'white' : ukbd_red},
                            // paddingHorizontal: 4,
                            // fontWeight: '100',

                        }}

                    />
                )}
            </Pressable>


        </View>
    );
};

export default Love_Button_Home_Page;
