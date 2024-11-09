import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";


import {
    Text,
    View,
    Alert,
    useWindowDimensions,
    Platform,
    VirtualizedList,
    ActivityIndicator,
    PermissionsAndroid,
    NativeSyntheticEvent,
    NativeScrollEvent,
    SafeAreaView,

} from 'react-native';


import {CommonActions,} from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import {
    check,
    PERMISSIONS,
    request
} from "react-native-permissions";
import Snackbar from "react-native-snackbar";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import {RouteProp} from "@react-navigation/core/src/types";

import {NativeStackScreenProps} from "@react-navigation/native-stack";
// import {useAppDispatch, useAppSelector} from "../../../appStore/app/hooks";
// import {Native_Root_Stack_ParamList} from "../../../App";
// import {base_Image_URL} from "../../../utils_server/server_settings";

/*
import Custom_Header__Multiple_Image_Header_Null_Page
    from "./multiple_Image_/Custom_Header__Multiple_Image_Header_Null_Page";
    */


// import {multiple_image_route_data_through_redux} from "../../../appStore/Reducers/product_Slice";
// import OneOFManyImageItem from "../multiple_Image_/OneOFManyImageItem";

// import Header_Login_Page from "../headers/Header_Login_Page";

// import Header_Multiple_Image_Header_Null_Page from "../../headers/Header_Multiple_Image_Header_Null_Page";
import {Native_Root_Stack_ParamList} from "../../App.tsx";
import {useAppDispatch, useAppSelector} from "../../lib/app/hooks.ts";
import {image_base_url} from "../../config/Config.ts";
import {ukbd_navy_blue} from "../ui_utils/important_Colors.ts";
import Header_Multiple_Image_Header_Null_Page from "../header/Header_Multiple_Image_Header_Null_Page.tsx";
import OneOFManyImageItem from "./multiple_Image/OneOFManyImageItem.tsx";
import {multiple_image_route_data_through_redux} from "../../lib/features/products/productSlice.ts";
// import {ukbd_navy_blue} from "../../ui_utils/important_Colors";


// const itemLayoutHeights: Array<number> = [];

export const itemLayoutWidths: Array<number> = [];


// NHS OneOFManyImageItem end__S HERE


export interface iImageURIStringWithKey {
    oneURI: string,
    key: string,

}


export interface MultipleImageHeaderNull_route_date_interface {


    some_uris: string[],
    tapIndex: number,
    title: string,//props.content,


}


// const feedImageBaseURL = "https://tripzchat.com/api_dev/uploads/feed_content/";

