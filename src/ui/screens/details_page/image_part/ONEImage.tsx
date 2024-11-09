import {
    ActivityIndicator,

    Image,
    ImageBackground,
    Platform,
    Pressable, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useState} from "react";


// import FastImage from 'react-native-fast-image';

// import {base_Image_URL} from "../../../../utils_server/server_settings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ukbd_navy_blue, ukbd_red} from "../../../ui_utils/important_Colors";

// import {useAppDispatch} from "../../../../appStore/app/hooks";
// import {populateTag_data_for_multiple_Images} from "../../../../appStore/Reducers/product_Slice";
import {image_base_url} from '../../../../config/Config.ts';
import {useAppDispatch} from '../../../../lib/app/hooks.ts';
import {populateTag_data_for_multiple_Images} from '../../../../lib/features/products/productSlice.ts';

export interface OneImageProps {
    oneItem_url: string,
    // date: string,
    content: string,
    idx: number,
    comp_Width_2: number,
    comp_Height_3: number,
    navigationProp: any,
    // rootIndex: number,
    imgsOFThisFeed: string[],
    // all_images_string:string[],

    // left_Pressed:()=>void,
    // right_Pressed: ()=>void,


}


const ONEImage: React.FC<OneImageProps> = ({
                                               oneItem_url,

                                               content,
                                               idx,
                                               comp_Width_2,
                                               comp_Height_3,
                                               navigationProp,

                                               imgsOFThisFeed,

                                           }) => {


    /*
    console.log("__base_Image_URL__:",base_Image_URL);
    console.log("__oneItem_url__:",oneItem_url);
    */



    // Redux related code above render begins here...
    const dispatch = useAppDispatch();


    const image_Pressed= ()=>{

        console.log("at image_Pressed: ");



        dispatch(populateTag_data_for_multiple_Images(
            {

                some_uris: imgsOFThisFeed,//props.all_images_string,//props.imgsOFThisFeed,
                tapIndex: idx,//props.idx,
                title: content,//props.content,
                //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021

            },
        ));
        return navigationProp.navigate('MultipleImageHeaderNull');
    };


    return (


        <Pressable
            onPress={image_Pressed}

            key={`${oneItem_url}+ ${idx}`}

            style={{


                ...ONEImage_Style.Pressable_Image_Holder_Style,
                width: comp_Width_2,//'100%',//comp_Width_2 - ((comp_Width_2 / 7) * 2),
                //minWidth: ((comp_Width_2 -  41) / 2),

                height: comp_Height_3,

            }}


        >


            <Image
                style={{
                    height: comp_Height_3, //'100%',//((displayWidth - 43) / 2), // -6 for border color padding

                    width: comp_Width_2,   //'100%',//((displayWidth -  43) / 2),


                    // height: ((displayWidth - 43) / 2), // -6 for border color padding
                    // width: ((displayWidth -  43) / 2),  // -6 for border color padding

                }}

                key={`${oneItem_url}+ ${idx}`}
                // onLoadEnd={image_Loaded_done}
                source={{
                    // uri: oneItem_url,
                    uri: `${image_base_url}${oneItem_url}`,
                    // headers: { Authorization: 'someAuthToken' },
                    // priority: FastImage.priority.normal,
                }}

                // resizeMode={FastImage.resizeMode.contain}
                resizeMode={'contain'}
            />

          {/*  {
                !image_Loaded_State && (
                    <View style={{
                        ...ONEImage_Style.Pressable_Image_Holder_Style,
                        width: comp_Width_2,//'100%',//comp_Width_2 - ((comp_Width_2 / 7) * 2),
                        //minWidth: ((comp_Width_2 -  41) / 2),

                        height: comp_Height_3,
                    }}>
                        {oneItem_url ?
                            <ActivityIndicator size="large" color="#ffffff"/> :
                            <FastImage style={{

                                height: comp_Height_3,
                                width: comp_Width_2,
                            }}
                                       onLoadEnd={image_Loaded_done}
                                       source={{
                                           // uri: oneItem_url,
                                           uri: `${base_Image_URL}${oneItem_url}`,
                                           // headers: { Authorization: 'someAuthToken' },
                                           priority: FastImage.priority.normal,
                                       }}

                                       resizeMode={FastImage.resizeMode.contain}
                            />
                        }
                    </View>
                )
            }*/}


        </Pressable>


    );


};


export default ONEImage;


const ONEImage_Style = StyleSheet.create({
    Pressable_Image_Holder_Style: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'gold',
        /* borderColor: 'black',
         borderWidth: 1,*/
    },
});
