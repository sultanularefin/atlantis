import {
    Keyboard,
    Platform,
    Pressable,
    Text,
    TextInput,
    View
} from "react-native";
import {
    ukbd_navy_blue, ukbd_place_holder_TextColor,
    ukbd_red, ukbd_Text_Navy_Blue_color
} from "../../../ui_utils/important_Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import {common_Text_Input_Styles} from "../../../screens/identity/Login_Page";


interface Just_Email_Interface {
    text_Input_Comp_Height: number,
    comp_Width: number,// label,
    refEmail_or_Phone: React.RefObject<TextInput>,
    update_Email: (value: string) => void,
    email_OR_Phone_Value_State: string,

    toggle_email_login_active_state_and_phone_disable_2: () => void,
    email_Login_Active_State_3: boolean,
    phone_Login_Active_State_3: boolean,
    on_Next_2: () => void,

}

const Just_Email: React.FC<Just_Email_Interface> = (
    {
        text_Input_Comp_Height,
        comp_Width,// label,
        refEmail_or_Phone,
        update_Email,
        email_OR_Phone_Value_State,
        toggle_email_login_active_state_and_phone_disable_2,
        email_Login_Active_State_3,
        phone_Login_Active_State_3,

        on_Next_2,


    }) => {

    return (


        <View style={{
            ...common_Text_Input_Styles.root_View_Wrapper_Text_INput,
            width: comp_Width,
            height: (text_Input_Comp_Height),



        }}

        >
            <TextInput
                style={{


                    height: text_Input_Comp_Height,//deviceHeight/15.5,

                    width: (comp_Width - 1),
                    // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
                    // divider width (2) january 26, 2023, arefin
                    ...common_Text_Input_Styles.text_Input_Email,



                }}
              
                autoComplete={'email'}  
               
                placeholder={"Email"}
                caretHidden={false}

                placeholderTextColor={ukbd_place_holder_TextColor}

                autoCapitalize="none"
                // caretHidden={true} uncomment this line otherwise cursor will not show , don't make "false" either.....
                autoCorrect={false} // ios only

                // defaultValue={"Email or Phone"}

                keyboardType={"email-address"}
                ref={refEmail_or_Phone}
                onChangeText={(value) => update_Email(value)}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                textContentType={"emailAddress"} // ios
                cursorColor={ukbd_place_holder_TextColor} //android
                onSubmitEditing={on_Next_2}
                value={email_OR_Phone_Value_State}
                returnKeyType={"next"}
                textAlign={"left"}

                onFocus={toggle_email_login_active_state_and_phone_disable_2}

            />


         

        </View>

    );
};

export default Just_Email;

