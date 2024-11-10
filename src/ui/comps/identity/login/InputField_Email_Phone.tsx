import React,
{
    useRef,
    useState
} from "react";
import {
    View,
    // Pressable,
    StyleSheet,
    TextInput,
    Text,
    KeyboardTypeOptions,
    TextComponent,
    ViewComponent,
    Platform,
    Pressable,
    Keyboard,
} from "react-native";

// import PhoneInput from "react-native-phone-number-input";
import {Icon, IconButtonProps} from "react-native-vector-icons/Icon";
import Entypo from "react-native-vector-icons/Entypo";
import {useAppDispatch, useAppSelector} from "../../../../lib/app/hooks";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    ukbd_navy_blue,
    ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_Text_Navy_Blue_color
} from "../../../ui_utils/important_Colors";
// import {one_Country_Interface} from "./login_interface";
// import Just_Phone_Login from "./Just_Phone_Login";
import Just_Email from "./Just_Email";
/*import {
    login_USER_INPUT__interface,
    select_Login_Data,
    update_login_email, update_phone
} from "../../../../lib/Reducers/authSlice";*/
import InputField_Password from "./InputField_Password";
import hairlineWidth = StyleSheet.hairlineWidth;
import {one_Country_Interface} from '../../../../interfaces/user/login.ts';


interface loginErrorObject {

    message: string,
    extraData: string,
    type: number,


}


interface loginErrorObject {

    message: string,
    extraData: string,
    type: number,


}


export interface InputField_Email_Phone_Props {
    t_Height: number,
    comp_Width: number,
    refEmail_or_Phone: React.RefObject<TextInput>,
    update_State_To_show_Modal_For_Phone_input: (value: boolean) => void,
    selected_CountryState_2: one_Country_Interface,

    on_Next: () => void,


    password_Ref: React.RefObject<TextInput>,
    password_Input_Done: () => void,


}

