import React, {useState} from "react";
import {
    Pressable, StyleSheet,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red, ukbd_red_light, ukbd_Text_Navy_Blue_color} from "../../../../ui_Utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import {useAppDispatch, useAppSelector} from "../../../../../appStore/app/hooks";
import hairlineWidth = StyleSheet.hairlineWidth;
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Love_Button from "./Love_Button";
import Increment_Button from "./Increment_Button";
import Decrement_Btn from "./Decrement_Btn";
import {
    // add_Item_To_Cart_Payload_Interface,
    // add_To_Cart_API,
    decrement_Single_Product_For_Details_Page, disable_Btn_Pressed_State_In_Home_Page_0,
    export_Single_Product_Add_BTN_Pressed_State,
    export_Single_Product_Quantity_Value_State, export_Unique_Cart_ID,
    increment_Decrement_Single_Item_Payload_Interface,
    // increment_Single_Product,
    increment_Single_Product_For_Details_Page,
    local_Cart_Item, select_City_ID, select_Country_ID,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit, select_Store_Data, select_Store_ID,
    update_single_Product_Add_Btn_Pressed_State
} from "../../../../../appStore/Reducers/product_Slice";
import {get_Detail_By_User_ID_server_Token} from "../../../../../appStore/interfaces_Slice/user_Related_Interfaces";
import {select_Logger_Data_BY_ID} from "../../../../../appStore/Reducers/authSlice";
import {
    add_Item_To_Cart_Payload_Interface,
    add_To_Cart_API,
    select_Cart_ID
} from "../../../../../appStore/Reducers/cart_order_Slice";
import {Store} from "../../../../../appStore/interfaces_Slice/product_Related_Interfaces";


interface Add_Favorite_Details_Props {
    comp_Height: number,
    t_Width: number,
    product_Id: string,

    quantity: number,
    add_Button_Pressed_State: boolean,

}




