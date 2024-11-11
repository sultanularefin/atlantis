import React from "react";
import {
    Text,
    // TouchableOpacity,
    Pressable,
    StyleSheet,
} from "react-native";

import hairlineWidth = StyleSheet.hairlineWidth;
import {ukbd_navy_blue} from "../../../ui_utils/important_Colors";
// import {tab_Arrays} from "../../../ui_utils/tab_Arrays";
export const tab_Arrays = [
    "UKBD",
    "Delivery",
    "Returns",
];

export interface One__Letter__FlatList_Item__Props {

    current_Index: number,//string,
    index: number,
    updateFiltering_AlphabetState00: (index: number)=> void;
    selected_Index: number,
    comp_Width: number,
    comp_Height: number,
}

const One_Pressable_Tab_In_Cart_Page: React.FC<One__Letter__FlatList_Item__Props> = ({
                                                                            current_Index,
                                                                            index,
                                                                            updateFiltering_AlphabetState00,
                                                                            selected_Index,
                                                                            comp_Width,
                                                                            comp_Height,
                                                                        }) => {

    // const selected_UnSelected_Color = (current_Index === selected_Index) ? "black"   :"lightslategrey";
    return (



        <Pressable
            // onPress={() => showAll2()}
            onPress={()=> updateFiltering_AlphabetState00(current_Index)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? 'transparent' :(current_Index === selected_Index)?'transparent'
                            : 'aliceblue',

                    // backgroundColor: 'red',

                    flexDirection: 'column',
                    width: comp_Width,//-2,
                    paddingHorizontal: 5,

                    justifyContent: 'center',
                    alignItems: 'center',
                    // alignSelf: 'center',
                    height: comp_Height,
                    // paddingHorizontal:0.5,//1,
                    // borderRightWidth: (selected_Index===1)?0:2,
                    // borderLeftWidth: (selected_Index===1)?0:2,
                    borderBottomWidth: (current_Index === selected_Index)?0:hairlineWidth,
                    borderBottomColor: ukbd_navy_blue,//'rgba(1, 41, 101, 20.0)',//'lightsteelblue',


                    // rgba(1, 41, 101, 5);
                    //     background-color: rgb(1 41 101 / 5%); //01
                    // border: 1px solid rgb(1 41 101 / 20%);

                }

            ]}>
            {({ pressed }) => (
                <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: '600',//'bold',
                    fontSize: 16,
                    color: ukbd_navy_blue,
                }}>
                    {tab_Arrays[index]}
                </Text>
            )}

        </Pressable>
    );
};

export default One_Pressable_Tab_In_Cart_Page;
