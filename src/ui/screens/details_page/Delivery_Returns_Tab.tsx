


import React from "react";
import {
    Pressable,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red} from "../../ui_utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

// import {useAppDispatch} from "../../../lib/app/hooks";



interface Delivery_Returns_Tab_Props{
    t_Height:number,
    t_Width: number,

}



const Delivery_Returns_Tab = () => {

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
                Delivery_Returns_Tab
            </Text>
        </View>
    );
};


export default Delivery_Returns_Tab;
