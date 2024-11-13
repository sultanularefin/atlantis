
import React, {
    useCallback,
    useRef,
    useState,
    useEffect,
} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,

    // TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,

    Pressable,
    Platform,
    useWindowDimensions,
    TextInput,
    FlatList,
    ListRenderItem,
    Alert,
    ActivityIndicator,
     BackHandler,
     StatusBarStyle,
      StatusBar
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
// import InputField from "../../components/InputField";
import {
    mid_light_White_Overlay_Color_Login,
    mid_light_White_Overlay_Color,
    list_Container_BG_Color,
    shadow_Color_List_Container,
    ukbd_navy_blue,
    ukbd_overlay_Color,
    ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_Text_Navy_Blue_color,
    very_light_blue_ukbd,
    very_light_red_ukbd,
    map_overlay_Color_Blue,
    cac_green_success

} from "../../ui_utils/important_Colors";


export interface Login_Page_Props {
    navigation: any,

}

import {CommonActions, useFocusEffect} from "@react-navigation/native";
import {unwrapResult} from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";

import hairlineWidth = StyleSheet.hairlineWidth;


import MapView, {Region} from "react-native-maps";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useAppDispatch, useAppSelector} from '../../../lib/app/hooks.ts';
import {login_Request_API__interface, one_Country_Interface} from '../../../interfaces/user/login.ts';


import Header_Login_Absolute_With_Map_Page from '../../header/Header_Login_Absolute_With_Map_Page.tsx';
import You_Are_Offline_Comp from '../../ui_utils/You_Are_Offline_Comp.tsx';
import {Limited_Countries_With_Phone_Flag} from '../../comps/identity/Limited_Countries_With_Phone_Flag.ts';
import Indicator_Common from '../../indicator/Indicator_Common.tsx';
import InputField_Email_Phone from '../../comps/identity/login/InputField_Email_Phone.tsx';
import One_Country_Item_Phone_Input from '../../comps/identity/login/One_Country_Item_Phone_Input.tsx';
import {select_Map_Region_Respective_to_Driver_Location} from '../../../lib/features/auth/auth_Slice.ts';
// import {useNetInfo} from "@react-native-community/netinfo";

import NetInfo, {
    NetInfoState,
    useNetInfo,
} from '@react-native-community/netinfo';


const tempPhone_Countries_State:one_Country_Interface[] = Limited_Countries_With_Phone_Flag;


