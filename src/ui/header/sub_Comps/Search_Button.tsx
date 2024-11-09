import {Pressable, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import {ukbd_navy_blue, ukbd_red_light} from "../../ui_Utils/important_Colors";
import React from "react";
import {Header_Props} from "../Header_DashBoard_Home";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {
    ukbd_red_light,
    ukbd_navy_blue,
} from "../../ui_utils/important_Colors.ts";

export interface Search_Button_Props {
    nav: any,
    comp_Height: number,
}

const Search_Button: React.FC<Search_Button_Props> = ({
                                                          nav,
                                                          comp_Height,
                                                      }) => {
// const Search_Button = ()=>{

    const Search_Button_Pressed = () => {

        console.log("__navigate to __App Stack __Search_Button_Pressed");
        return nav.navigate("Search_Page");
        // return nav.navigate("AppStack");
        // ukbd_navy_blue
    };
    return (

        <View style={{
            flexDirection: 'column',
            height: comp_Height,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
        }

        }>

            <Pressable
                style={({pressed}) => [
                    {}]
                }

                onPress={Search_Button_Pressed}
            >

                {
                    ({pressed}) => (
                        <EvilIcons
                            name="search"
                            color={(pressed ? ukbd_red_light : ukbd_navy_blue)} // "#012965"
                            size={comp_Height / 2.1}

                            /*style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? ukbd_red : 'transparent',//'green',
                                }
                            ]
                            }*/


                        />

                    )
                }


            </Pressable>
            <Text style={{
                fontWeight: '400',//'bold',
                fontSize: 12, //12
                color: ukbd_navy_blue,
            }}>Search</Text>

        </View>
    );
};

export default Search_Button;
