import React from "react";
import {
    Pressable,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red} from "../../ui_Utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import {useAppDispatch} from "../../../appStore/app/hooks";



interface Google_PLay_Store_Button_Props{
    comp_Height:number // COMPONENT HEIGHT NOT DISPLAY HEIGHT OF DEVICE
    comp_Width: number,


}



const Google_PLay_Store_Button: React.FC<Google_PLay_Store_Button_Props> = (
    {   comp_Height,
        comp_Width,
    }
) => {



    const dispatch = useAppDispatch();


    const abc =()=>{

        console.log("abc pressed");
    };


    const def =()=>{

        console.log("dispatch(def pressed)");
    };


    return(

                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: 'lightsteelblue',
                        borderWidth: 1,
                        justifyContent: 'flex-start',
                        // backgroundColor: 'gold',
                        alignItems: 'center',
                        // flex: 2,
                        width: comp_Width,//comp_Width/2.8,
                        height: comp_Height,//comp_Height/5,
                        marginRight: 10,
                        marginTop: 5,


                    }}

                >

                    <Pressable

                        onPress={def}
                        style={({ pressed }) => [
                            {
                                // ...styles.addButton,
                                // ...favorite_Button_Styles.wishButton,


                                backgroundColor: pressed ?`${ukbd_red}`:'transparent',
                                justifyContent: 'center',
                                width: (comp_Width)-2,//'80%',
                                height: ((comp_Height)-2),
                                alignItems: 'center',
                                flexDirection: 'row',
                                /*
                                backgroundColor: pressed
                                    ? `${ukbd_navy_blue}`
                                    : "transparent",

                                    */

                            }]}
                    >


                        <MaterialCommunityIcons
                            name="google-play"
                            size={comp_Height-10}
                            color={ukbd_navy_blue}
                            // color="green"
                            // color="ivory"
                            style={{paddingHorizontal: 4}}
                        />



                        <View

                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: comp_Height,
                            }}
                        >
                            <Text style={{
                                color: `${ukbd_navy_blue}`
                            }}>Google Play</Text>
                        </View>


                    </Pressable>
                    {/*80 % ends here*/}

                </View>

    );
};

export default Google_PLay_Store_Button;

