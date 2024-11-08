
import React from "react";
import {
    ScrollView,
    Text,
    // TouchableOpacity,
    // Pressable,
    View,
} from "react-native";
import {ukbd_navy_blue} from "../../ui_Utils/important_Colors";


interface One_Horizontal_Comp_Custom_1_Interface{
    comp_width_1: number,// ={comp_Width}
    comp_height_1: number,//= {comp_Height}
    current_Item_Content_2: string,
}

const One_Horizontal_Comp_Custom_1: React.FC<One_Horizontal_Comp_Custom_1_Interface> = ({
                                                                                            comp_width_1,

                                                                                            comp_height_1,
                                                                                            current_Item_Content_2,

                                                                                        }) => {


    return(
        <View

            style={
                {
                    // backgroundColor: 'red',

                    width: comp_width_1-2,
                    height: comp_height_1-2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    flexDirection: 'column',
                    paddingHorizontal: 2,
                    paddingVertical: 16,



                }

            }>
            <ScrollView style={
                {
                    // marginHorizontal: 6,
                    // backgroundColor: 'red',

                }
            }

            showsVerticalScrollIndicator={false}
            >

                <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'justify',
                    color: ukbd_navy_blue,
                }}>
                    {/*{sanitizeHtml(current_Item_Content_2)}*/}

                    {current_Item_Content_2}

                </Text>

            </ScrollView>
        </View>
    );
};


export default One_Horizontal_Comp_Custom_1;
