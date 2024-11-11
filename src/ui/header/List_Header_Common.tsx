import {StyleSheet, Text, View} from "react-native";
// import {ukbd_navy_blue} from "../../ui_utils/important_Colors";
import React from "react";
import hairlineWidth = StyleSheet.hairlineWidth;
import {ukbd_navy_blue} from "../ui_utils/important_Colors.ts";


export interface List_Header_Common_Props{

    comp_Width: number,
    inner_Comp_Width: number,
    title: string,
    bg_Color: string,
}
const List_Header_Common: React.FC<List_Header_Common_Props> = ({
                                                                                // navigation,
                                                                    comp_Width,
                                                                    inner_Comp_Width,
                                                                    title,
                                                                    bg_Color,

                                                                            }) => {
// const List_Header_Common = ()=>{

    return(
        <View


            style={{

                flexDirection: "column",

                justifyContent: "center",
                alignItems: 'flex-start',
                alignSelf: 'flex-start',


                backgroundColor: bg_Color,
                // marginBottom: 20,
                width: comp_Width,

            }

            }

        >

            <View


                style={{

                    flexDirection: "column",

                    justifyContent: "flex-start",
                    alignItems: 'center',
                    alignSelf: 'center',


                    // backgroundColor: 'aliceblue',
                    marginTop: 5,
                    marginBottom: 10,
                    width: inner_Comp_Width,
                    borderBottomWidth: hairlineWidth,
                    borderBottomColor: ukbd_navy_blue,

                }

                }

            >
                <View style={{

                    width: inner_Comp_Width,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                    paddingBottom: 10,
                    // paddingTop: 10,

                }}>

                    <Text
                        style={{
                            fontSize: 21,
                            fontWeight: '600',
                            color: ukbd_navy_blue,
                            letterSpacing: 1,
                        }}
                    >
                        {title}
                    </Text>

                </View>
            </View>
        </View>
    );
};

export default List_Header_Common;

