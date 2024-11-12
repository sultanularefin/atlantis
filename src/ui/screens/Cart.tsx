import React, {useCallback, useRef, useState} from "react";
import {
    View,
    SafeAreaView,

    StyleSheet,

    useWindowDimensions,
    RefreshControl,

    FlatList,
    StatusBar,
    Text,
    StatusBarStyle,
    VirtualizedList,
    ScrollView, Pressable, AppState,
    // ActivityIndicatorComponent
} from "react-native";


// import Header_DashBoard_Home from "../../headers/Header_DashBoard_Home";
// import { windowWidth } from "../ui_utils/Dimensions";


// import {Doc, home_API_Root_Object_Interface} from "../../../appStore/interfaces_Slice/product_Related_Interfaces";


// import NetInfo, {useNetInfo} from "@react-native-community/netinfo";

import Snackbar from 'react-native-snackbar';
import {useFocusEffect} from "@react-navigation/native";



import hairlineWidth = StyleSheet.hairlineWidth;

import Header_DashBoard_Home from "../header/Header_DashBoard_Home.tsx";
import {useAppDispatch, useAppSelector} from "../../lib/app/hooks.ts";
import One_Cart_Item from "../comps/cart_comps/One_Cart_Item.tsx";
import {get_Detail_By_User_ID_server_Token} from "../../interfaces/user/user_data.ts";
import {select_Logger_Data_BY_ID} from "../../lib/features/auth/auth_Slice.ts";
import {monetary_Unit_Interface} from "../ui_utils/localization_utils.ts";
import {ukbd_navy_blue} from "../ui_utils/important_Colors.ts";
import No_More_Items from "../comps/No_More_Items.tsx";
import List_Empty_Comp from "../comps/List_Empty_Comp.tsx";
import Header_Shopping_Cart_Page from "../header/Header_Shopping_Cart_Page.tsx";
import Cart_Tab_First_Column from "../comps/cart_comps/tab_Comp/Cart_Tab_First_Column.tsx";
import Cart_Tab_Second_Column from "../comps/cart_comps/tab_Comp/Cart_Tab_Second_Column.tsx";
import Order_Summary_Cart from "../comps/cart_comps/Order_Summary_Cart.tsx";
import Indicator_Common from "../indicator/Indicator_Common.tsx";
import {
    populate_Cart_Data_to_realm,
    select_Local_Cart,
    select_Local_Cart_Price_Localized_Monetary_Unit, select_Shipped_From_State_Or_Delivery_Currency
} from "../../lib/features/products/product_Slice.ts";
import {local_Cart_Item} from "../../interfaces/products/product.ts";


const product_2 = require('../../../assets/images/p2.jpg');


export interface Cart_Props {

    navigation: any,
}


