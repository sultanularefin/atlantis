







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


// import One_Comp_FlatList from "./one_Comp_FlatList";
// import One_Tab_Content_OF_Detail_OF_Product from "./One_Tab_Content_OF_Detail_OF_Product";
/*
import {useAppSelector} from "../../../appStore/app/hooks";
import {
    export_Single_Product_Details,
    select_product_Detail_Tab_Index,
    single_Product_Item_Root_Interface
} from "../../../appStore/Reducers/product_Slice";

*/
import Cart_Box_Returns from "../cart_Boxes/Cart_Box_Returns";
import Cart_Box_Delivery from "../cart_Boxes/Cart_Box_Delivery";
import Cart_Box_UKBD from "../cart_Boxes/Cart_Box_UKBD";
import {useAppSelector} from "../../../../appStore/app/hooks";
import {select_product_Detail_Tab_Index} from "../../../../appStore/Reducers/product_Slice";
import {select_Cart_Page_Tab_Index} from "../../../../appStore/Reducers/cart_order_Slice";
// import sanitizeHtml from "sanitize-html";
// import One_Horizontal_Comp_Custom_1 from "./One_Horizontal_Comp_Custom_1";
// import One_Horizontal_Comp_Custom from "./One_Horizontal_Comp_Custom";





export interface Cart_Tab_Second_Column_Props {
    comp_Width: number,
    // current_Selected_Tab: number,
    // tab_Pressed: (letter: number) => void;

    comp_Height: number,
    // showAll2:()=> void;



}



const Cart_Tab_Second_Column: React.FC<Cart_Tab_Second_Column_Props> = ({
                                                                                            comp_Width,

                                                                                            comp_Height,

                                                                                        }) => {




    const current_Selected_Tab: number = useAppSelector(select_Cart_Page_Tab_Index);


    if (current_Selected_Tab === 0) {

        return (
          /* <Cart_Box_UKBD
                    comp_Height_3={displayHeight / 14}
                    comp_Width_3={inner_Comp_Width - 1}
                    icon_name={""}
                    description_text={'Unlimited UK & EU deliveries for £10.00 per year, Global for £40.00 per year'}
                    heading_Text={"UKBD"}
                />*/

        <Cart_Box_UKBD
            comp_Height_3={comp_Height}
            comp_Width_3={comp_Width}
            icon_name={""}
            description_text={'Connects Bangladeshis on both sides, London & Dhaka'}
            heading_Text={"UKBD"}
        />

        );
    }
    else if  (current_Selected_Tab === 1) {
        return (
            <Cart_Box_UKBD
                comp_Height_3={comp_Height}
                comp_Width_3={comp_Width}
                icon_name={""}
                description_text={'15 days subject to custom clearance in Bangladesh'}
                heading_Text={"UKBD"}
            />


        );
    }
    else{

       return (
           <Cart_Box_UKBD
               comp_Height_3={comp_Height}
               comp_Width_3={comp_Width}
               icon_name={""}
               description_text={`Unfortunately, for orders shipped outside the UK, we're unable to refund any taxes, duties, charges or delivery costs you may have paid when placing your order. You will be refunded the tax-free price or the products returned.`}
               heading_Text={"UKBD"}
           />
       );
    }
};

export default Cart_Tab_Second_Column;

