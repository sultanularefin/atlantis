import React from "react";
import {
    ScrollView,
    Text,
    // TouchableOpacity,
    // Pressable,
    View,
} from "react-native";
// import {tab_Arrays} from "./Horizontal_First_Top_Tabs";

// import sanitizeHtml from 'sanitize-html';
import {
    export_Single_Product_Details,
    single_Product_Item_Root_Interface
} from "../../../appStore/Reducers/product_Slice";
import {useAppSelector} from "../../../appStore/app/hooks";
import One_Horizontal_Comp_Custom from "./One_Horizontal_Comp_Custom";
import One_Horizontal_Comp_Custom_1 from "./One_Horizontal_Comp_Custom_1";
// import {One__Letter__FlatList_Item__Props} from "./Horizontal_First_Top_Tabs";
export interface One__Letter__FlatList_Item__Props {

    current_Item_Content: string,//string,
    index: number,
    // updateFiltering_AlphabetState00: (index: number)=> void;
    selected_Index: number,
    comp_Width: number,
    comp_Height: number,
}

const One_Touchable_Letter_Item: React.FC<One__Letter__FlatList_Item__Props> = ({
                                                                                    current_Item_Content,
                                                                                    index,
                                                                                    // updateFiltering_AlphabetState00,
                                                                                    selected_Index,
                                                                                    comp_Width,
                                                                                    comp_Height,
                                                                                }) => {

    // const selected_UnSelected_Color = (current_Index === selected_Index) ? "black"   :"lightslategrey";


    console.log("__ << selected_Index>> __", selected_Index);

        if (index === 0) {

            return (
                <One_Horizontal_Comp_Custom_1


                    comp_width_1={comp_Width}
                    comp_height_1={comp_Height}

                    current_Item_Content_2={current_Item_Content}
                />
            );
        }
         else {
            return (
                <One_Horizontal_Comp_Custom
                    comp_width_1={comp_Width}
                    comp_height_1={comp_Height}

                />

            );
        }





};

export default One_Touchable_Letter_Item;
