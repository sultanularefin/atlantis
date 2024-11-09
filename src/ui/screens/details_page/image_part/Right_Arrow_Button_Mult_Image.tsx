import React from "react";
import {
    Pressable,
    View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ukbd_navy_blue, ukbd_red, ukbd_red_light} from "../../../ui_utils/important_Colors";

// import {Feedz_Image_L_Grater_Than_2_Props} from "./Detail_Page_Image_VList_Comp";


export interface Right_Arrow_Button_Mult_Image_Props {
    // left_Pressed_0: void,
    right_Arrow_Pressed_0: () => void,
    comp_Width: number,
    comp_Height: number,
    bg_Color: string,
    disabled_State: boolean,


}

const Right_Arrow_Button_Mult_Image: React.FC<Right_Arrow_Button_Mult_Image_Props> = ({
                                                                                          right_Arrow_Pressed_0,
                                                                                          comp_Width,
                                                                                          comp_Height,
                                                                                          bg_Color,
                                                                                          disabled_State,


                                                                                      }

                                                                                      // props
                                                                                      //
) => {
// const Right_Arrow_Button_Mult_Image = ()=>{

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
                onPress={right_Arrow_Pressed_0}

                // key={`${oneItem_url}+ ${idx}`}


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

                disabled={disabled_State}

            >

                {({pressed}) => (


                    <MaterialCommunityIcons
                        style={{
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
                        name={'chevron-right'}
                        // color={ukbd_red}
                    />

                )
                }

            </Pressable>


        </View>
    );
};

export default Right_Arrow_Button_Mult_Image;
