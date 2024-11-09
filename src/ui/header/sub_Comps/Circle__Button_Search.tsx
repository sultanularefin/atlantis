import React from "react";

import {
    Pressable,
    StyleSheet
} from "react-native";
import
    Svg, {
    Defs,
    G,
    Path,
    TextPath,
    TSpan,
    Text as Text_SVG
} from "react-native-svg";

import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import hairlineWidth = StyleSheet.hairlineWidth;
import AntDesign from "react-native-vector-icons/AntDesign";
import {bag_Bg_Color_From_HSLA, ukbd_red} from "../../ui_Utils/important_Colors";


export interface Circle__Button_Search_Props{
    bg_Color: string,
    icon_Color: string,
    comp_initial_Color: string,
    on_Pressed_Color: string,

    icon_Name: string,
    // icon
    on_Press:()=>void,
    comp_Height_5: number,
    comp_Width_5: number,
    border_Color: string,
}

const Circle__Button_Search: React.FC<Circle__Button_Search_Props> = (
    {
        bg_Color,
        icon_Color,
        comp_initial_Color,
        on_Pressed_Color,


        icon_Name,
        on_Press,
        comp_Height_5,
        comp_Width_5,
        border_Color ,
        // navigation_2,
        // one_Order,

    }
) => {
// const Delivery_Detail_Page_Circle_Button = ()=>{

    return (
        <Pressable
            onPress={
                on_Press
            }
            style={({pressed}) => [
                {
                    // ...styles.addButton,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    // alignSelf: "center",
                    backgroundColor: bg_Color,
                    // comp_initial_Color,//bg_Color,
                    /*
                    backgroundColor: pressed
                        ? on_Pressed_Color
                        : bg_Color,
                    */
                    // height: '100%',
                    height: comp_Height_5,
                    width: comp_Width_5,
                    borderRadius: comp_Height_5/2,



                    /*
                    borderColor: border_Color,
                    borderWidth: 1,//hairlineWidth,
                    */




                    // position: 'absolute',
                    // left: 20,


                    opacity: pressed
                        ? 0.5
                        : 1,



                }
            ]}>



           {/* <AntDesign
                name= {icon_Name}
                color={icon_Color}
                size={(comp_Width_5 / 1.1)}
                style={{
                    // paddingLeft:(comp_He,
                }
                }
            />*/}

           {/* <Svg
                // version="1.1"
                id="Layer_1"
                // xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width={comp_Width_5 /  2.1}
                height={comp_Width_5 / 2.1}
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                // xml:space="preserve"
            >
                <G>
                    <Path fill={bag_Bg_Color_From_HSLA} d="M1.683,32h28.635c0.442,0,0.86-0.194,1.146-0.531c0.286-0.338,0.407-0.782,0.334-1.218l-3.538-21
		C28.137,8.526,27.515,8,26.779,8H22V6c0-3.309-2.691-6-6-6s-6,2.691-6,6v2H5.221C4.485,8,3.863,8.526,3.741,9.251l-3.538,21
		c-0.073,0.436,0.048,0.88,0.334,1.218C0.823,31.806,1.24,32,1.683,32z M11,6c0-2.757,2.243-5,5-5s5,2.243,5,5v2H11V6z M4.728,9.417
		C4.768,9.175,4.976,9,5.221,9H10v4c0,0.276,0.224,0.5,0.5,0.5S11,13.276,11,13V9h10v4c0,0.276,0.224,0.5,0.5,0.5S22,13.276,22,13V9
		h4.779c0.245,0,0.453,0.175,0.493,0.417l3.538,21c0.025,0.147-0.015,0.292-0.111,0.406S30.467,31,30.317,31H1.683
		c-0.149,0-0.285-0.063-0.382-0.177s-0.136-0.258-0.111-0.406L4.728,9.417z"/>
                </G>
            </Svg>*/}


            <Svg
                fill= {icon_Color}
                width={comp_Width_5 /  1.5}
                height={comp_Width_5 / 1.5}

                viewBox="0 0 1920 1920"
                 // xmlns="http://www.w3.org/2000/svg"
            >
                <Path d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z" fill-rule="evenodd"/>
            </Svg>

        </Pressable>

    );
};

export default Circle__Button_Search;
