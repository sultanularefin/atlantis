// NHS OneOFManyImageItem begin__S HERE
import React, {useCallback} from "react";

// import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import {LayoutChangeEvent, Platform, View} from "react-native";
import {image_base_url} from "../../../config/Config.ts";
import Image_Pre_Fetch_1 from "../../ui_utils/Image_Pre_Fetch_1.tsx";
import {itemLayoutWidths} from "../MultipleImageHeaderNull.tsx";
// import FastImage from "react-native-fast-image";
// import {itemLayoutWidths} from "../stack_Screens/MultipleImageHeaderNull";

// import {itemLayoutWidths} from "./MultipleImageHeaderNull";

export interface iOneOFManyImageItemProps {

    item: {
        oneURI: string,
        key: string,
        // string
    },

    index: number,
    comp_Width: number,
    comp_Height: number,
    // enableZooming_on_OneImage: boolean,


}

const OneOFManyImageItem: React.FC<iOneOFManyImageItemProps> = ({
                                                                    item,
                                                                    index,
                                                                    comp_Width,
                                                                    comp_Height,

                                                                }) => {


        // const {enableZooming_on_OneImage,...a1 }={...props};

        console.log("item: ", item);


        return (


            <View

                style={{

                    flexDirection: 'column',
                    height: ((comp_Height) / 1.4),
                    width: (comp_Width),

                    // marginVertical: 30,
                    // justifyContent: 'center',
                    justifyContent: 'center',

                    // justifyContent: 'space-around',
                    // alignItems: 'center',

                    alignSelf: 'center',
                    // backgroundColor: 'gold',

                }}

                onLayout={(object: LayoutChangeEvent) => {


                    itemLayoutWidths[index] = Math.trunc(object.nativeEvent.layout.width);


                }}
                // onLayout
            >


                <Image_Pre_Fetch_1
                    img_height={comp_Height}
                    img_width={comp_Width}

                    // img_height
                    // inner_Comp_Width_2


                    imageUrl={item.oneURI}
                    // id_temp={`${props.index}+${props.index}+${props.item.oneURI}`}
                    id_temp={item.key}

                    resizeMode={(Platform.OS==='android')
                        ?"center" :"contain"
                    }
                />


                {/*<FastImage
                    style={{

                        height: comp_Height,//((comp_Height) / 1.9),
                        width: comp_Width,
                        // width: null,
                        // backgroundColor: 'red',
                        // backgroundColor: 'wheat',
                    }}

                    key={`${index}+${index}+${item.oneURI}`}

                    source={{
                        uri: item.oneURI,
                        priority: FastImage.priority.normal,
                    }}
                    // resizeMode={FastImage.resizeMode.cover}
                    // resizeMode={FastImage.resizeMode.contain}

                    // resizeMode={FastImage.resizeMode.center}

                    resizeMode={Platform.OS === 'android'
                        ? FastImage.resizeMode.center
                        : FastImage.resizeMode.contain
                        // :FastImage.resizeMode.center
                    }
                />*/}

            </View>

        );
    }
;

export default OneOFManyImageItem;
