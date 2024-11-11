import React, {useState} from "react";
import {
    Pressable, StyleSheet,
    Text, TextInput,
    View
} from "react-native";

// import {ukbd_navy_blue, ukbd_red, ukbd_red_light, ukbd_Text_Navy_Blue_color} from "../../../../ui_utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

// import {useAppDispatch, useAppSelector} from "../../../../../appStore/app/hooks";


import hairlineWidth = StyleSheet.hairlineWidth;
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import Single_Cart_Item_Increment_Button from "./Single_Cart_Item_Increment_Button";
import Single_Cart_Item_Decrement_Btn from "./Single_Cart_Item_Decrement_Btn";

import {
    ukbd_navy_blue, ukbd_place_holder_TextColor,
    ukbd_red,
    ukbd_red_light,
    ukbd_Text_Navy_Blue_color
} from "../../../ui_utils/important_Colors";
/*import {
    useAppDispatch,
    useAppSelector,
} from "../../../../appStore/app/hooks";*/
/*import {
    decrement_Single_Cart_Item,

    increment_Decrement_Single_Cart_Item_Payload_Interface,
    increment_Decrement_Single_Item_Payload_Interface,
    increment_Single_Cart_Item,
    one_Cart_Item_Update_With_TextIpnut_Payload_Interface,
    update_One_Cart_Item_Value_Through_Text_Input,

} from "../../../../appStore/Reducers/product_Slice";*/
import {common_Text_Input_Styles} from "../../../screens/identity/Login_Page";
import {useAppDispatch} from "../../../../lib/app/hooks.ts";


interface Single_Cart_Item_Increment_Decrement_Root_Props {
    comp_Height_3: number,
    comp_Width_3: number,
    product_Id: number,//string,

    quantity: number,
    index: number,
    // add_Button_Pressed_State: boolean,

}


