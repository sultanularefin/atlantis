import React, {useState} from "react";
import {
    Pressable, StyleSheet,
    Text,
    View
} from "react-native";

/*import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light,
    ukbd_Text_Navy_Blue_color
} from "../../../../ui_Utils/important_Colors";*/
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

// import {useAppDispatch, useAppSelector} from "../../../../../appStore/app/hooks";
import hairlineWidth = StyleSheet.hairlineWidth;


/*import {
    decrement_Item_From_Home,

    increment_Decrement_Single_Item_Payload_Interface,
    update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State,
    increment_Item_From_Home,
    update_single_Product_Add_Btn_Pressed_State,
    disable_Btn_Pressed_State_In_Home_Page_0,
    // add_To_Cart_API,
    // add_Item_To_Cart_Payload_Interface,
    local_Cart_Item,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    select_Store_ID,
    select_City_ID,
    select_Country_ID,
    export_Unique_Cart_ID, select_Store_Data,
    // diable_Btn_Pressed_State_In_Home_Page_0
} from "../../../../../appStore/Reducers/product_Slice";*/
import Decrement_Btn_Home_Page from "./Decrement_Btn_Home_Page";
import Increment_Button_Home_Page from "./Increment_Button_Home_Page";
import Love_Button_Home_Page from "./Love_Button_Home_Page";
// import {Store} from "../../../../../appStore/interfaces_Slice/product_Related_Interfaces";
// import {get_Detail_By_User_ID_server_Token} from "../../../../../appStore/interfaces_Slice/user_Related_Interfaces";
// import {select_Logger_Data_BY_ID} from "../../../../../appStore/Reducers/authSlice";
/*import {
    add_Item_To_Cart_Payload_Interface,
    add_To_Cart_API,
    select_Cart_ID
} from "../../../../../appStore/Reducers/cart_order_Slice";*/
import {useAppDispatch, useAppSelector} from "../../../../../lib/app/hooks.ts";
import {
    decrement_Item_From_Home,
    disable_Btn_Pressed_State_In_Home_Page_0,
    increment_Item_From_Home,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit,
    update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State
} from "../../../../../lib/features/products/productSlice.ts";
import {local_Cart_Item} from "../../../../../interfaces/products/product.ts";
import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light,
    ukbd_Text_Navy_Blue_color
} from "../../../../ui_utils/important_Colors.ts";


interface Add_Cart_OR_Favorite__Btn_Home_Page {
    t_Height: number,//string,//number,
    t_Width: number,//string,//string,
    product_Id: number,//string,

    index: number,

    quantity: number,
    add_Button_Pressed_State: boolean,
    bg_Color: string,

}