const Login_Page: React.FC<Login_Page_Props> = ({
                                                    navigation,
                                                }) => {


    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const displayHeight = useWindowDimensions().height;
    const displayWidth = useWindowDimensions().width;

    const inner_Side_Width_For_Modal = 30; //displayWidth- (displayWidth*0.90);
    const modal_Width = (displayWidth * 0.90);

    const email_Phone_Ref = useRef<TextInput>(null);
    const password_Ref = useRef<TextInput>(null);



    const dispatch = useAppDispatch();


    const netInfo = useNetInfo();
    const map_View_Ref_At_Login_Page = useRef<MapView>(null);
    const update_CheckBox = (new_Value: boolean) => {

        setToggleCheckBox(new_Value);
    };


    const register_Button_Pressed = () => {

        console.log("__register_Button_Pressed__");



    };

    const login_Button_Pressed = /*async*/ () => {

        console.log("login button pressed >> dispatch api>> >>><<< ");




    };


    const login_Common_Code__Splash_AND_Login_Screen_Page = /*async*/ (
        login_Payload: login_Request_API__interface) => {
        try {

            // 999


            set_LOading_State(true);





        } catch (error_in_login__check) {
            console.log("error_in_login__check: ", error_in_login__check);
            set_LOading_State(false);
            // setModalVisibleState(false);

        }


    };








    // const [user_Email_or_PhoneState, setUser_Email_or_PhoneState] = useState<string>('');
    const [user_Email_or_PhoneState, setUser_Email_or_PhoneState] = useState<string>('');


    const [loadingState, set_LOading_State] = useState<boolean>(false);



    const [country_CallingCode_Modal_Visible_State, setCountry_CallingCode_Modal_Visible_State] = useState(false);

    const [selected_CountryState, setSelected_CountryState] = useState<one_Country_Interface>({

        // "abbreviation": "AF",
        // "calling_code": 93,
        // "country": "Afghanistan",
        // "index": 0

        abbreviation: "BD",
        calling_code: 880,
        country: "Bangladesh",
        index: 17,
        flag: '🇧🇩',
        unicode: 'flag_BD',
        image_resource_Link: require("../../../assets/flags/bd.png"),


    });


    const close_Button_Pressed = () => {

        console.log("at close_Button_Pressed");
        // return navigation.goBack();


        if (Platform.OS==='android') {


            console.log("at here");
            if (navigation.canGoBack()) {
                 navigation.goBack();

                // navigate_To_Home_Screen();

                return true;
            }
            else{

                BackHandler.exitApp();
                return true;
            }

        }
        else{
            // may not work  [[[for ios]]]

            /* if (navigation.canGoBack()) {
                 navigation.goBack();
             }

             else{*/


            console.log("ios navigationg to app stack");

            if (navigation.canGoBack()){
                navigation.goBack();
            }
            // navigate_To_Home_Screen();
            return true;


        };

    };



    // status bar related comps  ---begins here
    const STYLES = ['default', 'dark-content', 'light-content'] as const;
    const TRANSITIONS = ['fade', 'slide', 'none'] as const;
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[0],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
        'fade' | 'slide' | 'none'
    >(TRANSITIONS[0]);




    // status bar related comps ---- ends here
    // const update_email_or_phone=()


    const update_State_To_show_Modal_For_Phone_input_2= (new_Value:boolean) => {

        setCountry_CallingCode_Modal_Visible_State(new_Value);
    };


    const take_User_TO_Forgot_Password_Page = () => {




    };


    const backAction = () => {


        navigation.goBack();
        return true;
    };
    useEffect(() => {


        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            close_Button_Pressed,
        );

        return () => backHandler.remove();
    }, []);








    const go_TO_Password_Button_Pressed= () => {


        // login_Button_Pressed();
        password_Ref?.current?.focus();
    };


    const password_Input_Done_2 = () => {


        login_Button_Pressed();
        // password_Ref?.current?.focus();
    };


    const map_Region_Respective_to_Driver_Location_2: Region = useAppSelector(select_Map_Region_Respective_to_Driver_Location);




    const insets = useSafeAreaInsets();

    return (


        <SafeAreaView
            //SafeAreaView
            // SafeArea View and status bar(no effect) must be disabled in physical devcies, other wise map will
            // not rendered ON SAFEAREA PORTION ON phycical devices, checked on iOS physical device on may 16, 2023


            style={{
            flex: 10,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: displayWidth,//'100%',
            backgroundColor: 'lemonchiffon',//'transparent',


        }}>




            {/*absolute keyboard avoiding view in login screen begins here*/}

            <KeyboardAvoidingView
                // behavior ={Platform.OS === 'ios' ? 'padding' : null}

                // behavior= 'position'  //'height'

                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    // flex: 10,
                    flexDirection: 'column',
                    /* height: (netInfo?.isConnected === false)
                         ? (displayHeight-28)
                         : displayHeight,*/


                    height: displayHeight,
                    width: displayWidth,
                    position: 'absolute',
                    top: insets.top,
                    left: 0,

                    backgroundColor: map_overlay_Color_Blue,//mid_light_White_Overlay_Color_Login,//'rgba(255, 255, 255, 0.5)',


                }}
            >


                <Header_Login_Absolute_With_Map_Page


                    onPress={close_Button_Pressed}
                    comp_Height={50}
                    // fixed on may 07, displayHeight/13 final
                    // made 50 on may 10
                    header_Title={"Sign in"}
                    comp_Width={modal_Width}
                    zIndex_2={101}
                    left_Value={(displayWidth - modal_Width) / 2}

                    top_Value={0}// /*insets.top*/
                    // required for ios(iPhone) // may 08,2023
                    // not any more as added in keyboard avoiding view
                 />






                <ScrollView
                    style={{

                        // maxHeight:300,
                        width: displayWidth,

                    }}
                    // better not to use them

                    contentContainerStyle={{

                        justifyContent: 'center',
                        alignItems: 'center',


                        // height: displayHeight,
                        /*height: (netInfo?.isConnected === false)
                            ? (displayHeight-28)
                            : displayHeight,*/
                        height: displayHeight,
                        width: displayWidth,

                        // 28 for "You are offline"
                        // 170 in the bottom check fruits which is ommitted.
                        flexDirection: "column",
                        backgroundColor: 'transparent',//`${chocolate_Color}`
                        // backgroundColor: 'gold',
                    }}


                >







                    {/*Modal for phone selection begins here*/}


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={country_CallingCode_Modal_Visible_State}
                        onRequestClose={() => {
                            setCountry_CallingCode_Modal_Visible_State(false);
                            // Alert.alert("Modal has been closed.");
                        }}
                    >

                        <TouchableWithoutFeedback onPress={() => {
                            // console.log ("TouchableWithoutFeedback 222:: ", TouchableWithoutFeedback );
                            setCountry_CallingCode_Modal_Visible_State(false);
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                // marginTop: 22,
                                flexDirection: "column",
                            }}>

                                <TouchableWithoutFeedback onPress={() => {
                                    // console.log ("TouchableWithoutFeedback 222 inner:: ", TouchableWithoutFeedback );
                                }}>

                                    <View style={{
                                        backgroundColor: list_Container_BG_Color,//'white',//list_Container_BG_Color,//'white',//'teal',//"white",
                                        alignItems: "center",


                                        shadowColor: 'rgba(0,0,0,.25)',//shadow_Color_List_Container,//"#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 1.84,//3.84,
                                        borderWidth: hairlineWidth,//hairlineWidth,
                                        borderColor: 'rgba(0,0,0,.25),',//'red',//list_Container_BG_Color,



                                        width: modal_Width,//(displayWidth-(inner_Side_Width_For_Modal)),
                                        height: displayHeight / 2.5,
                                        paddingTop: inner_Side_Width_For_Modal,
                                        paddingBottom: inner_Side_Width_For_Modal,
                                        // paddingVertical: 10,
                                    }}
                                    >
                                        <FlatList

                                            data={tempPhone_Countries_State}

                                            keyExtractor={(item: one_Country_Interface) => `${item.country}-${item.calling_code}`}


                                            renderItem={({
                                                             item,
                                                             index
                                                         }) => (


                                                <One_Country_Item_Phone_Input
                                                    item={item}
                                                    onPress={() => {
                                                        setSelected_CountryState(item);
                                                        setCountry_CallingCode_Modal_Visible_State(false);
                                                    }}

                                                    comp_Height={displayHeight / 19}


                                                    widthArg={modal_Width - ((inner_Side_Width_For_Modal) * 2)}
                                                    // left: inner_Side_Width_For_Modal
                                                    // right: inner_Side_Width_For_Modal,
                                                    // as positioned centered, alignitems


                                                    // widthArg = {deviceHeight}
                                                />
                                            )}

                                            // showsHorizontalScrollIndicator={false}

                                            showsVerticalScrollIndicator={false}
                                            // extraData={selectedId}
                                            extraData={country_CallingCode_Modal_Visible_State}

                                            // ListHeaderComponent={Header_OF_Countries}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>


                    <View
                        style={{

                            // ...common_Container_in_Identity_Page_Login_Page_styles.Reg_Page,
                            // height: displayHeight,
                            ...common_Container_in_Identity_Page_Styles.Reg_Page,
                        }}
                    >




                        <View style={Login_Page_styles.loginSection}>

                            <View style=
                                      {{
                                          // Login_Page_styles.inputsContainer
                                          paddingVertical: 30,
                                          width: modal_Width,//"100%"
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          alignSelf: 'center',
                                      }}
                            >



                                <View style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    height: ((displayWidth / 7) *5),
                                    // backgroundColor: 'skyblue'


                                    // width: '100%',
                                }}>
                                    <InputField_Email_Phone
                                        // comp_Width={comp_Width-6}
                                        // text_Input_Comp_Height={(comp_Height / 4.3)}
                                        t_Height= {displayHeight}
                                        comp_Width={modal_Width}
                                        refEmail_or_Phone= {email_Phone_Ref}
                                        update_State_To_show_Modal_For_Phone_input= {update_State_To_show_Modal_For_Phone_input_2}
                                        selected_CountryState_2= {selected_CountryState}

                                        on_Next= {go_TO_Password_Button_Pressed}
                                        // email_OR_Phone_Data={user_Email_or_PhoneState}
                                        // update_Email_OR_Phone={update_email_or_phone}

                                        password_Ref= {password_Ref}
                                        password_Input_Done= {password_Input_Done_2}



                                    />




                                </View>



                                <View style={{
                                    // width: modal_Width,

                                    // width: modal_Width,/1.5,//'55%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    flexDirection: 'column',
                                    // backgroundColor: 'red',
                                }}>
                                    <View style={Login_Page_styles.checkboxContainer}>


                                        <Pressable

                                            style={({pressed}) => [
                                                {

                                                    backgroundColor: pressed
                                                        ? 'aliceblue'

                                                        : "transparent",

                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center',
                                                    alignSelf: 'flex-end',
                                                    flexDirection: 'row',
                                                    borderBottomColor: ukbd_navy_blue,
                                                    borderBottomWidth: 1,
                                                    height: 31,

                                                }
                                            ]
                                            }
                                            onPress={take_User_TO_Forgot_Password_Page}

                                        >


                                            <Text style={{
                                                ...Login_Page_styles.label_FP_in_Login_Page,


                                            }}>Forgotten your password?</Text>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={{
                                    // width: modal_Width/2,//'55%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    flexDirection: 'column',
                                    // backgroundColor: 'gold',
                                }}>
                                    <Pressable
                                        onPress={login_Button_Pressed}

                                        style={({pressed}) => [
                                            {
                                                ...button_Styles.loginButton,
                                                // flex:1,
                                                width: displayWidth*0.49,
                                                height: 30,// 24,// as told by sir,
                                                backgroundColor: pressed
                                                    ?

                                                    very_light_red_ukbd

                                                    : ukbd_navy_blue,

                                            }
                                        ]
                                        }
                                        // style={Login_Page_styles.loginButton}
                                    >
                                        <Text style={button_Styles.loginText}>Login</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{ ...Login_Page_styles.regSection,

                                width: modal_Width,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}>


                            <Pressable onPress={register_Button_Pressed}

                                // style={Login_Page_styles.loginButton}

                                       style={({pressed}) => [
                                           {
                                               ...button_Styles.loginButton,
                                               height: 30,//24,// as told by sir,
                                               backgroundColor: pressed
                                                   ?

                                                   very_light_red_ukbd

                                                   : 'white',
                                               borderWidth: hairlineWidth, //previously 3
                                               borderStyle: "solid",
                                               borderColor: ukbd_navy_blue,//ukbd_red,//ukbd_navy_blue,// ukbd_place_holder_TextColor,//"rgba( 255, 0, 0, 0.1)",
                                               width: modal_Width,

                                           }
                                       ]
                                       }


                            >
                                <Text style={{
                                    ...button_Styles.loginText,
                                    color: ukbd_navy_blue,

                                    // flexDirection: 'column',
                                    // justifyContent: 'flex-start',
                                    // alignItems: 'center',
                                    // alignSelf: 'center',
                                }
                                }>CREATE AN ACCOUNT</Text>
                            </Pressable>
                        </View>




                        {
                            (loadingState && (<Indicator_Common

                                    // t_Height={displayHeight}
                                    color={ukbd_red}
                                />)
                            )
                        }

                    </View>


                </ScrollView>




            </KeyboardAvoidingView>


            {/*absolute keyboard avoiding view in loing screen ends here*/}


        </SafeAreaView>
    );
};