const Cart: React.FC<Cart_Props> = ({
                                        navigation,
                                    }) => {

    // const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);
    const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);


    console.log("at Cart");


    const dispatch = useAppDispatch();





    const [masterLoadingState, setMasterLoadingState] = useState(false);
    const appState = useRef(AppState.currentState);

    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;




    // status bar related comps  ---begins here
    const STYLES = ['default', 'dark-content', 'light-content'] as const;
    const TRANSITIONS = ['fade', 'slide', 'none'] as const;
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[2],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
        'fade' | 'slide' | 'none'
    >(TRANSITIONS[0]);




    // status bar related comps ---- ends here
    const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);

    // export const select_Local_Cart = (state: RootState) => state.product_Reducer.local_Cart_Array;

    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);
    // console.log("__all_Home_State_Data__: ",JSON.stringify(all_Home_State_Data));


    const inner_Comp_Width = (displayWidth * 0.94);
    const inner_Width_withIN_Box = displayWidth * 0.85;

    const Home_State_Delivery_Currency: monetary_Unit_Interface = useAppSelector(select_Shipped_From_State_Or_Delivery_Currency);

    // const local_Monetary_Unit = useAppSelector(select_Local_Currency);
    // const With_Commas = (local_Monetary_Unit.Currency_Code === "BDT");
    const order_Summary_Inner_Comp_Width = inner_Comp_Width - 40;//(displayWidth * 0.85);
    const tab_Height = (displayHeight / 4.5);
    const tabs_Pressable_Part_Height= displayHeight / 17;


    const item_Sperator_Component = () => (


        <View style={{
            backgroundColor: ukbd_navy_blue,//  ukbd_red,
            height: 0.5,// hairlineWidth,//4,
            width: "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            // borderRadius: 40,
        }}>


        </View>
    );


 /*   const listEmpty = () => (


        <List_Empty__Search_Activity_Member_Comments
            t_Height={displayHeight/5}

            content_String={`No Cart Item Selected !`}
            t_width={displayWidth}
            justify_main_axis_center={true}
        />
    );
*/


    const listEmpty = () => {
        return (
            <List_Empty_Comp
                t_Height={displayHeight}
                content_first={'No '}
                content_last={' Selected !.'}
                content_high_light={'Cart Item'}
                t_width={displayWidth}
            />
        );
        // partner_name
    };

    const app_State_Change_Cart_Page = AppState.addEventListener("change", /*async*/ (nextAppState) => {

        console.log("at here____AppState changed___AT_               [[[ connect ]]]");


        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            console.log('App has come to the foreground!');
            console.log("load from realm");
        }

        else{

            // console.log("populate_Cart_Data_to_realm");
            dispatch(populate_Cart_Data_to_realm(null));
        }


        /*



        const userID_image_payLoad_data: userID_image_for_offline_usage_interface = {

            userID: localStorage.userID,
            userImage: localStorage.userImageURI,
        };

        // console.log("--------------------------------  app state change in Connect Tripz Later page's app_State_Change_Cart_Page ");

        await dispatch(populate_FeedzData_to_realm(userID_image_payLoad_data));
        // await dispatch(dispatch_Save_Connect_Now_Data_to_realm_before_close(null));
        await dispatch(Save_Connect_Now_Data_to_realm_before_close(null));
        await dispatch(populate_Connect_Later_Data_to_Realm(null));

        */

        // dispatch(check_Internet_State_Again(null)); // added for test,, after some time offline red offline shows, added for remidy.jan_23_2022.

    });
 /*   useFocusEffect(
        useCallback(() => {


            const f1 = ()=>{


                dispatch(get_Unique_Cart_ID(true));
            };


            f1();
            // get_Data_Initially_Prod();


            return () => {
                // backHandler.remove();
                app_State_Change_Cart_Page.remove();
            };


        }, [
            // localStorage.user.favourite_addresses
        ]),
    );*/


    const List_Footer_Component = () => {
        if (local_Cart?.length === 0) {
            return null;
        } else {
            return (
                <No_More_Items
                    first_String={'No More '}
                    last_String={' Found.'}
                    highlighted_String={'Cart Items'}
                    // content_Text={'No More Tripz Later found.'}
                />
            );
        }
    };








    const header_Height= displayHeight / 15;
    const VList_Height= displayHeight-(header_Height +100);
    return (

        <SafeAreaView
            style={
                // styles.container,
                {
                    flex: 10,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: 'white',
                    height: displayHeight,

                }
            }
        >


            <View style={{
                height: header_Height,
                flexDirection: "column",
                justifyContent: "flex-start",
            }

            }
            >

                <Header_DashBoard_Home
                    comp_Height={header_Height}

                    nav={navigation}
                    comp_Width={displayWidth}
                    // exchang_Rage={exchange_Rate}
                />
            </View>





            {/*Cart V list begins here*/}

            <View


                style={{
                    flexDirection: "column",

                    justifyContent: "flex-start",
                    alignItems: 'center',
                    alignSelf: 'center',
                    // borderStyle: 'dashed', //'dotted',//'dashed',
                    borderBottomColor: ukbd_navy_blue,
                    borderBottomWidth: hairlineWidth,// 0.6,//hairlineWidth,
                    // backgroundColor: 'aliceblue',

                    width: inner_Comp_Width,
                    height: VList_Height,

                }

                }

            >


                <VirtualizedList
                    style={{


                    }}

                    contentContainerStyle={{
                        height: VList_Height,//displayHeight * 1.6,//displayHeight,//400,//
                        justifyContent: 'flex-start',//'space-between',
                        paddingBottom: 20,
                        width: inner_Comp_Width,
                    }}


                    getItemCount={(data) => data.length}
                    getItem={(data2, index11) => {
                        const item = data2[index11];
                        return {
                            ...item,
                        };
                    }}

                    showsVerticalScrollIndicator={false}



                    keyExtractor={(item: local_Cart_Item, index) => `${index}${item.product_ID}${item.product_Index}`}

                    // required ends here___

                    data={local_Cart}

                    renderItem={({
                                     item,
                                     // item:one_Product__interface,
                                     index,
                                 }) => (

                        <One_Cart_Item

                            one_Cart={item}
                            index={index}


                            comp_Width_2={inner_Comp_Width}
                            comp_Height_2={displayHeight / 8}
                            navigation_Atribute={navigation}
                            delivery_Currency_Sign={Home_State_Delivery_Currency.text}

                        />

                    )}


                    /*
                    columnWrapperStyle={{
                        borderWidth: 3,//hairlineWidth,
                        borderColor: 'cyan',
                        height: displayHeight/2.4,

                    }}
                    */


                    indicatorStyle={"black"}
                    horizontal={false}
                    onEndReachedThreshold={1}
                    /* onEndReached = { ({ distanceFromEnd }) => {
                         if (distanceFromEnd) {
                             if(sizeOFTotal_Feedz <= 2)
                             {
                                 return;
                             } else {
                                 loadMoreTEN();
                             }

                         }
                     }}*/


                    // initialNumToRender={2} // default 10
                    removeClippedSubviews={false} // default false
                    // windowSize={3} // default 21
                    ListEmptyComponent={listEmpty}
                    ListFooterComponent={List_Footer_Component}
                    // ListHeaderComponent={Cart_Header}
                    // ListFooterComponent={Tabs_And_Summary}

                    ItemSeparatorComponent={item_Sperator_Component}


                    /*
                    ListFooterComponentStyle={{
                        justifyContent: 'flex-end',
                        // backgroundColor: 'red',

                    }}
                    */

                    /* refreshControl={
                         <RefreshControl
                             refreshing={refreshingState}
                             onRefresh={onRefresh}
                         />
                     }*/
                />

            </View>

        </SafeAreaView>


    );
};


export default Cart;


export const Cart_Style_Root = StyleSheet.create({

});
