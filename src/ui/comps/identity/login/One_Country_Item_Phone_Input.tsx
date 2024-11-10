import React, {} from "react";
import {
    Pressable,
    View,
    Text,
    ViewStyle,
    Image, StyleSheet,
} from "react-native";
// import {FlatListItem_Country} from "./login_interface";
import {
    bg_Color_List_And_Phone_BG, color_For_Single_Item_In_LIst, list_Container_BG_Color,
    ukbd_navy_blue,
    very_light_blue_ukbd,
    very_light_red_ukbd
} from "../../../ui_utils/important_Colors";
import * as url from "url";
import hairlineWidth = StyleSheet.hairlineWidth;
import {FlatListItem_Country} from '../../../../interfaces/user/login.ts';

const One_Country_Item_Phone_Input: React.FC<FlatListItem_Country> = (
    {
        item,
        onPress,
        // style,
        comp_Height,
        widthArg,
    }) => {


    // console.log("props.item: ", props.item);


    return (

        <Pressable
            onPress={onPress}

            style={({pressed}) => [
                {
                    height: comp_Height,
                    flexDirection: 'column',
                    // ...style,
                    backgroundColor: pressed ? very_light_red_ukbd : list_Container_BG_Color,//bg_Color_List,//'transparent',//bg_Color_List,//'aliceblue',
                    // marginVertical: 0.5,
                    width: widthArg,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    // paddingHorizontal: 6,
                    // borderRadius: 20,


                    borderBottomWidth: hairlineWidth,//
                    borderStyle: 'solid',
                    borderBottomColor: color_For_Single_Item_In_LIst,




                }
            ]
            }


        >

            <View style={{
                flex: 10,
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "space-between",

            }}
            >

                <View
                    style={{

                        flex: 5,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'flex-start',
                        paddingLeft: 4,
                        // backgroundColor: 'red',
                    }}
                >
                    <Text style={{
                        color: ukbd_navy_blue,// "black",
                        fontSize: 16,
                    }}>{item.country}
                    </Text>
                </View>
                <View
                    style={{

                        flex: 1.5,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'flex-start',
                        // backgroundColor: 'gold',
                    }}
                >

                    <Text style={{
                        color: ukbd_navy_blue, //color: "black",
                        fontSize: 16,
                    }}>{item.abbreviation}


                    </Text>
                </View>

                <View
                    style={{

                        flex: 1.5,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'flex-start',
                        // backgroundColor: 'gold',
                    }}
                >

                    <Image
                        style={{
                            width: comp_Height / 1.7,
                            height: comp_Height / 2.5,
                        }}
                        src={item.image_resource_Link}
                    />
                </View>

                <View
                    style={{

                        flex: 2,
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'center',
                        // backgroundColor: 'teal',
                    }}
                >
                    <Text style={{
                        color: ukbd_navy_blue, //color: "black",
                        fontSize: 16,
                    }}>{item.calling_code}
                    </Text>
                </View>


            </View>
        </Pressable>
    );
};


export default One_Country_Item_Phone_Input;
