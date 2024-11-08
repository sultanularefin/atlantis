import React, {
    // useRef,
    // useState
} from "react";
import {
    FlatList,
    ImageStyle,
    Platform,
    Pressable,
    Text,
    TextStyle,
    TouchableNativeFeedback,
    // TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";


import One_Comp_FlatList from "./one_Comp_FlatList";
import One_Tab_Content_OF_Detail_OF_Product from "./One_Tab_Content_OF_Detail_OF_Product";
import {useAppSelector} from "../../../appStore/app/hooks";
import {
    export_Single_Product_Details,
    select_product_Detail_Tab_Index,
    single_Product_Item_Root_Interface
} from "../../../appStore/Reducers/product_Slice";
// import sanitizeHtml from "sanitize-html";
import One_Horizontal_Comp_Custom_1 from "./One_Horizontal_Comp_Custom_1";
import One_Horizontal_Comp_Custom from "./One_Horizontal_Comp_Custom";





export interface Active_Tab_Product_Detail_Props {
    comp_Width: number,
    // current_Selected_Tab: number,
    // tab_Pressed: (letter: number) => void;

    comp_Height: number,
    // showAll2:()=> void;



}



const Horizontal_Second_and_Last_Tab_View: React.FC<Active_Tab_Product_Detail_Props> = ({
                                                                                    comp_Width,

                                                                                    comp_Height,

                                                                                }) => {



    const current_Selected_Tab: number = useAppSelector(select_product_Detail_Tab_Index);

    const single_Product_Detail:single_Product_Item_Root_Interface= useAppSelector(export_Single_Product_Details);


    // console.log("__current_Selected_Tab__: ",current_Selected_Tab);


    if (current_Selected_Tab === 0) {

        return (
            <One_Horizontal_Comp_Custom_1


                comp_width_1={comp_Width}
                comp_height_1={comp_Height}
                current_Item_Content_2={single_Product_Detail.item.details}
                // current_Item_Content_2={single_Product_Detail.item_Style_With_Gesture.details}
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


export default Horizontal_Second_and_Last_Tab_View;
