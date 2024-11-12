import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
/*import {

} from "../../ui_utils/important_Colors";*/
import React, {useState} from "react";
import {Header_Props} from "../Header_DashBoard_Home";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Feather from "react-native-vector-icons/Feather";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Single_Bag_Row from "./Single_Bag_Row";

import {MonetaryUnits} from "../../ui_utils/localization_utils";
import hairlineWidth = StyleSheet.hairlineWidth;
import {useAppSelector} from "../../../lib/app/hooks.ts";
import Vertical_Divider_Full_Width_Active_Order from "../../../divider/Vertical_Divider_Full_Width_Active_Order.tsx";
import {select_Logger_Data_BY_ID} from "../../../lib/features/auth/auth_Slice.ts";
import {get_Detail_By_User_ID_server_Token} from "../../../interfaces/user/user_data.ts";
import {
    ukbd_navy_blue,
    ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_red_light,
    very_light_red_ukbd
} from "../../ui_utils/important_Colors.ts";
// import Account from "../../screens/identity/Account";

export interface User_Button_Props {
    nav: any,
    comp_Height: number,
    comp_Width: number,
    bg_color: string,
    flex_val: number,
}

const User_Button: React.FC<User_Button_Props> = ({
                                                      nav,
                                                      comp_Height,
                                                      comp_Width,
                                                      bg_color,
    flex_val,
                                                  }) => {
// const User_Button = ()=>{
    const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);
    const insets = useSafeAreaInsets();

    const [modal_Visible_State, set_Modal_Visible_State] = useState<boolean>(false);
    const User_Button_Pressed = () => {


        if (localStorage?.user?._id) {

            return nav.navigate("Account");
            // set_Modal_Visible_State(true);

            /*console.log("__navigate to __App Stack __User_Button_Pressed");
            return nav.navigate("Profile");


             */
            // return nav.navigate("AppStack");
            // ukbd_navy_blue

        } else {
            console.log("__navigate to __App Stack __User_Button_Pressed");
            return nav.navigate("Login_Page");

        }

    };

    const Profile_Button_Pressed = () => {

        console.log("Profile_Button_Pressed");
        set_Modal_Visible_State(false);

        return nav.navigate("Account");
        // return nav.navigate("Order_List_Page");
    };



    return (

        <View style={{

            flex: flex_val,
            display: 'flex',
            flexDirection: 'row-reverse',
        }

        }>

            {/*modal begins here*/}



            {/*modal ends here*/}

            <Pressable
                style={({pressed}) => [
                    {
                        flexDirection: 'column',
                        height: comp_Height - 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }]
                }

                onPress={User_Button_Pressed}
            >

                {
                    ({pressed}) => (
                        /* <FontAwesome5
                             name="user"
                             color={(pressed? ukbd_red_light: ukbd_navy_blue)} // "#012965"
                             size={comp_Height / 2.5}

                         />*/

                        <Feather
                            name="user"
                            color={(pressed ? ukbd_red_light : ukbd_navy_blue)} // "#012965"
                            size={comp_Height / 2.5}

                        />
                    )
                }


            </Pressable>



        </View>
    );
};

export default User_Button;


const user_Button_Modal_Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',//'flex-start',
        alignItems: 'flex-end',


    },

    notificationBox: {
        // padding: 10,

        // marginTop: 5,
        marginBottom: 10,
        backgroundColor: 'white',//'#FFFFFF',
        flexDirection: 'row',
        // borderRadius: 10,
        borderBottomColor: ukbd_place_holder_TextColor,//ukbd_navy_blue,
        borderBottomWidth: hairlineWidth,//2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // alignContent: 'center',
    },

    description: {
        fontSize: 18,
        color: ukbd_navy_blue,//'black',
        fontWeight: 'bold',
        marginTop: 0,
        marginLeft: 10,
    },
    modalView: {
        marginLeft: 20,
        // marginRight: 10,
        backgroundColor: 'white',
        // borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 2,//20,
        // padding: 10,
        elevation: 2,
        height: 30,
        backgroundColor: ukbd_navy_blue,//ukbd_place_holder_TextColor,//'#2196F3',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',


    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },

    textStyle: {
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '400',//'bold',
        fontSize: 14,
        color: ukbd_red,//ukbd_navy_blue,
    },
});