const InputField_Email_Phone: React.FC<InputField_Email_Phone_Props> = (
    {
        t_Height,
        comp_Width,// label,
        refEmail_or_Phone,
        update_State_To_show_Modal_For_Phone_input,
        selected_CountryState_2,
        on_Next,
        password_Ref,
        password_Input_Done,


    }) => {

    // const login_Data: login_USER_INPUT__interface = useAppSelector(select_Login_Data);

    const dispatch = useAppDispatch();


    // const [user_Email_or_PhoneState, setUser_Email_or_PhoneState] = useState<string>('');

    // const [userPasswordState, setUserPasswordState] = useState<string>('');


    const invoke_CountryCode_Selection_2 = () => {
        update_State_To_show_Modal_For_Phone_input(true);
        // setCountry_CallingCode_Modal_Visible_State(true);
    };
    const [phoneLogin_Active_State, setPhoneLogin_Active_State] = useState<boolean>(true);

    const [email_Login_Active_State, setEmail_Login_Active_State] = useState<boolean>(false);

    const setEmailAddress = (inputEmailAddress: string) => {
        // console.log('e: at setEmail: ',e);
        // setemailState((inputEmailAddress || ''));

        console.log('inputEmailAddress : ', inputEmailAddress);
        // login_Data


        // dispatch(update_phone(""));
        // return dispatch(update_login_email(inputEmailAddress));


        // setUser_Email_or_PhoneState(inputEmailAddress);
    };


    const set_Phone = (inputEmailAddress: string) => {
        // console.log('e: at setEmail: ',e);
        // setemailState((inputEmailAddress || ''));

        console.log('inputEmailAddress : ', inputEmailAddress);
        // login_Data


        // dispatch(update_login_email(""));
        // return dispatch(update_phone(inputEmailAddress));


        // setUser_Email_or_PhoneState(inputEmailAddress);
    };


    const [errorObject, setErrorObject] = useState<loginErrorObject>({

        message: '',
        extraData: '',
        type: 0,
    });

    const toggle_email_login_active_state_and_phone_disable = () => {

        console.log("__email_Login_Active_State__", email_Login_Active_State); // initially should be false. before setState call..

        // setUser_Email_or_PhoneState

        if (!email_Login_Active_State) {
            // previously email disabled

            setEmail_Login_Active_State(!email_Login_Active_State);

            setPhoneLogin_Active_State(false);

            // dispatch(update_login_email(""));
            // dispatch(update_login_email(""));


            // setEmailAddress("");
            // setUser_Email_or_PhoneState("");
        } else {
            // previously email enabled

            setEmail_Login_Active_State(!email_Login_Active_State);

            setPhoneLogin_Active_State(true);
            // dispatch(update_phone(""));

            // dispatch(update_phone(""));


            // setUserPasswordState("")
            // setUser_Email_or_PhoneState("");

        }
    };


    return (

        <View style={{
            ...InputField_Email_Phone_Styles.root_wrapper_EMail_Phone,

        }}
        >



            <View style={{
                ...InputField_Email_Phone_Styles.second_Root_Wrapper,
                width: comp_Width,//,
                // height: (t_Height / 11),
                height: 46,//(comp_Width / 6),
            }}
            >

                <View style={{
                    ...InputField_Email_Phone_Styles.third_Final_wrapper_with_View,
                    height: 46,//(comp_Width / 7) + 1, // 6, hairline width now not 6 but 1
                    width: comp_Width,//,

                }}
                >
                    <Just_Email
                        // comp_Width={comp_Width-6}
                        // text_Input_Comp_Height={(comp_Height / 4.3)}
                        comp_Width={comp_Width - 1}  // 6, hairline width now not 6 but 1
                        text_Input_Comp_Height={ 45/*(comp_Width / 7)-1*/}

                        // text_Input_Comp_Height = {comp_Height / 2.3}
                        // comp_Width={comp_Width}
                        refEmail_or_Phone={refEmail_or_Phone}
                        update_Email={setEmailAddress}
                        // email_OR_Phone_Value_State={login_Data.email}
                        email_OR_Phone_Value_State={""}
                        toggle_email_login_active_state_and_phone_disable_2={toggle_email_login_active_state_and_phone_disable}
                        email_Login_Active_State_3={email_Login_Active_State}
                        phone_Login_Active_State_3={phoneLogin_Active_State}

                        on_Next_2={on_Next}
                    />

                </View>
            </View>

            {/*Email Part ends here*/}


            <View style={{

                justifyContent: "center",
                alignItems: "center",
                alignSelf: 'center',
                flexDirection: "row",
                width: '100%',
                height: (comp_Width / 12),//t_Height /14,



            }}>



            </View>


            {/*input password begins here*/}

            <View style={{
                ...InputField_Email_Phone_Styles.second_Root_Wrapper,
                width: comp_Width,//,
                // height: (t_Height / 11),
                height: 46,//(comp_Width / 6),
            }}
            >

                <View style={{
                    ...InputField_Email_Phone_Styles.third_Final_wrapper_with_View,
                    height: 46,//(comp_Width / 7) + 1, // 6, hairline width now not 6 but 1
                    width: comp_Width,//,

                }}
                >


                    <InputField_Password


                        comp_Width={comp_Width - 1}  // 6, hairline width now not 6 but 1
                        text_Input_Comp_Height={45/*(comp_Width / 7)-1*/}


                        // comp_Width= { (displayWidth * 0.90) - 6}
                        // text_Input_Comp_Height= {(displayHeight / 17)}

                        // comp_Width={comp_Width-6}
                        // text_Input_Comp_Height={(displayWidth / 7)}


                        pw_Ref={password_Ref}
                        p_value={""}
                        // p_value={login_Data.password}

                        on_Next={password_Input_Done}

                    />
                </View>
            </View>


            {/*input password ends here*/}


            {(errorObject.message !== '')
                ? <Text style={InputField_Email_Phone_Styles.errorTextStyle}> {errorObject.message} </Text>
                : null
            }
        </View>


    );
};

export const InputField_Email_Phone_Styles = StyleSheet.create({


    root_wrapper_EMail_Phone: {

        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'flex-start',
    },

    second_Root_Wrapper: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //

        // backgroundColor: 'teal',
    },


    third_Final_wrapper_with_View: {

        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'center',
        // borderWidth: 3,
        borderWidth: hairlineWidth, //previously 3
        borderStyle: "solid",
        borderColor: ukbd_navy_blue,//ukbd_red,//ukbd_navy_blue,// ukbd_place_holder_TextColor,//"rgba( 255, 0, 0, 0.1)",
        borderRadius: 2,
        // backgroundColor: 'red',
        // marginBottom: 18

    },


    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },

    text_Input_Styles: {
        borderBottomColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        color: 'black',
    },


});
export default InputField_Email_Phone;
