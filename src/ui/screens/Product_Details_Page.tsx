import React, {
    useCallback,
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    StatusBarStyle,
    useWindowDimensions,
    ActivityIndicator,
    Image,
    Pressable, Platform,
} from "react-native";


import {RouteProp, useFocusEffect} from "@react-navigation/native";


/*import {
    select_Logger_Data_BY_ID,
    UKBD_App_Login_Response_With_Password
} from "../../../lib/Reducers/authSlice";


import {useAppDispatch, useAppSelector} from "../../../lib/app/hooks";*/


const master_img = require('../../assets/pay/masterCard.png');
const visa_img = require('../../assets/pay/visa.png');
const bkash_img = require('../../assets/pay/bkash.webp');
const nagad_img = require('../../assets/pay/NagadLogo.webp');
const american_exp_img = require('../../assets/pay/Amex.webp');
const cod_img = require('../../assets/pay/COD.webp');


/*import {
    export_Single_Product_Details,
    get_One_Product_Payload__Interface,
    get_single_item_Async,
    local_Cart_Item,
    populateTag_data_for_multiple_Images,
    // select_Delivery_Currency_Code,
    select_Exchange_Rate,
    select_Local_Cart, select_Local_Currency,
    select_product_Detail_Tab_Index, select_Shipped_From_State_Or_Delivery_Currency,
    single_Product_Item_Root_Interface,
    update_single_Product_Add_Btn_Pressed_State,
    update_single_Product_Quantity
} from "../../../lib/Reducers/product_Slice";*/


import {NativeStackScreenProps} from "@react-navigation/native-stack";
/*
import {Native_Root_Stack_ParamList} from "../../../App";
import {base_Image_URL} from "../../../utils_server/server_settings";
import FastImage from "react-native-fast-image";
import {ukbd_navy_blue, ukbd_red, ukbd_red_light} from "../../ui_utils/important_Colors";
*/

/*import {
    monetary_Unit_Interface,
    MonetaryUnits,
    previousPrice,
    priceConvertToAlternate
} from "../../ui_utils/localization_utils";*/


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
// import {favorite_Button_Styles} from "../../components/item/Item";
// import Add_Favorite_Details_Btn from "./details_page/add_button/Add_Favorite_Details_Btn";

/*import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Horizontal_First_Top_Tabs from "../details_page/Horizontal_First_Top_Tabs";
import Horizontal_Second_and_Last_Tab_View from "../details_page/Horizontal_Second_and_Last_Tab_View";
import {get_Detail_By_User_ID_server_Token} from "../../../lib/interfaces_Slice/user_Related_Interfaces";
import Header_Product_Details_Page from "../../headers/Header_Product_Details_Page";
import Add_Favorite_Details_Btn from "../details_page/add_button/details_Page/Add_Favorite_Details_Btn";
import WAS_Value from "../../components/item/WAS_Value";
import Ten_15_Days_Home from "../../components/item/Ten_15_Days_Home";
import Detail_Page_Image_VList_Comp from "../details_page/image_part/Detail_Page_Image_VList_Comp";*/
import hairlineWidth = StyleSheet.hairlineWidth;
import {Native_Root_Stack_ParamList} from "../../App.tsx";
import {useAppDispatch, useAppSelector} from "../../lib/app/hooks.ts";
import {
    get_One_Product_Payload__Interface, One_Product_Item_For_Detail_Interface,
    // One_Product_for_Home_Page_Interface
} from "../../interfaces/products/product.ts";
import {
    export_Single_Product_Details, populateTag_data_for_multiple_Images,
    select_Shipped_From_State_Or_Delivery_Currency
} from "../../lib/features/products/productSlice.ts";
import {useGetOneProductQuery, useGetProductsQuery} from "../../lib/features/products/productsApiSlice.ts";
import {
    monetary_Unit_Interface,
    MonetaryUnits,
    previousPrice,
    priceConvertToAlternate
} from "../ui_utils/localization_utils.ts";
import {
    ukbd_navy_blue,
    ukbd_red,
    ukbd_red_light
} from "../ui_utils/important_Colors.ts";
import Header_Product_Details_Page from "../header/Header_Product_Details_Page.tsx";
import {image_base_url} from "../../config/Config.ts";
import Image_Pre_Fetch_1 from "../ui_utils/Image_Pre_Fetch_1.tsx";
import Add_Favorite_Details_Btn from "./details_page/add_button/details_Page/Add_Favorite_Details_Btn.tsx";