export const button_Styles = StyleSheet.create({
    loginText: {
        color: "#fff",
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 16,

        fontWeight: "bold",//"300",
        // textTransform: "uppercase"
        letterSpacing: 1.1,
    },

    login_Text_no_Text_Transform: {
        color: "#fff",
        // fontFamily: "RobotoCondensed-Regular",
        fontSize: 14,

        fontWeight: '400',//"bold",//"300",
        // textTransform: "uppercase"
    },
    loginButton: {
        // flex:1,
        height: 30,//24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        backgroundColor: "#ff0000"
    },
});


export const common_Text_Input_Styles = StyleSheet.create({
    root_View_Wrapper_Text_INput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    text_Input_Phone: {
        // width: comp_Width - ((comp_Width / 9)),
        // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
        // divider width (2) january 26, 2023, arefin
        textDecorationLine: 'none',
        // backgroundColor: 'teal',
        paddingLeft: 15,
        fontSize: 18,
        // paddingTop: 1,
        letterSpacing: 2,//1.5,//0.5,
        color: ukbd_navy_blue,
        // margin: 'auto',
        // marginTop: 5,
        // paddingTop: -10,

    },

    text_Input_Email: {
        // width: comp_Width - ((comp_Width / 9)),
        // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
        // divider width (2) january 26, 2023, arefin
        textDecorationLine: 'none',
        // backgroundColor: 'teal',
        paddingLeft: 15,
        fontSize: 18,
        letterSpacing: 1.5,//1.5,//0.5,
        color: ukbd_navy_blue,

    },


    label_Text: {
        color: ukbd_Text_Navy_Blue_color,//'white',//ukbd_Text_Navy_Blue_color,//"#fff",
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 14,//14,

        // fontWeight: "300",
        // textTransform: "uppercase"
    },
});


