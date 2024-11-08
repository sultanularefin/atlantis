import React from "react";
import {
    Pressable,
    View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ukbd_navy_blue, ukbd_red, ukbd_red_light} from "../../../ui_Utils/important_Colors";
import {Feedz_Image_L_Grater_Than_2_Props} from "./Detail_Page_Image_VList_Comp";


export interface Left_Arrow_Button_Props {
    // left_Pressed_0: void,
    left_Pressed_0: () => void,
    comp_Width: number,
    comp_Height: number,
    bg_Color: string,

    disabled_State: boolean,
}

const Left_Arrow_Button: React.FC<Left_Arrow_Button_Props> = ({
                                                                  left_Pressed_0,
                                                                  comp_Width,
                                                                  comp_Height,
                                                                  bg_Color,
                                                                  disabled_State,


                                                              }

                                                              // props
                                                              //
) => {
// const Left_Arrow_Button = ()=>{

    return (
        <View

            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: bg_Color,//'gold',
                /* borderColor: 'black',
                 borderWidth: 1,*/

                width: comp_Width,
                //minWidth: ((comp_Width -  41) / 2),

                height: comp_Height,

            }}

        >
            <Pressable
                onPress={left_Pressed_0}

                // key={`${oneItem_url}+ ${idx}`}
                disabled={disabled_State}

                style={({pressed}) => [
                    {
                        width: comp_Width,
                        height: comp_Width,
                        borderRadius: (comp_Width / 7) / 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignSelf: 'center',


                    }
                ]
                }

                // disabled={(idx === 0)}

            >

                {({pressed}) => (


                    <MaterialCommunityIcons
                        style={{
                            // paddingLeft: 15,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: disabled_State
                                ?ukbd_red_light
                                : pressed
                                    ? ukbd_navy_blue
                                    : ukbd_red,//ukbd_navy_blue,//'black',}
                        }}
                        size={25}
                        name={'chevron-left'}
                        // color={ukbd_red}
                    />

                )
                }

            </Pressable>


        </View>
    );
};

export default Left_Arrow_Button;
