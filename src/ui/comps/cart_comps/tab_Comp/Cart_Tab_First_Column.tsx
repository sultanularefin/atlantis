




import React, {
    // useRef,
    // useState
} from "react";
import {
    FlatList, StyleSheet,

    View,

} from "react-native";



/*import {
    useAppDispatch,
    useAppSelector
} from "../../../../appStore/app/hooks";*/


/*import {
    select_product_Detail_Tab_Index,
    // select_product_Detail_Tab_Index,
    // tab_Arrays,
    update_Product_Detail_Current_Tab_Index
} from "../../../../appStore/Reducers/product_Slice";
import {tab_Arrays} from "../../../ui_utils/tab_Arrays";*/
import {ukbd_navy_blue} from "../../../ui_utils/important_Colors";
import hairlineWidth = StyleSheet.hairlineWidth;
/*import {
    select_Cart_Page_Tab_Index,
    update_Cart_Pages_Current_Tab_Index
} from "../../../../appStore/Reducers/cart_order_Slice";*/
import One_Comp_FlatList from "../../../screens/details_page/one_Comp_FlatList";
import One_Pressable_Tab_In_Cart_Page, {tab_Arrays} from "./One_Pressable_Tab_In_Cart_Page";
import {useAppDispatch, useAppSelector} from "../../../../lib/app/hooks.ts";
import {
    select_Cart_Page_Tab_Index,
    update_Cart_Pages_Current_Tab_Index
} from "../../../../lib/features/cart_order/cart_order_Slice.ts";





export interface Cart_Tab_First_Column_Props{
    comp_Width: number,

    comp_Height: number,
}



const Cart_Tab_First_Column: React.FC<Cart_Tab_First_Column_Props> = ({
                                                                                  comp_Width,
                                                                                  // current_Selected_Tab,
                                                                                  // tab_Pressed,
                                                                                  // showAll2,
                                                                                  comp_Height,

                                                                              }) => {



    const dispatch = useAppDispatch();
    const current_Selected_Tab: number = useAppSelector(select_Cart_Page_Tab_Index);

    // const current_Selected_Tab: number = useAppSelector(select_product_Detail_Tab_Index);
    const tab_Pressed= (index: number)=> {

        // console.log("at __tab_Pressed___ >>>> and [index:]>> ", index);

        dispatch(update_Cart_Pages_Current_Tab_Index(index));

    };

    // console.log("__>> current_Selected_Tab >>> : ",current_Selected_Tab);



    const item_Separator_Component = () =>(


        <View style={{
            backgroundColor: 'white',
            height: comp_Height,//view_Height/20,
            width: 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRightWidth: 0.5,//hairlineWidth,//1,
            borderRightColor: ukbd_navy_blue,//,'lightsteelblue'
        }}>


        </View>
    );



    return (
        <View

            style={{
                flexDirection:'column',
                height: comp_Height,//view_Height/20,
            }}
        >



            <FlatList

                /*style={{

                    height: comp_Height,//view_Height/20,
                    width: comp_Width,
                }
                }*/
                data={tab_Arrays}

                scrollEnabled={false}

                renderItem={({item, index}) => (
                    <One_Pressable_Tab_In_Cart_Page
                        current_Index={index}
                        index={index}
                        updateFiltering_AlphabetState00={tab_Pressed}
                        selected_Index={current_Selected_Tab}
                        // comp_Width={(comp_Width/3)}

                        comp_Width={(index===1)
                            ? ((comp_Width/3)-1.5)
                            :((comp_Width/3)-0.5)}
                        comp_Height={comp_Height}
                    />
                )}

                keyExtractor={(oneLetter:string, index00:number) => `${index00}+${oneLetter}`}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                ItemSeparatorComponent={item_Separator_Component}
            />

        </View>



    );

};


export default Cart_Tab_First_Column;
