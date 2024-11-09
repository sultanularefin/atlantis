import React from "react";
import {
    Alert,
    StyleSheet,
    Text,
    View,
} from "react-native";

/*import {
    bg_Color_List_And_Phone_BG,
    close_Button_Color,
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light
} from "../ui_Utils/important_Colors";*/
import Identity_Circle_Button from "./sub_Comps/Identity_Circle_Button.tsx";
import {
    // close_Button_Color,
    bg_Color_List_And_Phone_BG,
    close_Button_Color,
    ukbd_navy_blue, ukbd_red,
    ukbd_red_light

} from "../ui_utils/important_Colors.ts";

// import Identity_Circle_Button from "./sub_Comps/Identity_Circle_Button";

interface Header_Product_Details_Page_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,
    header_Title: string,
    Z_Index: number,

}

const Header_Product_Details_Page: React.FC<Header_Product_Details_Page_Props> = ({
                                                                                      nav,
                                                                                      comp_Height,
                                                                                      comp_Width,
                                                                                      header_Title,
                                                                                      Z_Index,
                                                                                  }) => {


    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);

    // const localStorage: driver_Detail__By_Provider_ID_server_Token = useAppSelector(driver_Detail_Data_Export);






    const back_Button_Pressed = () => {
        return nav.goBack();
    };

    return (
        <View style={{
            flexDirection: "column",
            alignItems: "flex-end",
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
                    justifyContent: 'flex-end',
                    width: comp_Width,
                    paddingLeft: 10,
                    // back
                }}>
                {/*<View style={styles.headerItems}>*/}





                {/*title begins here*/}




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
                    bg_Color={bg_Color_List_And_Phone_BG}
                    icon_Color={close_Button_Color}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={ukbd_red_light}

                    icon_Name={"close"}
                    on_Press={back_Button_Pressed}
                    comp_Height_5={comp_Height}
                    comp_Width_5={comp_Height}
                    // border_Color={bg_Color_List_And_Phone_BG}
                />


               {/* <Identity_Circle_Button
                    bg_Color={bg_Color_List_And_Phone_BG}
                    icon_Color={close_Button_Color}
                    comp_initial_Color={"transparent"}
                    on_Pressed_Color={ukbd_red_light}

                    icon_Name={"ios-close-outline"}
                    on_Press={close_btn_press}
                    comp_Height_5={comp_Height}
                    comp_Width_5={comp_Height}
                    border_Color={bg_Color_List_And_Phone_BG}
                />*/}


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
export default Header_Product_Details_Page;
