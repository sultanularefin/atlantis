import React from "react";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";


export interface Custom_Header_User_Name_Props{
    name_String: string,
    font_size: number,
    total_Height: number,
    total_Width: number,
    navigation: any,
    save_before_Leave: ()=>void,
    show_border: boolean,
    zindex:number,

}



const Custom_Header_User_Name: React.FC<Custom_Header_User_Name_Props> = ({
                                                                              name_String,
                                                                              font_size,
                                                                              navigation,
                                                                              total_Height,
                                                                              total_Width,
                                                                              save_before_Leave,
                                                                              show_border,
                                                                              zindex,

                                                                          }) => {

    const save_before_Leave_2= async ()=>{
        // return
        await save_before_Leave();

    };


    return(
        <View style={{
            height: total_Height,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: total_Width,
            zIndex: zindex,
            backgroundColor:'white',


        }}>


            <View
                style={{
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: total_Width,
                    borderBottomWidth: show_border ? 1 : 0,
                    borderTopWidth: show_border ? 1 : 0,
                    borderTopColor: show_border ? '#000a12' : 'transparent',
                    borderBottomColor: show_border ? '#000a12' : 'transparent',


                }}
            >
                {/*partner name and image starts here*/}


                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingStart: 16,
                        width: total_Width/6,
                    }}
                >


                    <TouchableOpacity
                        onPress={save_before_Leave_2}
                        style={{
                            width: (total_Width/6) -16,
                        }}
                    >
                        <Ionicons
                            name='arrow-back-sharp'
                            size={40}
                            color='dodgerblue'
                        />
                    </TouchableOpacity>
                </View>

                <View style={{

                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: (total_Width- (total_Width/6)*2),
                }}
                >
                    <Text style={{
                        color: 'dodgerblue',
                        fontSize: font_size,
                        fontWeight: '600', //'bold',
                    }}>{name_String}</Text>


                </View>

                {/*partner name and image starts here*/}


                {/*Empty view begins here.*/}
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'white',
                        // backgroundColor: 'red',
                        paddingStart: 16,
                        width: total_Width/6,
                    }}
                >
                </View>

                {/*Empty view begins here.*/}

            </View>
        </View>
    );
};
export default Custom_Header_User_Name;
