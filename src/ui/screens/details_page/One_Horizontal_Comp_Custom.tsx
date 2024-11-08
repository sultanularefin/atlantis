
import React from "react";
import {
    Image,
    ScrollView,
    Text,
    // TouchableOpacity,
    // Pressable,
    View,
} from "react-native";
// import {Active_Tab_Product_Detail_Props} from "./Horizontal_Second_and_Last_Tab_View";
import App_Store_Button from "./App_Store_Button";
import Google_PLay_Store_Button from "./Google_PLay_Store_Button";
import Support_Comp from "./Support_Comp";
import Social_Links from "./Social_Links";
import {ukbd_navy_blue} from "../../ui_Utils/important_Colors";


interface One_Horizontal_Comp_Custom_Interface{
    comp_width_1: number,// ={comp_Width}
    comp_height_1: number,//= {comp_Height} // not DISPLAY HEIGHT JAN 25, 2023.. . -- -
}

const One_Horizontal_Comp_Custom: React.FC<One_Horizontal_Comp_Custom_Interface> = ({
                                                                                        comp_width_1,
                                                                                        // current_Selected_Tab,
                                                                                        // tab_Pressed,
                                                                                        // showAll2,
                                                                                        comp_height_1,

                                                                                    }) => {
// const One_Horizontal_Comp_Custom = ()=>{

    return(

        <View style={{
            height: comp_height_1,//comp_width_1,
            width: comp_width_1,

            marginHorizontal: 6,
            // backgroundColor: 'red',
            // flexWrap: 'wrap',
            // padding: 10,
            justifyContent: 'flex-start',
            flexDirection: 'column',
        }}
        >


            <ScrollView style={
                {
                    // marginHorizontal: 6,
                    // backgroundColor: 'red',


                    // justifyContent: 'center',
                }

            }

                        showsVerticalScrollIndicator={false}


                // showsVerticalScrollIndicator: false,




            >

                <View
                    style={{

                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height : comp_height_1,
                    paddingHorizontal:12,
                    paddingVertical: 12,
                }}

                >
                    <Text style={{
                        // height: comp_height_1,
                        // width: '50%',

                        flexWrap: 'wrap',
                        textAlign: 'justify',
                        color: ukbd_navy_blue,

                        // float: 'left',
                    }}>

                        UKBD.com is an online shop available in UK and Dhaka Bangladesh. We believe time is
                        valuable to our fellow residents, and that they should not have to waste hours in traffic,
                        brave bad weather and wait in line just to buy basic necessities like eggs!
                        This is why UKBD delivers everything you need right at your door-step and at no additional cost.
                    </Text>

                </View>


                {/*play and ios */}

                <View style={{


                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'flex-end',
                    minHeight : (comp_height_1/5)*2,

                    // height: comp_height_1,
                    width: comp_width_1,
                    // backgroundColor: 'blue',
                }}
                >

                    <View

                        style={{
                            flexDirection: 'row',
                            // width: comp_width_1,//'100%',//'100%',
                            // backgroundColor: 'green',
                            // height: 100,//'100%',//displayHeight/11,
                            height : (comp_height_1/5)*2,
                            width: comp_width_1,
                            alignItems: 'center',


                            justifyContent: 'flex-end',
                        }}>

                        {/*american  express begins*/}

                        <Google_PLay_Store_Button

                            comp_Height={comp_height_1/5}
                            comp_Width={comp_width_1/2.8}


                           /* width: comp_Width/2.8,
                        height: comp_Height/5,*/
                        />




                        {/*master begins */}
                        <App_Store_Button
                            t_Height={comp_height_1/5}
                            t_Width={comp_width_1/3.5}
                        />

                    </View>
                </View>

                {/*Google play and app store button ends here*/}


                {/*support begins here*/}

                <View style={{

                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    // height : 100,

                    minHeight : (comp_height_1/1.2),
                    // width: comp_width_1,
                    // backgroundColor: 'gold',
                }}
                >

                    <View

                        style={{
                            flexDirection: 'column',
                            width: comp_width_1,//'100%',//'100%',
                            // backgroundColor: 'green',
                            // height: 100,//'100%',//displayHeight/11,
                            minHeight : (comp_height_1/1.2),
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            // backgroundColor: 'red',
                        }}>

                        {/*american  express begins*/}

                        <Support_Comp

                            comp_Height={(comp_height_1/1.2)}
                            t_Width={comp_width_1}
                            phone_Number={'199996'}

                            support_Email={'support@ukbd.com'}
                        />

                       {/* <Support_Comp

                            t_Height={comp_height_1}
                            t_Width={comp_width_1}
                            phone_Number={'199996'}
                        />*/}
                    </View>



                    </View>
                {/*support ends here*/}




                {/*social links begins here*/}



                <View style={{

                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height : (comp_height_1/2),
                    minHeight: (comp_height_1/2),
                    // backgroundColor: 'blue',
                }}
                >

                    {/*<View

                        style={{
                            flexDirection: 'row',
                            width: comp_width_1,//'100%',//'100%',
                            // backgroundColor: 'green',
                            height : (comp_height_1/2),// height: (comp_height_1/1.2),//'100%',//displayHeight/11,
                            minHeight: (comp_height_1/2),
                            justifyContent: 'flex-end',
                        }}>*/}


                        <Social_Links

                            comp_Height={comp_height_1/2}
                            comp_Width={comp_width_1/1.3}
                        />

                   {/* </View>*/}
                </View>


                {/*social links ends here*/}




            </ScrollView>
        </View>
    );
};


export default One_Horizontal_Comp_Custom;
