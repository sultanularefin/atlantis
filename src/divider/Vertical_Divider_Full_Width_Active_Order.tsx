import {View} from "react-native";
import React from "react";



 interface Vertical_Divider_Full_Width_Active_Order_Props {

    compHeight: number,

}
const Vertical_Divider_Full_Width_Active_Order: React.FC<Vertical_Divider_Full_Width_Active_Order_Props> = (
    {
        compHeight,



    }
) => {


    return(

        <View

            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: compHeight,//displayHeight / 70,
                // backgroundColor: 'gold',
            }}>


        </View>
    );
};

export default Vertical_Divider_Full_Width_Active_Order;

