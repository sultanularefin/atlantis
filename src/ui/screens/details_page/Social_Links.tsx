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
// import {FontAwesome5} from "react-native-vector-icons/FontAwesome5";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";



interface Social_Links_Props{
    comp_Height:number // COMPONENT HEIGHT NOT DISPLAY HEIGHT OF DEVICE
    comp_Width: number,


}



const Social_Links: React.FC<Social_Links_Props> = (
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
                        justifyContent: 'flex-end',
                        // backgroundColor: 'gold',
                        alignItems: 'center',
                        // flex: 2,
                        width: comp_Width/1.9,
                        height: comp_Height/2,
                        marginRight: 10,
                        marginTop: 5,


                    }}

                >

                    <Pressable

                        onPress={def}
                        style={({ pressed }) => [
                            {

                                backgroundColor: pressed ?`${ukbd_red}`
                                    : 'transparent',
                                    //'transparent',
                                justifyContent: 'flex-start',
                                width: comp_Width/9,//'80%',
                                height: comp_Height/2,
                                alignItems: 'center',
                                flexDirection: 'row',



                            }]}
                    >


                        <FontAwesome5Icon
                            name="instagram"
                            size={((comp_Height/2) - 16)}
                            color={ukbd_navy_blue}
                            style={{paddingHorizontal: 4}}
                        />

                    </Pressable>
                    {/*instagram ends here*/}

                    {/*twitter begins here*/}

                    <Pressable

                        onPress={def}
                        style={({ pressed }) => [
                            {

                                backgroundColor: pressed ?`${ukbd_red}`
                                    : 'transparent',
                                //'transparent',
                                justifyContent: 'flex-start',
                                width: comp_Width/9,//'80%',
                                height: comp_Height/2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginLeft: 5,

                            }]}
                    >


                        <MaterialCommunityIcons
                            name="twitter"
                            size={((comp_Height/2) - 16)}
                            color={ukbd_navy_blue}
                            style={{paddingHorizontal: 4}}
                        />

                    </Pressable>


                    {/*twitter ends here*/}


                    {/*facebook begins here*/}

                    <Pressable

                        onPress={def}
                        style={({ pressed }) => [
                            {

                                backgroundColor: pressed ?`${ukbd_red}`
                                    : 'transparent',
                                //'transparent',
                                justifyContent: 'flex-start',
                                width: comp_Width/9,//'80%',
                                height: comp_Height/2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginLeft: 5,

                            }]}
                    >


                        <MaterialCommunityIcons
                            name="facebook"
                            size={((comp_Height/2) - 16)}
                            color={ukbd_navy_blue}
                            style={{paddingHorizontal: 4}}
                        />

                    </Pressable>


                    {/*facebook ends here*/}



                    {/*youtube begins here*/}
                    <Pressable

                        onPress={def}
                        style={({ pressed }) => [
                            {

                                backgroundColor: pressed ?`${ukbd_red}`
                                    : 'transparent',
                                //'transparent',
                                justifyContent: 'flex-start',
                                width: comp_Width/9,//'80%',
                                height: comp_Height/2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginLeft: 5,

                            }]}
                    >


                        <FontAwesome5Icon
                            name="youtube"
                            size={((comp_Height/2) - 16)}
                            color={ukbd_navy_blue}
                            style={{paddingHorizontal: 4}}
                        />

                    </Pressable>

                    {/*youtube ends here*/}

                </View>

    );
};

export default Social_Links;

