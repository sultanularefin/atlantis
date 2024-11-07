import {View} from "react-native";
import React from "react";
import {
    One_Pending_Pickup_Point_Single_Order_Props
} from "../../single_Active_Order/One_Pending_Pickup_Point_Single_Order";


export interface Vertical_Devider_Full_Width_Active_Order{

    compHeight: number,

}
const Vertical_Devider_Full_Width_Active_Order: React.FC<Vertical_Devider_Full_Width_Active_Order> = (
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

export default Vertical_Devider_Full_Width_Active_Order;