import Detail_Page_Image_VList_Comp from "./details_page/image_part/Detail_Page_Image_VList_Comp.tsx";

import Ten_15_Days_Home from "../home_comp/Ten_15_Days_Home.tsx";
import Vertical_Divider_Full_Width_Active_Order from "../../divider/Vertical_Divider_Full_Width_Active_Order.tsx";




const Product_Details_Page = ({
                                  navigation,
                                  route,
                              }: NativeStackScreenProps<Native_Root_Stack_ParamList, 'Product_Details_Page'>) => {





    const [isPopupTrue_State, set_IsPopupTrue_State] = useState<boolean>(false);


    const single_Product_Detail: One_Product_Item_For_Detail_Interface = useAppSelector(export_Single_Product_Details);


    // console.log("__<<single_Product_Detail>>: ",single_Product_Detail);


    const dispatch = useAppDispatch();


    // redux related codes begins here
    // const localStorage: get_Detail_By_User_ID_server_Token = useAppSelector(select_Logger_Data_BY_ID);

    // const selected_Tab_Product_Detail_Page_State: number = useAppSelector(select_product_Detail_Tab_Index);


    // console.log("__selected_Tab_Product_Detail_Page_State_ :>> >> ",selected_Tab_Product_Detail_Page_State);


    // const [selected_Tab_Product_Detail_Page_State,setSelected_Tab_Product_Detail_Page_State]= useState<number>(0);

    /*const update_Selected_Tab=(some_index: number)=>{


        setSelected_Tab_Product_Detail_Page_State(some_index);

    };*/


    const abc = () => {

        console.log("---abc___");

    };
    // redux related codes ends here









        const {
            data: detail_of_product,
            isLoading: is_detail_of_product_Loading,
            isError: detail_of_product_load_Error,
        } = useGetOneProductQuery(
            {
                product_Id: Number(route.params.single_Product_ID),
                btn_Pressed_State: route.params.add_Button_Pressed_State,
                prev_Quantity: route.params.add_Button_Pressed_State?route.params.quantity:0,
            });



        console.log("detail_of_product: ",detail_of_product);
        console.log("is_detail_of_product_Loading: ",is_detail_of_product_Loading);
        console.log("detail_of_product_load_Error: ",detail_of_product_load_Error);


    /*useFocusEffect(
        useCallback(() => {




            main_F1();


        }, [
            // route.params.single_Product_ID,
        ]),
    );*/


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


    // const local_Cart: local_Cart_Item[] = useAppSelector(select_Local_Cart);
    // find by id

   /* const is_Item_Added_To_Cart_Previously = local_Cart.findIndex((one_Product: local_Cart_Item) =>
        one_Product.id === route.params.single_Product_ID);*/


    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;


    const payICon_Size = displayHeight / 29;
    const Home_State_Delivery_Currency: monetary_Unit_Interface = useAppSelector(select_Shipped_From_State_Or_Delivery_Currency);
    // const local_Currency: monetary_Unit_Interface = useAppSelector(select_Local_Currency);


    // const Home_State_Delivery_Currency_Code: string = useAppSelector(select_Delivery_Currency_Code);
    // const exchange_Rate: number = useAppSelector(select_Exchange_Rate);


    const product_Wish_Button_Pressed = (/*productID: string*/) => {

        return;


    };

    // console.log("displayWidth: ", displayWidth);

    const inner_Width = displayWidth * 0.94;

    const inner_Width_withIN_Box = displayWidth * 0.85;
    const image_Container_Height = (displayHeight / 6);

    // console.log("inner_Width: ", inner_Width);
    // console.log("inner_Width_withIN_Box:", inner_Width_withIN_Box);


    const img_width= displayWidth / 7;

    const single_Image_pressed = () => {


        console.log("__single_Product_Detail.item.image_url__:", single_Product_Detail.image);

        // return;


        dispatch(populateTag_data_for_multiple_Images(
            {

                //__single_Product_Detail.item.image_url__: ["store_items/634e9e1b72205ac7b909a273IvsW.jpg"]
                // uri: `${base_Image_URL}${single_Product_Detail.item.image_url[0]}`,
                // some_uris: single_Product_Detail.item.image_url[0],
                some_uris: single_Product_Detail.image,
                //imgsOFThisFeed,//props.all_images_string,//props.imgsOFThisFeed,
                tapIndex: 0,//1,//idx,//props.idx,
                title: single_Product_Detail.title.toString(),//content,//props.content,
                //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021

            },
        ));
        return navigation.navigate('MultipleImageHeaderNull');
    };


    // render() {

    // console.log("__single_Product_Detail.item.image_url.length__: ", single_Product_Detail.item.image_url.length);
    return (


        <SafeAreaView
            style={{
                flex: 10,
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: 'white',

            }}

        >

            <StatusBar
                animated={true}
                backgroundColor={ukbd_navy_blue}
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />

            {/* <View style={{
                // flex: 0.6,
                height: displayHeight / 15,
                flexDirection: "column",
                justifyContent: "flex-start",
                borderStyle: "solid", //'dashed', //'dotted',//'dashed',
                borderBottomColor: ukbd_navy_blue,
                borderBottomWidth: 0.6,//hairlineWidth,
            }

            }
            >


                <Header_DashBoard_Home
                    comp_Height={displayHeight / 15}

                    nav={navigation}
                />


            </View>
            */}


            <Header_Product_Details_Page
                nav={navigation}
                comp_Height={displayHeight / 18}
                comp_Width={inner_Width}
                header_Title={""}
                Z_Index={102}
            />


            <View style={{
                flex: 9,//9,//9.4,
                backgroundColor: "#FFF"
            }}>


                <View style={{

                    width: inner_Width,//'100%',//total_Width / 2.5,//'100%',
                    height: image_Container_Height,//displayHeight / 6, //'100%',
                    marginVertical: 5,
                    // backgroundColor: 'deepskyblue',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}>


                    {
                        (!single_Product_Detail.image)
                            ? null : ((single_Product_Detail.image.length === 1) && (single_Product_Detail.image[0] !== ""))
                                ? (
                                    <Pressable
                                        style={{


                                            height: image_Container_Height,
                                            width: inner_Width,
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',

                                        }}

                                        onPress={single_Image_pressed}


                                    >
                                        <Image
                                            style={{


                                                // width: '70%',//total_Width / 2.5,//'100%',
                                                // height: '80%', //'100%',
                                                width: '100%',// displayWidth/5,//'100%',//total_Width / 2.5,//'100%',
                                                height: '100%',// displayWidth/5,//'100%', //'100%',


                                                //height: ((props.displayWidth - 43) / 2), // -6 for border color padding
                                                //width: ((props.displayWidth -  43) / 2),  // -6 for border color padding

                                                // ...Product_Detail_Page_Styles.itemImg

                                            }}

                                            source={{
                                                uri: `${image_base_url}${single_Product_Detail.image[0]}`,
                                                //props.oneItem_url,
                                                // headers: { Authorization: 'someAuthToken' },
                                                // priority: FastImage.priority.normal,
                                            }}

                                            resizeMode={"contain"}
                                        />
                                    </Pressable>
                                ) : (single_Product_Detail.image.length > 1)
                                    ?


                                    (

                                        <Detail_Page_Image_VList_Comp
                                            imgsOFThisFeed={single_Product_Detail.image}
                                            // indexPrimary= {0}
                                            comp_Width={inner_Width}
                                            comp_Height={image_Container_Height} // marginVertical 5+5= 10
                                            navigationProp={navigation}
                                            feedContent={single_Product_Detail.title.toString()}
                                        />

                                    ) : null
                    }


                </View>

                <Vertical_Divider_Full_Width_Active_Order
                    compHeight={10}
                />


                <View style={{

                    // flex: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'flex-start',
                    // paddingRight: 10,
                    alignSelf: 'center',
                    alignContent: 'flex-end',

                    width: inner_Width,
                    // backgroundColor: 'blue',
                    height: (displayHeight / 13),


                }}>
                    <Text style={Product_Details_Page_Styles.title_}>{single_Product_Detail.title}</Text>

                </View>


                <Vertical_Divider_Full_Width_Active_Order
                    compHeight={10}
                />
                {/*boxed section begins here*/}
                <View
                    style={{

                        ...Product_Detail_Page_Styles.box_Outer_View,
                        width: inner_Width - 1,
                        // backgroundColor: ukbd_red_light,
                        // height: (displayHeight / 5), // HOW ==> 5 <= (displayHeight/10) * (displayHeight/30) *3
                        // padding: 10,
                        // (displayHeight / 10)  (displayHeight/30) *3
                        paddingTop: (inner_Width - inner_Width_withIN_Box) / 2,
                        paddingLeft: (inner_Width - inner_Width_withIN_Box) / 2,
                        paddingRight: (inner_Width - inner_Width_withIN_Box) / 2,
                        // paddingHorizontal: (inner_Width - inner_Width_withIN_Box),

                    }}

                >

                    <View
                        style={{
                            ...Product_Detail_Page_Styles.local_Price_Section,
                            height: (displayHeight / 30),
                            // backgroundColor: 'teal',
                            width: inner_Width_withIN_Box,
                        }}
                    >
                        <View style={{

                            flexDirection: 'row',
                            width: inner_Width_withIN_Box,//'100%',
                            justifyContent: 'space-between',
                            // backgroundColor: 'tomato',
                            height: (displayHeight / 30),

                        }}
                        >


                           {/* <WAS_Value
                                // comp_Width= {displayWidth / 2.7}
                                was_Val={previousPrice(
                                    single_Product_Detail.price,
                                    single_Product_Detail.item.offer_percentage
                                )}
                                monetary_Sign={MonetaryUnits[3].unicode}
                                bg_Color={'transparent'}
                            />*/}


                            {/*was strikethrough value value ends here*/}

                            {/*new value begins here */}
                            <View

                                style={{
                                    // backgroundColor: 'gold',
                                    width: inner_Width_withIN_Box / 2,//"40%",
                                    // paddingRight: '5%',
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "flex-end"


                                }}>

                                <Text
                                    style={{
                                        color: ukbd_navy_blue,// "#012965",
                                        fontSize: 20,
                                        fontWeight: '200',
                                        // fontWeight: "300",
                                        fontFamily: "RobotoCondensed-Regular",
                                        // textDecorationLine: "line-through"
                                    }}
                                >{MonetaryUnits[3].unicode} {single_Product_Detail.price}</Text>

                            </View>
                            {/*new value ends here*/}


                        </View>

                    </View>

                    {/*ukprice section begins here */}
                    <View
                        style={{

                            flexDirection: 'row',
                            width: inner_Width_withIN_Box,//'100%',
                            justifyContent: 'space-between',
                            // backgroundColor: 'blue',
                            height: (displayHeight / 30),
                            // backgroundColor: 'tomato',
                            // (displayHeight / 10) + 10 + (displayHeight/36) + (displayHeight/30))
                        }}
                    >
                        <View style={{
                            // backgroundColor: 'red',
                            width: "60%",
                            // paddingLeft: '5%',
                            flexDirection: "row",
                            // justifyContent: "flex-start",
                            alignItems: "center"
                        }}

                        >
                            <Ten_15_Days_Home
                                comp_Height_2={displayHeight / 40}
                                content={"9999"}

                                comp_Width={inner_Width_withIN_Box}

                                bg_Color=
                                    {'transparent'}

                                //{'tomato'}
                            />
                        </View>


                        <View

                            style={{
                                // backgroundColor: 'gold',
                                width: "40%",
                                // paddingRight: '5%',
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-end"


                            }}><Text style={{
                            color: ukbd_navy_blue,
                            // fontSize: 10,
                            fontSize: 20,
                            fontWeight: '200',
                            // fontWeight: "300",
                            fontFamily: "RobotoCondensed-Regular"
                        }}>
                            {MonetaryUnits[4].unicode} {priceConvertToAlternate(
                            single_Product_Detail.price,
                            Home_State_Delivery_Currency.Currency_Code,
                            1,
                            // "BDT",
                            // 0.0076,
                            // props.activeDelivery.exchange_rate_website

                            // curreny_Code,
                            // exchange_Rate,
                        )
                        }

                        </Text>

                        </View>
                        {/*uk price section ends here*/}
                    </View>


                    <View
                        style={{

                            flexDirection: 'column',
                            width: inner_Width_withIN_Box,//'100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            // backgroundColor: 'teal',

                            height: displayHeight / 30, // (displayHeight / 10) + 10 + (displayHeight/36))
                        }}
                    >
                        <Text style={{
                            color: ukbd_navy_blue,
                            // fontSize: 10,
                            fontSize: 12,
                            fontWeight: '400',
                            // fontWeight: "300",
                            fontFamily: "RobotoCondensed-Regular"
                        }}>
                            Incl. shipping, customs & Duties. Excl. VAT.
                        </Text>

                    </View>


                    {/*shipping text ends here*/}


                    {/*View Source begins here*/}


                    <View
                        style={{

                            flexDirection: 'column',
                            // width: inner_Width,
                            width: inner_Width_withIN_Box,//'100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            // backgroundColor: 'gold',
                            // height: displayHeight / 10, // // HEIGHT AUTO CALCULATE FORM CHILDREN'S HEIGHT.
                        }}
                    >


                        <View

                            style={{
                                flexDirection: 'row',
                                width: inner_Width_withIN_Box,//'100%',//'100%',
                                // marginTop: 10,
                                // backgroundColor: 'green',

                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>

                            {/*brand icon supplier icon begins here*/}
                            {/*1ST ROW ENDS HERE 40%, THIS 40% CONTAINS BRAND ICON(!) AND SUPPLIER ICON AND "SOURCE" TEXT*/}
                            {/*<View

                                style={{
                                    flexDirection: 'column',
                                    width: inner_Width_withIN_Box * 0.40,//'40%',//displayWidth * 0.40,//'50%',//'100%',
                                    // backgroundColor: 'violet',
                                    // height: displayHeight / 10, // // HEIGHT AUTO CALCULATE FORM CHILDREN'S HEIGHT.
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    // paddingLeft: 20,
                                }}
                            >

                                souce begins below
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        // width: displayWidth *0.40,
                                    }}>
                                    <Text style={{
                                        color: ukbd_navy_blue,
                                        // fontSize: 10,
                                        fontSize: 12,
                                        fontWeight: '400',
                                        // fontWeight: "300",
                                        fontFamily: "RobotoCondensed-Regular",
                                        textTransform: 'uppercase',

                                    }}>Source:</Text>

                                </View>

                                souce ends above

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        width: '40%',
                                        // width: displayWidth * 0.40,
                                    }}
                                >

                                    <View

                                        style={{
                                            flexDirection: 'row',
                                            width: '40%',
                                            // width: displayWidth * 0.40,//'50%',//'100%',
                                            // backgroundColor: 'tomato',
                                            // height: displayHeight / 20,
                                            justifyContent: 'flex-start',

                                        }}
                                    >

                                        {(single_Product_Detail.item.supplier_icon !== '') ? (<View style={{


                                                ...Product_Detail_Page_Styles.outer_supplier_brand_View_Style,
                                                width: displayWidth / 6,//displayWidth/6,//displayHeight/20,
                                                //height: displayWidth / 6,//displayHeight/20,
                                                // backgroundColor: 'red',


                                            }
                                            }><FastImage
                                                style={{

                                                    width: img_width,//displayWidth/6,//displayHeight/20,
                                                    height: img_width,//displayHeight/20,

                                                }
                                                }
                                                source={{
                                                    uri: `${image_base_url}${single_Product_Detail.item.supplier_icon}`,

                                                    priority: FastImage.priority.normal,
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}


                                            />

                                            </View>
                                        ) : null

                                        }
                                        supplier_icon above

                                        brand_icon below

                                        {(single_Product_Detail.item.brand_icon !== '') ? (<View style={{


                                                ...Product_Detail_Page_Styles.outer_supplier_brand_View_Style,


                                                width: displayWidth / 6,
                                                // height: displayWidth / 6, // HEIGHT:AUTO
                                                // backgroundColor: 'gold',


                                            }
                                            }>
                                                <View style={{
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    // paddingBottom: 10,
                                                }}>
                                                    <Text style={{
                                                        fontSize: 22,
                                                        fontWeight: '100',
                                                        color: ukbd_navy_blue,
                                                    }}>|</Text>
                                                </View>

                                                <Image_Pre_Fetch_1
                                                    img_height={img_width}
                                                    img_width={img_width}

                                                    // img_height
                                                    // inner_Comp_Width_2


                                                    imageUrl={`${image_base_url}${single_Product_Detail.image[0]}`}
                                                    // id_temp={`${props.index}+${props.index}+${props.item.oneURI}`}
                                                    id_temp={single_Product_Detail.image[0]}

                                                    resizeMode={(Platform.OS==='android')
                                                        ?"center" :"contain"
                                                    }
                                                />
                                                <FastImage

                                                    style={{

                                                        width: img_width,//displayWidth/6,//displayHeight/20,
                                                        height: img_width,//displayHeight/20,

                                                    }
                                                    }
                                                    source={{
                                                        uri: `${image_base_url}${single_Product_Detail.item.brand_icon}`,

                                                        priority: FastImage.priority.normal,
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />

                                            </View>
                                        ) : null}

                                        brand_icon ends above

                                    </View>
                                </View>
                                brand icon supplier icon ends here
                            </View>*/}
                            {/*1ST ROW ENDS HERE 40%, THIS 40% CONTAINS BRAND ICON(!) AND SUPPLIER ICON AND "SOURCE" TEXT*/}

                            {/*2ND ROW BEGINS HERE 60% ABOVE IS 40%, THIS 60% CONTAINS IMAGES OF PAY WITH */}
                            <View

                                style={{
                                    flexDirection: 'row',
                                    width: '60%', // IMPORTANT
                                    // width: displayWidth * 0.50,//'100%',//'100%',
                                    // backgroundColor: 'red',
                                    // height: displayHeight / 11,

                                    justifyContent: 'flex-end',
                                }}
                            >

                                {/*column  pay with begins here*/}

                                <View
                                    style={{

                                        flexDirection: 'column',

                                        justifyContent: 'center',
                                        alignItems: 'flex-end',

                                    }}
                                >


                                    <View>

                                        <Text style={{
                                            color: ukbd_navy_blue,
                                            // fontSize: 10,
                                            fontSize: 17,
                                            fontWeight: '400',
                                            // fontWeight: "300",
                                            fontFamily: "RobotoCondensed-Regular"
                                        }}>Pay with</Text>

                                    </View>

                                    {/*souce ends above*/}

                                    <View

                                        style={{
                                            flexDirection: 'row',
                                            //width: '60%',//displayWidth * 0.44,//'100%',//'100%',
                                            // backgroundColor: 'green',
                                            // height: displayHeight / 25,//'100%',//displayHeight/11,
                                            justifyContent: 'flex-end',
                                        }}>

                                        {/*american  express begins*/}


                                        {/*master begins */}
                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={american_exp_img}
                                        />

                                        {/*american  express  ends*/}


                                        {/*master begins */}
                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={master_img}
                                        />

                                        {/*master ends*/}

                                        {/*visa begins*/}
                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={visa_img}
                                        />

                                        {/*visa ends*/}


                                        {/*bikash begins*/}
                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={bkash_img}
                                        />


                                        {/*bikash ends*/}

                                        {/*nagad begins*/}

                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={nagad_img}
                                        />


                                        {/*nagad ends*/}


                                        {/*cod begins */}
                                        <Image
                                            style={{
                                                width: payICon_Size,
                                                height: payICon_Size,
                                            }}
                                            source={cod_img}
                                        />

                                        {/*cod ends*/}

                                    </View>

                                </View>


                                {/*column pay with ends here*/}

                            </View>
                            {/*2nd row ends here 60% this 60% contains images of pay with */}


                        </View>


                    </View>


                </View>
                {/*boxed section ends here*/}
                {/*Bordered view in item detail ends here*/}


                {/*Add and favorite button begins here*/}

                <View
                    style={{

                        // flex: 1,
                        height: displayHeight / 11,
                        // backgroundColor: 'teal',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: displayWidth,//'100%',
                        paddingRight: displayWidth * 0.04,//displayWidth/12,
                        // marginRight: 20,
                        // marginHorizontal: 10,
                        // backgroundColor: 'white',


                    }}>


                    {/*999*/}
                    <Add_Favorite_Details_Btn
                        // update_UI={is_Item_Added_To_Cart_Previously}
                        comp_Height={30}
                        t_Width={displayWidth / 2.4}
                        product_Id={Number(route.params.single_Product_ID)}


                        quantity={
                            single_Product_Detail.single_Prod_Quantity
                            // route.params.quantity
                        }
                        add_Button_Pressed_State={
                            single_Product_Detail.single_Prod_Add_Btn_Pressed_State
                            // route.params.add_Button_Pressed_State
                        }

                        // DON'T DELETE BELOW CODES.... APRIL 29
                        /*quantity={
                            (is_Item_Added_To_Cart_Previously !== -1)
                                ? (local_Cart[is_Item_Added_To_Cart_Previously].quantity)
                                : single_Product_Detail.item.single_Prod_Quantity
                        }
                        add_Button_Pressed_State={(is_Item_Added_To_Cart_Previously !== -1)
                            ? true
                            : (single_Product_Detail.item.single_Prod_Add_Btn_Pressed_State)}*/
                    />

                </View>

                {/*Add and favorite button ends here*/
                }


                {/*Top_Tab components begins here*/
                }


                <View


                    style={{

                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        width: displayWidth,//'100%',
                        // backgroundColor: 'brown',
                        // height: 200,


                    }}>

                    {/* <Detail_Page_Tabs begins here */}


                    <View
                        style={{
                            // ...Product_Detail_Page_Styles.box_Outer_View,
                            // flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',

                            alignSelf: 'center',


                            borderWidth: hairlineWidth,
                            borderColor: ukbd_navy_blue,


                            width: inner_Width,
                            height: displayHeight / 4,

                        }}

                    >


                       {/* <Horizontal_First_Top_Tabs
                            comp_Width={inner_Width}

                            comp_Height={displayHeight / 17}
                            // current_Selected_Tab={selected_Tab_Product_Detail_Page_State}

                            // const selected_Tab_Product_Detail_Page_State: number = useAppSelector(select_product_Detail_Tab_Index);
                        />*/}


                       {/* <Horizontal_Second_and_Last_Tab_View
                            comp_Width={inner_Width}
                            // current_Selected_Tab= {selected_Tab_Product_Detail_Page_State}
                            // tab_Pressed= {update_Selected_Tab}
                            comp_Height={(displayHeight / 4) - (displayHeight / 17)}

                        />*/}


                    </View>


                </View>


                {/*Top_Tab components --ends-- here*/}


            </View>


        </SafeAreaView>
    );

};

const Product_Detail_Page_Styles = StyleSheet.create({


    box_Outer_View:
        {
            // flex: 2,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',

            alignSelf: 'center',


            borderWidth: hairlineWidth,
            borderColor: ukbd_navy_blue,
        },

    outer_supplier_brand_View_Style:
        {


            // backgroundColor: 'teal',
            flexDirection: 'row',
            /* borderRightColor: 'grey',
            borderRightWidth: 0.4,*/
            justifyContent: 'flex-start',


            /* flexDirection: 'column',
            borderRightColor: 'grey',
            borderRightWidth: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',*/

        },


    local_Price_Section: {
        borderBottomColor: ukbd_navy_blue,
        borderBottomWidth: hairlineWidth,// 0.6,
        width: '100%',
    },
});


export default Product_Details_Page;

const Product_Details_Page_Styles = StyleSheet.create({

    title_:
        {
            color: ukbd_navy_blue,
            fontSize: 20,
            // lineHeight: 14,
            // fontWeight: "300",
            // fontFamily: "RobotoCondensed-Regular",
            textAlign: "right",
        }
});