const MultipleImageHeaderNull = ({
                                     navigation,
                                     route,
                                 }: NativeStackScreenProps<Native_Root_Stack_ParamList, 'MultipleImageHeaderNull'>) => {
// const MultipleImageHeaderNull: React.FC<MultipleImageHeaderNullProps> = ({ props, navigation, route }) => {


    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;


    const [imageURIState, setImageURIState] = useState<iImageURIStringWithKey[] | []>([]);
    const [currentIndexState, setCurrentIndexState] = useState<number>(0);
    const [isDownloadingState, setIsDownloadingState] = useState(false);


    const [loadingState, setLoadingState] = useState(true);


    const [zoomEnablingArrayState, setZoomEnablingArrayState] = useState<boolean[]>([]);


    // zoomEnabled

    // route.params.tapIndex

    const multipleImageVLLRef = useRef<VirtualizedList<any>>(null);

    const prevContentOffsetXValueRef = useRef();


    // Redux related code above render begins here...
    const dispatch = useAppDispatch();


    const data_2_image_temp: MultipleImageHeaderNull_route_date_interface = useAppSelector(multiple_image_route_data_through_redux);



    console.log("__data_2_image_temp__:",data_2_image_temp);


    const updateLoadingState2 = (newBooleanValue: boolean) => {

        // console.log("newBooleanValue: ", newBooleanValue);

        setLoadingState(false);
    };


    const componentCurrentIndex = (indx: number) => {

        console.log("indx: ", indx);


    };


    // console.log("tapIndexState: ",tapIndexState);
    useEffect(() => {


            const fcfs2 = /*async*/ () => {


                if (data_2_image_temp.some_uris.length === 1) {

                    const superSetHorizontalImgs: iImageURIStringWithKey[] = data_2_image_temp.some_uris.map(
                        (oneImageURI: string, index: number) => (
                            {
                                key: `${oneImageURI}__${index}`,
                                oneURI: `${image_base_url}${oneImageURI}`,

                                // \`${base_Image_URL}${
                            }
                        ),
                    );

                    console.log("superSetHorizontalImgs: ", superSetHorizontalImgs);


                    setImageURIState(superSetHorizontalImgs);
                    setLoadingState(false);


                    setCurrentIndexState(data_2_image_temp.tapIndex);
                } else {
                    const superSetHorizontalImgs: iImageURIStringWithKey[] = data_2_image_temp.some_uris.map(
                        (oneImageURI: string, index: number) => (
                            {
                                key: `${oneImageURI}__${index}`,
                                oneURI: `${image_base_url}${oneImageURI}`,

                                // \`${image_base_url}${
                            }
                        ),
                    );

                    console.log("superSetHorizontalImgs: ", superSetHorizontalImgs);


                    setImageURIState(superSetHorizontalImgs);
                    setLoadingState(false);


                    setCurrentIndexState(data_2_image_temp.tapIndex);
                }


            };


            fcfs2();

        },
        [],
    );


    useEffect(() => {


            const invokeWhen_CurrentIndex_State_changed_2_image = /*async*/ () => {


                // await dispatch(clearTags1());

                console.log("currentIndexState: at [MultipleImageHeaderNull] ", currentIndexState);


            };


            invokeWhen_CurrentIndex_State_changed_2_image();

        },
        [
            currentIndexState,

        ],
    );

    const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        console.log("__onScrollEnd__:");


        const pageNumber = Math.min(Math.max(Math.floor(event.nativeEvent.contentOffset.x / displayWidth + 0.5) + 1, 0), imageURIState.length);


        const realPageNumber = pageNumber - 1;


        setCurrentIndexState(realPageNumber);


        const tempZoomEnablingArray = Array(zoomEnablingArrayState.length).fill(false);


        tempZoomEnablingArray[realPageNumber] = true;
        setZoomEnablingArrayState(tempZoomEnablingArray);
    };


    const LoadingView = () => {

        return (
            <View style={{

                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                padding: 10,
            }}>

                <ActivityIndicator
                    size="large"

                    color={ukbd_navy_blue}/>
            </View>
        );
    };


    if (loadingState) {
        return (<LoadingView/>);
    }


    const back_btn_press_2 = () => {

        return navigation.goBack();
    };
    const handleDownload1 = /*async*/ () => {

        setIsDownloadingState(true);
        console.log('calling  handleDownload1');

    };


    /*    const update__Image_Tag_Add_RN_Modal_State_2=(new_Boolean_Value: boolean)=>{

            setImage_Tag_Add_RNModalState(new_Boolean_Value);

        }*/


    // NHS FinalView MultipleImageHeaderNull starts here
    return (
        <SafeAreaView
            style={{

                flex: 10,
                flexDirection: 'column',
                backgroundColor: 'white',
            }}
        >


            {/*row ends here..*/}





            <Header_Multiple_Image_Header_Null_Page
                nav={navigation}
                comp_Height={displayHeight / 18}
                comp_Width={displayWidth * 0.90}
                header_Title={data_2_image_temp.title}
                Z_Index={102}
                // back_btn_press={back_btn_press_2}
            />




            {/*imported Modal and tag view begins here... november, 23, 2021*/}


            {/*row ends here..*/}


            {/*imported Modal and Tag View ends here.... november, 23, 2021*/}


            <View style={{
                flexDirection: 'column',
                flex: 9,
                justifyContent: "flex-start",
                alignItems: "center",
                width: '100%',
                // backgroundColor: 'red',


                opacity: isDownloadingState
                    ? 0.6
                    : 1,
            }
            }>
                {/*{(imageURIState.length === 1)
                    ? (<Text>1</Text>) : (
*/}
                <VirtualizedList
                    data={imageURIState}
                    getItemCount={(data) => data.length}

                    getItem={(data2, index) => {

                        const item = data2[index];

                        return {
                            ...item,
                        };
                    }}

                    style={{
                        width: '100%',

                    }}
                    getItemLayout={(data, index) => ({
                            /* length: (itemLayoutWidths[index] === undefined)
                                 ? displayWidth
                                 : itemLayoutWidths[index],
                             offset: itemLayoutWidths.slice(0, index).reduce((aaaaa, ccccc) => aaaaa + ccccc, 0),


                             index,*/



                            length: displayWidth,
                            offset: displayWidth * index,
                            index


                        }
                    )}

                    initialScrollIndex={data_2_image_temp.tapIndex}
                    horizontal={true}
                    pagingEnabled={true}
                    disableIntervalMomentum={true}

                    renderItem={({
                                     item,
                                     index
                                 }) => (


                        <OneOFManyImageItem
                            item={item}
                            index={index}
                            comp_Width={displayWidth}
                            comp_Height={displayHeight}
                            // enableZooming_on_OneImage={zoomEnablingArrayState[index]}
                        />
                    )}

                    keyExtractor={(item: iImageURIStringWithKey) => item.key}

                    ref={multipleImageVLLRef}
                    onMomentumScrollEnd={onScrollEnd}
                />
                {/*)

                }*/}


            </View>
            {/*</View>*/}

        </SafeAreaView>
    );


    // NHS MultipleImageHeaderNull ENDS HERE

};

export default MultipleImageHeaderNull;
