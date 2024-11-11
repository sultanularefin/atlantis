import React from "react";
import {
    Alert,
    StyleSheet,
    Text,
    View,
} from "react-native";

import {
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light, very_light_blue_ukbd
} from "../ui_utils/important_Colors";

import Identity_Circle_Button from "./sub_Comps/Identity_Circle_Button";
import hairlineWidth = StyleSheet.hairlineWidth;

interface Header_Shopping_Cart_Page_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,
    header_Title: string,
    Z_Index: number,

}

const Header_Shopping_Cart_Page: React.FC<Header_Shopping_Cart_Page_Props> = ({
                                                                                      nav,
                                                                                      comp_Height,
                                                                                      comp_Width,
                                                                                      header_Title,
                                                                                      Z_Index,
                                                                                  }) => {






    const back_Button_Pressed = () => {
        return nav.goBack();
    };

    return (
        <View style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            // height
            position: 'relative',
            height: comp_Height,
            width: comp_Width,
            // backgroundColor: 'teal',
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
                    width: comp_Width,//comp_Width * 0.90,

                    borderBottomColor: ukbd_navy_blue,
                    borderBottomWidth: hairlineWidth,
                    // bord
                    // paddingLeft: 10,
                    // back
                }}

            >
                {/*<View style={styles.headerItems}>*/}


                {/* <Identity_Circle_Button
                    bg_Color={"white"}
                    icon_Color={ukbd_navy_blue}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={ukbd_red_light}

                    icon_Name={"md-chevron-back-outline"}
                    on_Press={back_Button_Pressed}
                    comp_Height_5={comp_Height / 1.8}
                    comp_Width_5={comp_Height / 1.8}
                    border_Color={ukbd_navy_blue}
                />*/}


                {/*title begins here*/}


                <View style={{
                    // flex: 9,
                    flexDirection: "column",
                    // backgroundColor: 'tomato',
                    height: comp_Height,
                    alignItems: 'flex-start',
                    // paddingLeft: (comp_Height / 1.5) / 2,
                    // paddingBottom: (comp_Height / 6),
                    justifyContent: 'center',//'flex-end',
                    width: (comp_Width / 1.15) //
                    // comp width - ((back button view width) + (padding left +padding Right) + reject button width)


                }
                }>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: ukbd_navy_blue,

                    }}>{header_Title}</Text>

                </View>
                {/*title ends here*/}


                {/*Reject Button begins here*/}
              {/*  <Identity_Circle_Button
                    border_Color={ukbd_navy_blue}
                    bg_Color={"white"}
                    icon_Color={ukbd_red}
                    comp_initial_Color={"white"}
                    on_Pressed_Color={ukbd_navy_blue}

                    icon_Name={"window-close"}
                    on_Press={reject_this_Order}
                    comp_Height_5={comp_Height / 1.8}
                    comp_Width_5={comp_Height / 1.8}
                />*/}




                <Identity_Circle_Button
                    bg_Color={"white"}
                    icon_Color={ukbd_red_light}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={very_light_blue_ukbd}

                    icon_Name={"close"}
                    on_Press={back_Button_Pressed}
                    comp_Height_5={comp_Height / 1.2}
                    comp_Width_5={comp_Height / 1.2}
                    // border_Color={'transparent'}
                />


                {/*Reject Button Ends here*/}
            </View>

            {/*user button ends here*/}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'transparent',//"#fff",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",

        /*
        borderBottomWidth: 1,
        borderBottomColor: ukbd_navy_blue,
        borderStyle: "solid",

        */
        /*paddingHorizontal: 10,
        flex: 10,
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
        borderColor: "rgba(1, 41, 101, 0.03)"*/
    },
    headerItems: {
        width: 30,
        height: 30,
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
export default Header_Shopping_Cart_Page;
