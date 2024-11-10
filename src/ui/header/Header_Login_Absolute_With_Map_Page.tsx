import React from "react";
import {
    Alert, Platform,
    StyleSheet,
    Text,
    View,
    Pressable,
} from "react-native";

import {
    bg_Color_List_And_Phone_BG,
    close_Button_Color,
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light, very_light_red_ukbd
} from "../ui_utils/important_Colors";

import Identity_Circle_Button from "./sub_Comps/Identity_Circle_Button";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface Header_Login_Absolute_With_Map_Page_Props {
    onPress: () => void,
    comp_Height: number,
    comp_Width: number,
    header_Title: string,
    zIndex_2: number,
    left_Value: number,
    top_Value: number,

}

const Header_Login_Absolute_With_Map_Page: React.FC<Header_Login_Absolute_With_Map_Page_Props> = ({
                                                                                                      onPress,
                                                                                                      comp_Height,
                                                                                                      comp_Width,
                                                                                                      header_Title,
                                                                                                      zIndex_2,
                                                                                                      left_Value,
                                                                                                      top_Value,
                                                                                                  }) => {


    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);

    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);

    // const insets = useSafeAreaInsets();
  /*  const back_Button_Pressed = () => {
        return nav.goBack();
    };*/

    return (
        <View style={[

            {
                // android begins here

                position: 'relative',//Platform.OS === 'android' ? 'relative' : 'absolute',
                // position: (Platform.OS === 'android') ? 'relative' : 'absolute',
                height: comp_Height,
                width: comp_Width,
                // backgroundColor: 'gold',
                left: left_Value,
                // top: 10,
                zIndex: zIndex_2,

            }, {
                top: (Platform.OS === 'ios') ? top_Value : 0,

            },


            // android ends here

            // ios begins here
            // backgroundColor: 'gold',


            /*
            position: 'absolute',//'relative',//'absolute',//'relative',
            height: comp_Height,
             width: comp_Width,
               zIndex: zIndex_2,
            left: left_Value,


            alignSelf: 'center',


                flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
             */





            //ios ends here


        ]
        }>
            <View
                style={{
                    // flex: 1,
                    flexDirection: "row",
                    // backgroundColor: 'green',
                    height: comp_Height,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: comp_Width,
                    // paddingLeft: 10,
                    // back
                }}>
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
                    alignItems: 'center',
                    // paddingLeft: (comp_Height / 1.5) / 2,
                    paddingBottom: (comp_Height / 6),
                    justifyContent: 'center',
                    width: (comp_Width / 1.25) // IMP 1.25 april 13
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
                    // bg_Color={very_light_red_ukbd}

                    bg_Color={'white'}
                    icon_Color={close_Button_Color}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={ukbd_red_light}

                    icon_Name={"close"}
                    on_Press={onPress}
                    comp_Height_5={comp_Height}
                    comp_Width_5={comp_Height}
                    // border_Color={bg_Color_List_And_Phone_BG}
                />


            </View>

            {/*user button ends here*/}


        </View>
    );
};

export default Header_Login_Absolute_With_Map_Page;
