import {Pressable, StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";
import {Header_Props} from "../Header_DashBoard_Home";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import hairlineWidth = StyleSheet.hairlineWidth;

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouseChimneyWindow} from '@fortawesome/free-solid-svg-icons/faHouseChimneyWindow';
import {
    ukbd_navy_blue,
    ukbd_red_light
} from "../../ui_utils/important_Colors.ts";

export interface Home_Button_Props {
    nav: any,
    comp_Height: number,
}

const Home_Button: React.FC<Home_Button_Props> = ({
                                                      nav,
                                                      comp_Height,
                                                  }) => {
// const Home_Button = ()=>{

    const home_Button_Pressed = () => {

        console.log("__navigate to __App Stack __home_Button_Pressed");
        return nav.navigate("Home");

    };
    return (

        <View style={{
            flexDirection: 'column',
            height: comp_Height,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'teal',
        }

        }>

            <Pressable
                style={({pressed}) => [
                    {}]
                }

                onPress={home_Button_Pressed}
            >

                {
                    ({pressed}) => (



                        <AntDesign

                            name="home"
                            color={(pressed ? ukbd_red_light : ukbd_navy_blue)} // "#012965"
                            size={comp_Height / 3}
                            // size={32}
                        />

                    )
                }


            </Pressable>
            <Text style={{
                fontWeight: '400',//'bold',
                fontSize: 12, //12
                color: ukbd_navy_blue,
            }}>Home</Text>


        </View>
    );
};

export default Home_Button;
