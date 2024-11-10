import {Pressable, StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {ukbd_navy_blue, ukbd_red, ukbd_red_light} from "../../ui_utils/important_Colors";
import React from "react";
import {Header_Props} from "../Header_DashBoard_Home";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import {useAppSelector} from "../../../lib/app/hooks";
/*import {
    select_Local_Cart,
    select_Local_Cart_Length,
    select_Local_Cart_Price_Localized_Monetary_Unit
} from "../../../lib/Reducers/product_Slice";*/
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Monetary_Header_Text_Style} from "./Bag_Button";
import {MonetaryUnits} from "../../ui_utils/localization_utils";
import {useAppSelector} from "../../../lib/app/hooks.ts";
import {select_Local_Cart_Price_Localized_Monetary_Unit} from "../../../lib/features/products/productSlice.ts";

export interface Monetary_Value_OF_Cart_Props {
    // nav: any,
    comp_Height: number,
}

const Monetary_Value_OF_Cart: React.FC<Monetary_Value_OF_Cart_Props> = ({
                                                                            // nav,
                                                                            comp_Height,
                                                                        }) => {
// const Monetary_Value_OF_Cart = ()=>{
//     const local_Cart_Length = useAppSelector(select_Local_Cart_Length);

    const local_Cart_Price = useAppSelector(select_Local_Cart_Price_Localized_Monetary_Unit);


    return (

        <View style={{
            flexDirection: 'column',
            height: comp_Height,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'blue',
        }

        }>


            {/*<View style={{
                flexDirection: 'row',
                height: comp_Height-1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'tomato',
            }}>


                <Text style={{
                    ...Monetary_Header_Text_Style.monetary_Text_Style,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}> {MonetaryUnits[3].text} {local_Cart_Price}</Text>


            </View>*/}


          {/*   <Pressable


                onPress={bag_Button_Pressed}
            >
                {({pressed}) => (
                    )
                }


            </Pressable>*/}


        </View>
    );
};

export default Monetary_Value_OF_Cart;


/*
export const Monetary_Header_Text_Style = StyleSheet.create({

    monetary_Text_Style: {
        fontWeight: '600',//'bold',
        fontSize: 20,
        color: ukbd_red,//ukbd_navy_blue,
    },
});
*/


