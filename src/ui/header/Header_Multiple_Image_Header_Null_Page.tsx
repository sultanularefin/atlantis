import React from "react";
import {
    Alert, Platform,
    StyleSheet,
    Text,
    View,
    Pressable,
} from "react-native";

/*import {
    close_Button_Color,
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light
} from "../ui_utils/important_Colors";*/

import Identity_Circle_Button from "./sub_Comps/Identity_Circle_Button";
import Horizontal_Divider_Given_Height_Active_Order
    from "../../divider/Horizontal_Divider_Given_Height_Active_Order.tsx";
import {
    close_Button_Color,
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light
} from "../ui_utils/important_Colors.ts";
/*import Horizontal_Divider_Given_Height_Active_Order
    from "../components/misc/Horizontal_Divider_Given_Height_Active_Order";*/

interface Header_Multiple_Image_Header_Null_Page_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,
    header_Title: string,
    Z_Index: number,
    // back_btn_press: () => void,

}

const Header_Multiple_Image_Header_Null_Page: React.FC<Header_Multiple_Image_Header_Null_Page_Props> = ({
                                                                                                            nav,
                                                                                                            comp_Height,
                                                                                                            comp_Width,
                                                                                                            header_Title,
                                                                                                            Z_Index,
                                                                                                            //back_btn_press,
                                                                                                        }) => {


    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);

    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);


    const back_Button_Pressed = () => {
        return nav.goBack();
    };

    return (
        <View style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            // height
            position: 'relative',
            height: comp_Height,
            width: comp_Width,
            // backgroundColor: 'red',
            alignSelf: 'center',
            /* left: 0,
             top: 10,*/
            zIndex: Z_Index,
        }}>
            <View
                style={{
                    // flex: 1,
                    flexDirection: "row",
                    // backgroundColor: 'green',
                    height: comp_Height,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: comp_Width,
                    // paddingLeft: 10,
                    // back
                }}>
                {/*<View style={styles.headerItems}>*/}


                <Identity_Circle_Button
                    bg_Color={"white"}
                    icon_Color={ukbd_navy_blue}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={ukbd_red_light} //4

                    icon_Name={"chevron-left"}

                    // EvilIcons = "chevron-left"
                    // Ionicons = "md-chevron-back-outline"

                    on_Press={back_Button_Pressed}
                    comp_Height_5={comp_Height / 1.4}
                    comp_Width_5={comp_Height /  1.4}
                    // border_Color={ukbd_navy_blue}  //9

                    // Error Property is not configurable, here "chevron-left" works with
                    // EvilIcon and "md-chevron-back-outline" works with Ionicons
                    // otherwise you will get Error Property is not configurable


                />

                <Horizontal_Divider_Given_Height_Active_Order
                    comp_Width={15}

                    comp_Height={comp_Height}
                    bg_Color={'transparent'}
                />
                {/*title begins here*/}


                <View style={{
                    // flex: 9,
                    flexDirection: "column",
                    // backgroundColor: 'tomato',
                    height: comp_Height,
                    alignItems: 'flex-start',
                    // alignSelf: 'center',
                    // alignContent: 'center',
                    // paddingLeft: (comp_Height / 1.5) / 2,
                    // paddingBottom: (comp_Height / 6),
                    justifyContent: 'center',

                    width: (comp_Width / 1.4),

                    // comp width - ((back button view width) + (padding left +padding Right) + reject button width)


                }
                }>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: ukbd_navy_blue,//'white',//ukbd_navy_blue,

                    }}>{header_Title}</Text>

                </View>
                {/*title ends here*/}


            </View>

            {/*user button ends here*/}


        </View>
    );
};

export default Header_Multiple_Image_Header_Null_Page;
