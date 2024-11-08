import React, {
    // useRef,
    // useState
} from "react";
import {
    FlatList, StyleSheet,

    View,

} from "react-native";


import One_Comp_FlatList from "./one_Comp_FlatList";
import {
    useAppDispatch,
    useAppSelector
} from "../../../appStore/app/hooks";


import {
    select_product_Detail_Tab_Index,
    // select_product_Detail_Tab_Index,
    // tab_Arrays,
    update_Product_Detail_Current_Tab_Index
} from "../../../appStore/Reducers/product_Slice";
import {tab_Arrays} from "../../ui_Utils/tab_Arrays";
import {ukbd_navy_blue} from "../../ui_Utils/important_Colors";
import hairlineWidth = StyleSheet.hairlineWidth;





export interface Active_Tab_Product_Detail_Props{
    comp_Width: number,
    // current_Selected_Tab: number,
    // tab_Pressed:(letter: number)=> void;

    comp_Height: number,
    // showAll2:()=> void;




//     display_Width={displayWidth*0.90}
// current_Selected_Tab={selected_Tab_Product_Detail_Page_State}
// tab_Pressed={update_Selected_Tab}

}

/*
export interface alphabetProps{
    item: string;
    onPress: () => void,
    style:  ViewStyle | TextStyle | ImageStyle,
}
*/



const Horizontal_First_Top_Tabs: React.FC<Active_Tab_Product_Detail_Props> = ({
                                                                                    comp_Width,
                                                                                    // current_Selected_Tab,
                                                                                    // tab_Pressed,
                                                                                    // showAll2,
                                                                                    comp_Height,

                                                                                }) => {



    const dispatch = useAppDispatch();

    const current_Selected_Tab: number = useAppSelector(select_product_Detail_Tab_Index);
    const tab_Pressed= (index: number)=> {

        // console.log("at __tab_Pressed___ >>>> and [index:]>> ", index);

        dispatch(update_Product_Detail_Current_Tab_Index(index));

    };

    // console.log("__>> current_Selected_Tab >>> : ",current_Selected_Tab);



    const item_Sparator_Component = () =>(


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
                // backgroundColor: 'red',
            }}
        >



            <FlatList


                data={tab_Arrays}

                scrollEnabled={false}

                renderItem={({item, index}) => (
                    <One_Comp_FlatList
                        current_Index={index}
                        index={index}
                        updateFiltering_AlphabetState00={tab_Pressed}
                        selected_Index={current_Selected_Tab}
                        comp_Width={(index===1)
                            ? ((comp_Width/3)-1.5)
                    :((comp_Width/3)-0.5)}
                        comp_Height={comp_Height}
                    />
                )}

                keyExtractor={(oneLetter:string, index00:number) => `${index00}+${oneLetter}`}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                ItemSeparatorComponent={item_Sparator_Component}
            />

        </View>



    );

};


export default Horizontal_First_Top_Tabs;