const Add_Cart_OR_Favorite__Btn_Home_Page: React.FC<Add_Cart_OR_Favorite__Btn_Home_Page> = (
    {
        t_Height,
        t_Width,
        product_Id,
        index,
        quantity,
        add_Button_Pressed_State,
        bg_Color,
    }
) => {


    const dispatch = useAppDispatch();


    const abc = () => {

        console.log("abc pressed");
    };


    const add_To_Cart_Pressed = () => {


        console.log("dispatch(add_To_Cart_Pressed pressed For Item in Home)");


       /* const decrement_Payload: increment_Decrement_Single_Item_Payload_Interface = {
            quantity_Single_Product: quantity - 1, //used
            product_ID: product_Id,
        };
        const

        */

        if (!add_Button_Pressed_State) {

            // set_add_Button_Pressed_State_State(true);

            // 999
            dispatch(update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State(index));

        }

        else{
            console.log("__at ___Else___add_To_Cart_Pressed");
            return;
        }

      /*  else if(add_Button_Pressed_State){

            console.log


        }*/





    };

    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);

    const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);

    // const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);
    // const product_Store_ID: string = useAppSelector(select_Store_ID);
    // const city_ID: string = useAppSelector(select_City_ID);
    // const country_ID: string = useAppSelector(select_Country_ID);

    // const cart_ID: string = useAppSelector(select_Cart_ID);

    // const unique_Cart_ID  = useAppSelector(export_Unique_Cart_ID);

    // const store_Data:Store = useAppSelector(select_Store_Data);



    const increment_button_Pressed = () => {

        // console.log("__increment_button_Pressed__");
        // set_value_State(value_State + 1);
        // console.log("increment_button_Pressed pressed For Item in Home)");


        // return;

        /*
        const increment_Payload: increment_Decrement_Single_Item_Payload_Interface = {
            quantity_Single_Product: 1 + quantity, // not used...
            product_ID: product_Id,
        };
        */

        dispatch(increment_Item_From_Home(index));


       /* const payload:add_Item_To_Cart_Payload_Interface= {


            items: local_Cart,//local_Ca
            total_Price: local_Cart_Price,


            // always null, may be the business logic is as such

            server_token: null,
            user_id: null,  // localStorage.user._id,

            /!*
            server_token: (localStorage.user.server_token==="")?null:localStorage.user.server_token,
            user_id: (localStorage.user._id==="")?null:localStorage.user._id,  // localStorage.user._id,
            *!/



            cart_id: (cart_ID==="")?null:cart_ID, //cart_ID,//cart_id ? cart_id : null,
            user_type_id: null,

            store_id: product_Store_ID,//params_data.item.store_id,

            city_ID: city_ID,/// params_data.city._id,
            country_ID: country_ID,// params_data.country._id,
            cart_unique_token: unique_Cart_ID,//getUniqCartId(),



            /!*
            cart_id: null|string,//cart_id ? cart_id : null,
            server_token: null|string,
            user_id: null|string,

            user_type_id: null| number,

            *!/
            /!*
            store_details,
            product_details,
            city,
            country,

            *!/
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


        console.log("__unique_Cart_ID__: ",unique_Cart_ID);

        dispatch(add_To_Cart_API(payload));

        return;*/

    };

    const decrement_button_Pressed = () => {
        // console.log("__decrement_button_Pressed__ pressed For Item in Home)");


        // return;
        // set_value_State(value_State-1);


        /*
        const decrement_Payload: increment_Decrement_Single_Item_Payload_Interface = {
            quantity_Single_Product: quantity - 1, //used
            product_ID: product_Id,
        };
        */

        if (quantity === 0) {

            // dispatch(diable_Btn_Pressed_State_In_Home_Page_0(index));

            dispatch(disable_Btn_Pressed_State_In_Home_Page_0(index));
            return;
        }
        else{
            dispatch(decrement_Item_From_Home(index));
            return;
        }






    };


    const box_Height = t_Height;//t_Width/4;
    const heart_Width = t_Height;//t_Width / 5;
    const add_Width = t_Width - (heart_Width);

    return (

        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: t_Height,
                width: t_Width,
                // backgroundColor: 'gold',//bg_Color,
            }}>
            <View
                style={{
                    // flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    // paddingHorizontal: 4,
                    height: t_Height,
                    width: t_Width,
                    // borderColor: ukbd_red,
                    // backgroundColor: 'blue',
                }}
            >


                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: t_Height,
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
                            !add_Button_Pressed_State ? (
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
                                                size={box_Height / 2}
                                                // size={'5%'}
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
                                                    color: (pressed ? 'white' : ukbd_red),
                                                    fontSize: 18,
                                                    // lineHeight: 14,
                                                    fontWeight: (pressed ? '400' : "300"),
                                                    fontFamily: "RobotoCondensed-Regular",
                                                    textAlign: "left",

                                                }}>ADD</Text>


                                        </View>
                                    )}
                                </Pressable>
                            ) : (
                                <View

                                    style={{
                                        justifyContent: 'center',
                                        width: add_Width,//t_Width - 30,//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: ukbd_red,
                                    }}
                                >

                                    <Decrement_Btn_Home_Page
                                        comp_Height_2={box_Height}
                                        btn_Pressed={decrement_button_Pressed}
                                        comp_Width={40}
                                        icon_Color={'white'}
                                    />


                                    <View

                                        style={{
                                            justifyContent: 'center',
                                            width: add_Width - (40 + 40),//(t_Width / 2.8),//( (t_Width/2)-(t_Height /35)),//'80%',
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


                                    <Increment_Button_Home_Page
                                        comp_Height_2={box_Height}
                                        btn_Pressed={increment_button_Pressed}
                                        comp_Width={40}
                                        icon_Color={'white'}
                                    />


                                </View>

                            )


                        }

                        {/*80 % ends here*/}


                        {/*20% begins here*/}

                        <Love_Button_Home_Page
                            comp_Height_2={box_Height}
                            heart_Pressed={abc}
                            comp_Width={heart_Width}
                        />

                        {/*20% ends here*/}

                    </View>


                </View>


            </View>
        </View>
    );
};

export default Add_Cart_OR_Favorite__Btn_Home_Page;

