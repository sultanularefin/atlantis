import React,
{
    useRef,
    useState
} from "react";
import {
    View,
    // TouchableOpacity,
    StyleSheet,
    TextInput,
    Text,
    KeyboardTypeOptions,
    TextComponent,
    ViewComponent,
    Pressable,
} from "react-native";

// import PhoneInput from "react-native-phone-number-input";
// import {
//     Icon,
//     IconButtonProps} from "react-native-vector-icons/Icon";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    ukbd_navy_blue,
    ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_Text_Navy_Blue_color
} from "../../../ui_utils/important_Colors";
import {useAppDispatch} from "../../../../lib/app/hooks";
// import {update_Password_Redux} from "../../../lib/Reducers/authSlice";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {common_Text_Input_Styles} from "../../../screens/identity/Login_Page";

// import {useAppDispatch} from "../../lib/app/hooks";


export interface InputField_Password_Props {


    // label: string,
    // icon: any,//ViewComponent,//TextComponent,// any,//Icon,//IconButtonProps,//string,IconButtonProps
    /*
    inputType?: string,
    keyboardType?: KeyboardTypeOptions | undefined,//string,
    viewIcon?: any,//string,
    viewFunction?: () => void,
    */

    comp_Width: number,
    text_Input_Comp_Height: number,

    pw_Ref: React.RefObject<TextInput>,
    p_value: string,

    on_Next: () => void,


}

const InputField_Password: React.FC<InputField_Password_Props> = (
    {

        // label,
        comp_Width,
        text_Input_Comp_Height,
        pw_Ref,
        p_value,
        on_Next,

    }) => {

    const dispatch = useAppDispatch();




    // const dispatch = useAppDispatch();


    // const refPWD = useRef(null);
    const [secureTextState, setSecureTextState] = useState(true);


    const toggleSecureTextState = () => {

        setSecureTextState(!secureTextState);
    };

    const update_Password = (new_p: string) => {

        // return dispatch(update_Password_Redux(new_p));
    };

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
                        width: comp_Width - ((comp_Width / 9) + 4),
                        // width: comp_Width - ((comp_Width / 9)),
                        // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
                        // divider width (2) january 26, 2023, arefin
                        ...common_Text_Input_Styles.text_Input_Phone,


                    }}
                    onChangeText={(new_Text: string) => update_Password(new_Text)}
                    placeholder={"Password"}
                    placeholderTextColor={ukbd_place_holder_TextColor}
                    keyboardType={'default'}
                    // value={text}
                    autoComplete={"password-new"}
                    ref={pw_Ref}
                    value={p_value}

                    secureTextEntry={Boolean(secureTextState)}

                    onSubmitEditing={on_Next}
                />


                <Pressable

                    onPressIn={toggleSecureTextState}
                    onPressOut={toggleSecureTextState}


                    style={({pressed}) => [
                        {
                            width: comp_Width / 9,
                            height: (comp_Width / 9) - 6, //comp_Height - 10,


                            flexDirection: 'column',



                            ...InputField_Password_Styles.iconHolder,
                            backgroundColor: pressed ? `${ukbd_place_holder_TextColor}` : 'transparent'


                        },
                    ]}>


                    {({pressed}) => (


                        <Ionicons
                            name="eye-outline"
                            size={(comp_Width / 12) -6} // -1

                            color={pressed ? ukbd_Text_Navy_Blue_color : ukbd_navy_blue}


                            style={{}}

                        />


                    )}
                </Pressable>


        </View>


    );
};

const InputField_Password_Styles = StyleSheet.create({
    inputArea: {
        // flex: 1,
        height: 42,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba( 255, 0, 0, 0.1)",
        borderRadius: 2,
        marginBottom: 18
    },
    iconHolder: {
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flex: 1,
        paddingHorizontal: 0,
        color: "#012965",
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 16,
        fontWeight: "300"
    },
    containerStyle: {
        height: 39,
        width: "100%",
        borderRadius: 2,
        padding: 0
    },
    textContainerStyle: {
        backgroundColor: "transparent",
        height: 39,
        padding: 0,
        margin: 0
    },
    codeTextStyle: {
        color: "#012965",
        padding: 0,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputStyle: {
        backgroundColor: "transparent",
        color: "#012965",
        padding: 0,
        height: 39
    }
});
export default InputField_Password;
