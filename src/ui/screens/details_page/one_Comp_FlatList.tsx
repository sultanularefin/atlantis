import React from "react";
import {
    Text,
    // TouchableOpacity,
    Pressable, StyleSheet, Platform,
} from "react-native";
import {tab_Arrays} from "../../ui_utils/tab_Arrays";
import {ukbd_navy_blue, ukbd_overlay_Color} from "../../ui_utils/important_Colors";
// import hairlineWidth = StyleSheet.hairlineWidth;
// import {tab_Arrays} from "./Horizontal_First_Top_Tabs";


// import {One__Letter__FlatList_Item__Props} from "./Horizontal_First_Top_Tabs";
export interface One__Letter__FlatList_Item__Props {

    current_Index: number,//string,
    index: number,
    updateFiltering_AlphabetState00: (index: number)=> void;
    selected_Index: number,
    comp_Width: number,
    comp_Height: number,
}

const One_Comp_FlatList: React.FC<One__Letter__FlatList_Item__Props> = ({
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
                        ? 'transparent' : (current_Index === selected_Index) ? 'transparent'
                            : 'aliceblue',

                    // backgroundColor: 'red',

                    flexDirection: 'column',
                    width: comp_Width,//comp_Width - 1,
                    paddingHorizontal: 5,

                    justifyContent: 'center',
                    alignItems: 'center',
                    // alignSelf: 'center',
                    height: comp_Height,
                    // paddingHorizontal:0.5,//1,
                    // borderRightWidth: (selected_Index===1)?0:2,
                    // borderLeftWidth: (selected_Index===1)?0:2,
                    borderBottomWidth: (current_Index === selected_Index) ? 0 : 0.5,
                    borderBottomColor: (current_Index === selected_Index)
                        ? undefined :
                        ukbd_navy_blue,//'rgba(1, 41, 101, 20.0)',//'lightsteelblue',


                    // rgba(1, 41, 101, 5);
                    //     background-color: rgb(1 41 101 / 5%); //01
                    // border: 1px solid rgb(1 41 101 / 20%);

                },

                {
                    /*borderRightWidth: (selected_Index===0)?0.5:0.5,
                    borderRightColor: (selected_Index===0)?ukbd_navy_blue:ukbd_navy_blue,*/


                    /*borderLeftWidth:  (selected_Index===2)?0.5:0,
                    borderLeftColor:  (selected_Index===2)?ukbd_navy_blue:0,*/


                    // top:(Platform.OS==='ios')?  top_Value : 0,

                },


                ]}>
            {({ pressed }) => (
                <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: '500',//'bold',
                    fontSize: 15,
                    color: ukbd_navy_blue,
                }}>
                    {tab_Arrays[index]}
                </Text>
            )}

        </Pressable>
    );
};

export default One_Comp_FlatList;
