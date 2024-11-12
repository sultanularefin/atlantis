import {useNavigation} from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Pressable,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import hairlineWidth = StyleSheet.hairlineWidth;
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Home_Button from "./sub_Comps/Home_Button";
import Search_Button from "./sub_Comps/Search_Button";

import User_Button from "./sub_Comps/User_Button";

import Bag_Button, {Monetary_Header_Text_Style} from "./sub_Comps/Bag_Button";
import Monetary_Value_OF_Cart from "./sub_Comps/Monetary_Value_OF_Cart";
import Horizontal_Divider_Given_Height_Active_Order
    from "../../divider/Horizontal_Divider_Given_Height_Active_Order.tsx";
import {
  cac_green_success,
  ukbd_navy_blue,
  ukbd_red,
  ukbd_red_light,
} from '../ui_utils/important_Colors.ts';
import Menu_Icon_SVG from '../../assets/svgs/menu/Menu_Icon_SVG.tsx';

const Bag = require("../../assets/images/Bag.svg");
const ukbd_image = require("../../assets/images/UKBD.png");

export interface Header_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,

    // bg_Color: string,

}

const Header_DashBoard_Home: React.FC<Header_Props> = ({
                                                           nav,
                                                           comp_Height,
                                                           comp_Width,
                                                           // bg_Color,
                                                       }) => {





    const nav_Icon_Pressed=()=>{


        console.log("at nav_Icon_Pressed");
        return nav.goBack();

    };

    return (
        <View style={{
            height: comp_Height,
            backgroundColor: 'white',//'teal',//"#fff",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            borderBottomWidth: hairlineWidth,

            borderStyle: "solid",
            borderBottomColor: ukbd_navy_blue,//"rgba(1, 41, 101, 0.03)"




            flex: 10,
        }}>


            <View

                style={{
                    flex: 2,
                    flexDirection: "row",
                    // backgroundColor: 'gold',
                }}>
                <View
                    style={{
                        ...styles.headerItems,
                        height: comp_Height,
                        paddingLeft: 5,

                    }}>


                    <Pressable
                        onPress={nav_Icon_Pressed}
                        // onPress={showDatepicker}
                        // underlayColor="white"

                        style={({pressed}) => [
                            {
                                // ...styles.addButton,

                                backgroundColor: pressed
                                    ? cac_green_success
                                    : ukbd_red,//"transparent", "transparent caused issues:
                                // (ADVICE) View #47 of type RCTView has a shadow set but cannot calculate
                                // shadow efficiently. Consider setting a background color to fix this, or apply the shadow to a more specific component.
                                justifyContent: "center",
                                flexDirection: 'column',
                                alignItems: 'center',

                                // borderRadius: 5,
                                shadowColor: "#000", // not 'aliceblue',
                                shadowOffset: {
                                    width: 0.5,
                                    height: 0.5
                                },
                                shadowOpacity: 0.4,
                                shadowRadius: 1,


                                elevation: 1,

                                /*
                                  borderWidth: 1,

                                  borderStyle: "solid",
                                  borderColor: "rgba(1, 41, 101, 0.03)" */


                                opacity: pressed
                                    ? 0.1
                                    : 1,


                            }
                        ]}>



                      <Menu_Icon_SVG
                      width= {40}
                      height={40}
                      />
                    </Pressable>


                    {/* <Ionicons name="reorder-three-outline" color="#012965" size={32}  onPress={()=> navigation.openDrawer()}/> */}
                </View>



            </View>

            {/*1st flex 5 ends here*/}

            {/*2nd flex 5 begins here ---   cart length and cart amount and user icon */}
            <View style={{
                flex: 8,
                justifyContent: "space-between",
                flexDirection: "row",
                height: comp_Height - 1,
                backgroundColor: 'white',//'tomato',// 'white',//'orange',// 'transparent',//ukbd_red_light,//'red',
                alignItems: 'center',


            }}>


                <Bag_Button
                    nav={nav}
                    comp_Height={comp_Height - 1} // comp_Height - hairlineWidth in the bottom border.
                    comp_Width={comp_Width}
                    bg_color={'deepskyblue'}
                    press_color={"lightsteelblue"}
                    flex_val={6}

                />

                {/*user Button begins here*/}

                <User_Button
                    nav={nav}
                    comp_Height={comp_Height - 1}
                    comp_Width={comp_Width}
                    bg_color={ukbd_navy_blue}
                    flex_val={2}
                />

                {/*user button ends here*/}


            </View>

            {/*2nd flex 5 __ends___ here ---   cart length and cart amount and user icon */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        /*
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,


        elevation: 5,

        borderWidth: 1,

        borderStyle: "solid",
        borderColor: "rgba(1, 41, 101, 0.03)"
            */
    },
    headerItems: {

        alignItems: "center",
        justifyContent: "center",
        marginRight: 18
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: 'rgba()'
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 2
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: "hidden"
    },
    cartSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    }
});
export default Header_DashBoard_Home;