const Login_Page_styles = StyleSheet.create({


    loginSection: {
        // paddingTop: 30,
        borderBottomWidth: 1,//hairlineWidth,//1,
        borderStyle: "solid",
        borderColor: very_light_blue_ukbd,//"rgba( 255, 0, 0, 0.1)"
    },
    pageTitle: {
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 26,
        color: "#012965",
        fontWeight: "300",
        // marginBottom: 20,
        // paddingHorizontal: 30
    },


    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center"
    },


    label_FP_in_Login_Page: {
        // margin: 8,
        color: "#012965",
        fontSize: 16,

        /*
        textDecorationColor: ukbd_navy_blue,
        textDecorationStyle: 'double',// ios
        textDecorationLine: 'underline',//
        */
        textAlign: 'right',
        letterSpacing: 1.4,
        lineHeight: 30,


    },


    regSection: {
        paddingTop: 30,
        // paddingHorizontal: 30
    },
    sectionTitle: {
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 26,
        color: "#012965",
        fontWeight: "300",
        marginBottom: 20
    },
    sectionText: {
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 16,
        color: "#012965",
        fontWeight: "300",
        marginBottom: 30
    }
});

export default Login_Page;

export const common_Container_in_Identity_Page_Styles = StyleSheet.create({

    Reg_Page: {
        // flex: 10,
        width: '100%',
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
});

