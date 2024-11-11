import React from "react";


import {
    Keyboard,
    Platform,
    Pressable, StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";


import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";


import {
    ukbd_navy_blue,
    ukbd_place_holder_TextColor, ukbd_red_light
} from "../../../ui_utils/important_Colors";

/*import {
    useAppDispatch,
    useAppSelector
} from "../../../../appStore/app/hooks";*/

/*import {
    select_Inputted_promo_Code_Shopping_Cart_Page,
    update_Cart_Promotion_Code_2
} from "../../../../appStore/Reducers/product_Slice";*/
import {common_Text_Input_Styles} from "../../../screens/identity/Login_Page";
import hairlineWidth = StyleSheet.hairlineWidth;
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {useAppDispatch, useAppSelector} from "../../../../lib/app/hooks.ts";


interface Promotion_Code_Input_Interface {


    text_Input_Comp_Height: number,
    comp_Width: number,// label,
    // on_Next_From_FP_Email_Input_2: () => void,


}

const Promotion_Code_Input: React.FC<Promotion_Code_Input_Interface> = (
    {
        text_Input_Comp_Height,
        comp_Width,// label,


        // on_Next_From_FP_Email_Input_2,


    }) => {


    // email_OF_Forget_Password
    // select_Inputted_promo_Code_Shopping_Cart_Page

    // const new_Promo_Code: string = useAppSelector(select_Inputted_promo_Code_Shopping_Cart_Page);

    const dispatch = useAppDispatch();


    const update_Cart_Promotion_Code = (promo_code: string) => {

        // console.log("dispatch(ss)");

        console.log("dispatch(update_Cart_Promotion_Code_2(promo_code));");


    };

    const apply_Button_Width = comp_Width / 3;
    const input_Box_View_Width = comp_Width - apply_Button_Width;


    const apply_Button_Pressed = ()=>{

        console.log("apply_Button_Pressed");
    };


    return (

        <View style={{
            width: comp_Width,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',//'flex-start',
            height: (text_Input_Comp_Height),
            /*  borderWidth: hairlineWidth,
              borderColor: ukbd_navy_blue,*/


        }}

        >
            {/*text input view wrapper width begins here*/}
            <View
                style={{
                    width: input_Box_View_Width-10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: (text_Input_Comp_Height),
                    borderWidth: hairlineWidth,
                    borderColor: ukbd_navy_blue,
                    // backgroundColor: 'red',


                }}

            >
                <TextInput
                    style={{


                        height: text_Input_Comp_Height,//deviceHeight/15.5,

                        width: input_Box_View_Width,
                        // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
                        // divider width (2) january 26, 2023, arefin
                        ...common_Text_Input_Styles.text_Input_Email,


                    }}

                    autoComplete={'email'}

                    placeholder={"Enter Code"}
                    caretHidden={false}

                    placeholderTextColor={ukbd_place_holder_TextColor}

                    autoCapitalize="none"
                    // caretHidden={true} uncomment this line otherwise cursor will not show , don't make "false" either.....
                    autoCorrect={false} // ios only


                    keyboardType={"email-address"}
                    // ref={ref_email_FPass}
                    onChangeText={(value) => update_Cart_Promotion_Code(value)}
                    // onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    textContentType={"emailAddress"} // ios
                    cursorColor={ukbd_place_holder_TextColor} //android
                    // onSubmitEditing={on_Next_From_FP_Email_Input_2}
                    value={"new_Promo_Code"}
                    returnKeyType={"next"}
                    textAlign={"left"}

                />

            </View>
            {/*text input view wrapper width ends here*/}

            {/*apply button width begins here*/}
            <View
                style={{
                    width: apply_Button_Width -10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: (text_Input_Comp_Height),
                    borderWidth: hairlineWidth,
                    borderColor: ukbd_navy_blue,
                    // paddingHorizontal: 10,


                }}

            >


                <Pressable
                    style={({pressed}) => [
                        {
                            // flexDirection: 'column',
                        }]
                    }

                    onPress={apply_Button_Pressed}
                >

                    {
                        ({pressed })=>(
                            <Text style={{
                                // fontWeight: '400',//'bold',
                                fontWeight: '300',
                                fontSize: 22,
                                color: (pressed? ukbd_red_light
                                    : ukbd_navy_blue),
                                letterSpacing: 1.1,
                            }}>Apply</Text>

                        )
                    }


                </Pressable>
            </View>

            {/*apply button Width ends here*/}


        </View>

    );
};

export default Promotion_Code_Input;