const Add_Favorite_Details_Btn: React.FC<Add_Favorite_Details_Props> = (
    {
        comp_Height,
        t_Width,
        product_Id,
        quantity,
        add_Button_Pressed_State
    }
) => {

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


    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);

    const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);

    const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);
    const product_Store_ID: string = useAppSelector(select_Store_ID);
    const city_ID: string = useAppSelector(select_City_ID);
    const country_ID: string = useAppSelector(select_Country_ID);

    const cart_ID: string = useAppSelector(select_Cart_ID);

    const unique_Cart_ID  = useAppSelector(export_Unique_Cart_ID);

    const store_Data:Store = useAppSelector(select_Store_Data);


    const dispatch = useAppDispatch();


    const abc = () => {

        console.log("abc pressed");
    };


    const add_To_Cart_Pressed = () => {


        console.log("dispatch(add_To_Cart_Pressed pressed)");

        // set_Add_Button_Pressed_State(true);

        dispatch(update_single_Product_Add_Btn_Pressed_State(true));



    };


    const increment_button_Pressed = ()=>{

        // console.log("__increment_button_Pressed__");
        // set_value_State(value_State + 1);


        const increment_Payload:increment_Decrement_Single_Item_Payload_Interface={
            quantity_Single_Product: 1+ quantity, // not used...
            product_ID: product_Id,
        };






        dispatch(increment_Single_Product_For_Details_Page(increment_Payload));






        const payload:add_Item_To_Cart_Payload_Interface = {


            items: local_Cart,//local_Ca
            total_Price: local_Cart_Price,


            // always null, may be the business logic is as such

            server_token: null,
            user_id: null,  // localStorage.user._id,

            /*
            server_token: (localStorage.user.server_token==="")?null:localStorage.user.server_token,
            user_id: (localStorage.user._id==="")?null:localStorage.user._id,  // localStorage.user._id,
            */
            user_type_id: null,


            store_id: product_Store_ID,//params_data.item.store_id,
            cart_id: cart_ID,//cart_id ? cart_id : null,
            city_ID: city_ID,/// params_data.city._id,
            country_ID: country_ID,// params_data.country._id,
            cart_unique_token: unique_Cart_ID,//getUniqCartId(),

            /*
            store_details,
            product_details,
            city,
            country,

            */
            // q: q
            quantity: quantity,


            // user_details, or customer details ---
            country_phone_code: localStorage.user.country_phone_code,
            email: localStorage.user.email,
            name: localStorage.user.first_name + localStorage.user.last_name,
            phone: localStorage.user.phone,

            // store_details: store_Data,


            store_Address: store_Data.address,//string,
            store_City_ID: store_Data.city_id,
            store_Location: [store_Data.location[0],store_Data.location[1]],//number[],
            store_address_Note: "",//store_Data.

            store_User_details_Name : store_Data.name,//string,
            store_User_details_Country : store_Data.country_phone_code, //string,
            store_User_details_Phone : store_Data.phone,
            store_User_details_Email: store_Data.email,

        };

        // console.log("__add_To_Cart_API__", JSON.stringify(payload));


        dispatch(add_To_Cart_API(payload));


    };

    const decrement_button_Pressed = ()=> {

        console.log("__decrement_button_Pressed__");
        // set_value_State(value_State-1);

        if (quantity === 0) {

            // dispatch(diable_Btn_Pressed_State_In_Home_Page_0(index));

            dispatch(update_single_Product_Add_Btn_Pressed_State(false));
            return;
        }


        const decrement_Payload: increment_Decrement_Single_Item_Payload_Interface={
            quantity_Single_Product: quantity-1, //used
            product_ID: product_Id,
        };

        dispatch(decrement_Single_Product_For_Details_Page(decrement_Payload));


        /*if(value_State===1){
            dispatch(increment_Single_Product(value_State));
            // set_Add_Button_Pressed_State(false);
        }*/
    };



    const box_Height= comp_Height;
    const heart_Width= t_Width/5;
    const add_Width = t_Width -(heart_Width);

    return (
        <View
            style={{
                // flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // paddingHorizontal: 4,
                height: comp_Height,
                width: t_Width,
                // borderColor: ukbd_red,
                // backgroundColor: 'blue',
            }}
        >


            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: comp_Height,
                    alignItems: 'flex-end',
                    // backgroundColor: 'tomato',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: ukbd_red,
                        borderWidth: hairlineWidth,//1,
                        // flex: 2,
                        justifyContent: 'flex-end',
                        height: box_Height,
                        // backgroundColor: 'teal',


                    }}

                >

                    {
                        !add_Button_Pressed_State?(
                            <Pressable

                                onPressOut={add_To_Cart_Pressed}

                                style={({pressed}) => [
                                    {

                                        backgroundColor: pressed ? ukbd_red : 'transparent',
                                        justifyContent: 'center',
                                        width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        height: box_Height,



                                    }]}
                            >
                                {({pressed}) => (
                                    <View style={{
                                        // backgroundColor: pressed ? ukbd_red : 'transparent',
                                        justifyContent: 'center',
                                        width: '100%',//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>


                                        <SimpleLineIcons
                                            name={"bag"}
                                            size={box_Height/2}
                                            color={pressed ? 'white' : ukbd_red} //"red"
                                            style={{
                                                //paddingHorizontal: 4,
                                                fontWeight: '100',
                                                paddingRight: 5,

                                            }}

                                        />


                                        <Text
                                            style={{
                                                //color: ukbd_red,//ukbd_navy_blue,
                                                // color: {pressed? 'white'
                                                //         : ukbd_red
                                                // },
                                                // color: {pressed ? ukbd_navy_blue : ukbd_red},
                                                color: (pressed?'white':ukbd_red),
                                                fontSize: 18,
                                                // lineHeight: 14,
                                                fontWeight: (pressed?'400':"300"),
                                                fontFamily: "RobotoCondensed-Regular",
                                                textAlign: "left",

                                            }}>ADD</Text>


                                    </View>
                                )}
                            </Pressable>
                        ):(
                            <View

                                style={{
                                    justifyContent: 'center',
                                    width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: ukbd_red,
                                }}
                            >

                                <Decrement_Btn
                                    comp_Height_2= {box_Height}
                                    btn_Pressed= {decrement_button_Pressed}
                                    comp_Width= {40}
                                    icon_Color= {'white'}
                                />




                                <View

                                    style={{
                                        justifyContent: 'center',
                                        width: add_Width -(40 +40),//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: ukbd_red,
                                    }}>

                                    <Text
                                        style={{
                                            //color: ukbd_red,//ukbd_navy_blue,
                                            // color: {pressed? 'white'
                                            //         : ukbd_red
                                            // },
                                            // color: {pressed ? ukbd_navy_blue : ukbd_red},
                                            color: 'white',
                                            fontSize: 18,
                                            // lineHeight: 14,
                                            // fontWeight: (pressed?'400':"300"),
                                            fontFamily: "RobotoCondensed-Regular",
                                            textAlign: "left",

                                        }}>{quantity}</Text>


                                </View>



                                <Increment_Button
                                    comp_Height_2= {box_Height}
                                    btn_Pressed= {increment_button_Pressed}
                                    comp_Width= {40}
                                    icon_Color= {'white'}
                                />



                            </View>

                        )


                    }

                    {/*80 % ends here*/}


                    {/*20% begins here*/}

                    <Love_Button
                        comp_Height_2= {box_Height}
                        heart_Pressed= {abc}
                        comp_Width ={heart_Width}
                    />

                    {/*20% ends here*/}

                </View>


            </View>


        </View>

    );
};

export default Add_Favorite_Details_Btn;

