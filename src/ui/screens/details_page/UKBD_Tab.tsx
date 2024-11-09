


import React from "react";
import {
    Pressable,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red} from "../../ui_utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import {useAppDispatch} from "../../../appStore/app/hooks";



interface UKBD_Tab_Props{
    t_Height:number,
    t_Width: number,

}



const UKBD_Tab=() => {

    return(

        <View style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',//t_Width,//'100%',
            backgroundColor: 'brown',
            height: 100,
        }}>
            <Text>
                UKBD_Tab
            </Text>
        </View>
    );
};


export default UKBD_Tab;
