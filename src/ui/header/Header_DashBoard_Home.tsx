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
// import {ukbd_navy_blue, ukbd_red, ukbd_red_light} from "../ui_Utils/important_Colors";
/*import {
    select_Logger_Data_BY_ID,
    UKBD_App_Login_Response_With_Password
} from "../../appStore/Reducers/authSlice";
import {useAppSelector} from "../../appStore/app/hooks";*/
// import {get_Detail_By_User_ID_server_Token} from "../../appStore/interfaces_Slice/user_Related_Interfaces";
import hairlineWidth = StyleSheet.hairlineWidth;
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import AppStack from "../../navigation/AppStack";
import Home_Button from "./sub_Comps/Home_Button";
import Search_Button from "./sub_Comps/Search_Button";
/*import Horizontal_Divider_Given_Height_Active_Order
    from "../components/misc/Horizontal_Divider_Given_Height_Active_Order";*/
import User_Button from "./sub_Comps/User_Button";
/*import {
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit
} from "../../appStore/Reducers/product_Slice";*/

import Bag_Button, {Monetary_Header_Text_Style} from "./sub_Comps/Bag_Button";
import Monetary_Value_OF_Cart from "./sub_Comps/Monetary_Value_OF_Cart";
import Horizontal_Divider_Given_Height_Active_Order
    from "../../divider/Horizontal_Divider_Given_Height_Active_Order.tsx";
import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light
} from "../ui_utils/important_Colors.ts";
// import {base_Image_URL} from "../../utils_server/server_settings";

const Bag = require("../../assets/images/Bag.svg");
const ukbd_image = require("../../assets/images/UKBD.png");

export interface Header_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,

    // bg_Color: string,

}
// import { useDrawerStatus } from '@react-navigation/drawer';
const Header_DashBoard_Home: React.FC<Header_Props> = ({
                                                           nav,
                                                           comp_Height,
                                                           comp_Width,
                                                           // bg_Color,
                                                       }) => {


    // const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);


    // const local_Cart = useAppSelector(select_Local_Cart);




// ...

    // const isDrawerOpen = useDrawerStatus() === 'open';


    const nav_Icon_Pressed=()=>{

        // console.log("navicon pressed",isDrawerOpen);
        // navigation.toggleDrawer();
        // return nav.toggleDrawer();
        // return nav.openDrawer();

        console.log("at nav_Icon_Pressed");

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


            /* shadowColor: "aliceblue",
             shadowOffset: {
                 width: 1,
                 height: 1,
             },
             shadowOpacity: 1,
             shadowRadius: 2,


             elevation: 5,*/

            flex: 10,
        }}>


            <View

                style={{
                    flex: 5,
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
                                    ? ukbd_navy_blue
                                    : "white",//"transparent", "transparent caused issues:
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


                        <Image
                            style={{
                                height: comp_Height * 0.70,
                                width: comp_Height * 0.70,
                                // borderRadius: 5,//image_Height,
                                // backgroundColor: "#f2f2f2"
                            }}
                           source={
                                ukbd_image
                            }

                            /*
                            source={{
                                uri: require("../../assets/images/UKBD.png"),//ukbd_image,
                                cache: 'only-if-cached',

                            }}
                            */
                            resizeMode={'contain'}

                        />
                    </Pressable>


                    {/* <Ionicons name="reorder-three-outline" color="#012965" size={32}  onPress={()=> navigation.openDrawer()}/> */}
                </View>


                {/*home begins here*/}


                <Home_Button
                    nav={nav}
                    comp_Height={comp_Height}
                />

                {/*home ends here*/}


                {/* Search begins here*/}


                <Horizontal_Divider_Given_Height_Active_Order
                    comp_Width={10}
                    comp_Height={comp_Height - 1}
                    bg_Color={'white'}
                />

                <Search_Button
                    nav={nav}
                    comp_Height={comp_Height}
                />


                {/* Search ends here */}


                {/*<View style={styles.headerItems}>
                    <Ionicons name="search-outline" color="#012965" size={26}/>
                </View>
                <View style={styles.headerItems}>
                    <Feather
                        name="shopping-bag"
                        color="#012965"
                        size={24}
                    />
                </View>
                */}
            </View>

            {/*1st flex 5 ends here*/}

            {/*2nd flex 5 begins here ---   cart length and cart amount and user icon */}
            <View style={{
                flex: 5,
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

                />

                {/*user Button begins here*/}

                <User_Button
                    nav={nav}
                    comp_Height={comp_Height - 1}
                    comp_Width={comp_Width}
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
