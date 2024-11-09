import React from "react";
import {
    Pressable,
    Text,
    View
} from "react-native";

import {ukbd_navy_blue, ukbd_red} from "../../ui_Utils/important_Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useAppDispatch} from "../../../lib/app/hooks.ts";

// import {useAppDispatch} from "../../../appStore/app/hooks";



interface App_Store_Button_Props{
    t_Height:number // COMPONENT HEIGHT NOT DISPLAY HEIGHT OF DEVICE
    t_Width: number,


}



const App_Store_Button: React.FC<App_Store_Button_Props> = (
    {   t_Height,
        t_Width,
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
                        width: t_Width,
                        height: t_Height,
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


                                backgroundColor: pressed ? `${ukbd_red}`:'transparent',
                                justifyContent: 'center',
                                width: t_Width-2,//'80%',
                                height: t_Height-2,
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
                            name="apple"
                            size={t_Height -10}
                            color={ukbd_navy_blue}
                            // color="green"
                            // color="ivory"
                            style={{paddingHorizontal: 4}}
                        />



                        <View

                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: t_Height-2,
                            }}
                        >
                            <Text style={{
                                color: `${ukbd_navy_blue}`
                            }}>App Store</Text>
                        </View>


                    </Pressable>
                    {/*80 % ends here*/}

                </View>

    );
};

export default App_Store_Button;