const Single_Cart_Item_Increment_Decrement_Root: React.FC<Single_Cart_Item_Increment_Decrement_Root_Props> = (
    {
        comp_Height_3,
        comp_Width_3,
        product_Id,
        quantity,
        index,
        // add_Button_Pressed_State
    }
) => {
    // const email_Formatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const number_Formatter = /^[0-9]+$/;
    /*

    const [Add_Button_Pressed_State, set_Add_Button_Pressed_State] = useState<boolean>(false);
    const [value_State, set_value_State] = useState<number>(1);

    */

    //
    // quantity: number,
    //     add_Button_Pressed: boolean,

    // const value_State:number= useAppSelector(export_Single_Product_Quantity_Value_State);
    //
    // const Add_Button_Pressed_State:boolean= useAppSelector(export_Single_Product_Add_BTN_Pressed_State);


    // console.log("__value_State__ :",quantity);
    // console.log("__Add_Button_Pressed_State_ :",add_Button_Pressed);


    // export_Single_Product_Add_BTN_Pressed_State;
    // export_Single_Product_Quantity_Value_State;


    const dispatch = useAppDispatch();


    const increment_button_Pressed = () => {

        console.log("__increment_Single_Cart_Item__Button_Pressed__");

        /*
        const increment_Payload: increment_Decrement_Single_Cart_Item_Payload_Interface = {
            single_Cart_Item_Qtity: quantity, // not used...
            product_ID: product_Id,
        };
        */

        console.log("dispatch(increment_Single_Cart_Item(index))");





    };


    const update_One_Cart_Item_Value = (str: string) => {

        // console.log("__number_Formatter.test(str)__: ",number_Formatter.test(str));

        console.log("below are commented on 11th nov 2024");

        /*
        if (number_Formatter.test(str)) {

            const payload_For_Text_Input_Box_Update: one_Cart_Item_Update_With_TextIpnut_Payload_Interface = {
                index: index,
                str: str,
            };
            console.log("__update_One_Cart_Item_Value__");

            dispatch(update_One_Cart_Item_Value_Through_Text_Input(payload_For_Text_Input_Box_Update));

        }
        else{

            console.log("non numeric input added");
        }

        */

    };


    const decrement_button_Pressed = () => {

        console.log("__decrement_Single_Cart_Item__Button_Pressed__");


        console.log("dispatch(decrement_Single_Cart_Item(index))");


    };


    const box_Height = comp_Height_3;//comp_Height_3 / 2;
    // const heart_Width= t_Width/5;
    const add_Width = comp_Width_3; //t_Width -(heart_Width);

    return (
        <View
            style={{
                // flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // paddingHorizontal: 4,
                height: comp_Height_3,
                width: comp_Width_3,
                // borderColor: ukbd_red,
                // backgroundColor: 'blue',
            }}
        >


            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: comp_Height_3,
                    alignItems: 'flex-end',
                    // backgroundColor: 'tomato',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        // borderColor: 'tomato',//ukbd_red,
                        //borderWidth: hairlineWidth,//1,
                        // flex: 2,
                        justifyContent: 'flex-end',
                        height: box_Height,
                        // backgroundColor: 'teal',


                    }}

                >


                    <View

                        style={{
                            justifyContent: 'center',
                            width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: 'transparent',//ukbd_red,
                        }}
                    >

                        <Single_Cart_Item_Decrement_Btn
                            comp_Height_2={box_Height}
                            btn_Pressed={decrement_button_Pressed}
                            comp_Width={40}
                            icon_Color={ukbd_navy_blue}
                        />


                        <View

                            style={{
                                justifyContent: 'center',
                                width: add_Width - (40 + 40),//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: 'transparent',//ukbd_red,//'transparent',//ukbd_red,
                            }}>

                            {/*
                            <Text
                                style={{
                                    //color: ukbd_red,//ukbd_navy_blue,
                                    // color: {pressed? 'white'
                                    //         : ukbd_red
                                    // },
                                    // color: {pressed ? ukbd_navy_blue : ukbd_red},
                                    color: ukbd_navy_blue,//'white',
                                    fontSize: 18,
                                    // lineHeight: 14,
                                    // fontWeight: (pressed?'400':"300"),
                                    fontFamily: "RobotoCondensed-Regular",
                                    textAlign: "left",

                                }}>{quantity}
                            </Text>
                            */}

                            <TextInput
                                style={{


                                    height: box_Height,//deviceHeight/15.5,

                                    width: add_Width - (40 + 40),
                                    // width: component WIDTH -(COUNTRY PHONE NUMBER SELECT WIDHT + BORDER ON BOTH SIDES(1+1=2), + 2 Toggle component
                                    // divider width (2) january 26, 2023, arefin
                                    // ...common_Text_Input_Styles.text_Input_Email,
                                    textDecorationLine: 'none',
                                    // backgroundColor: 'teal',
                                    // paddingLeft: 15,
                                    fontSize: 18,
                                    letterSpacing: 1.5,//1.5,//0.5,
                                    color: ukbd_navy_blue,
                                    // backgroundColor: 'blue',


                                }}


                                placeholder={`${quantity}`}
                                caretHidden={false}

                                placeholderTextColor={ukbd_place_holder_TextColor}

                                autoCapitalize="none"
                                // caretHidden={true} uncomment this line otherwise cursor will not show , don't make "false" either.....
                                autoCorrect={false} // ios only


                                keyboardType={"numeric"}
                                // ref={ref_email_FPass}
                                onChangeText={(value) => update_One_Cart_Item_Value(value)}
                                // onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={false}
                                textContentType={"creditCardNumber"} // ios
                                cursorColor={ukbd_place_holder_TextColor} //android
                                // onSubmitEditing={on_Next_From_FP_Email_Input_2}
                                value={quantity.toString()}
                                returnKeyType={"next"}
                                textAlign={"center"}

                            />


                        </View>


                        <Single_Cart_Item_Increment_Button
                            comp_Height_2={box_Height}
                            btn_Pressed={increment_button_Pressed}
                            comp_Width={40}
                            icon_Color={ukbd_navy_blue}
                        />


                    </View>


                    {/*80 % ends here*/}


                </View>


            </View>


        </View>

    );
};

export default Single_Cart_Item_Increment_Decrement_Root;

