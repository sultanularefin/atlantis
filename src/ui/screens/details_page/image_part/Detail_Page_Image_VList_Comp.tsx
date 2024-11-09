import {
    FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, Text, View, VirtualizedList,

} from "react-native";
import React, {useRef, useState} from "react";
import Inner_Comp_Imgs_Detail_Page from "./Inner_Comp_Imgs_Detail_Page";
import ONEImage from "./ONEImage";
// import {reg__Page_SubComp_interface} from "../../../../appStore/Reducers/authSlice";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  ukbd_navy_blue,
  ukbd_red
} from "../../../ui_utils/important_Colors";
import Left_Arrow_Button from "./Left_Arrow_Button";
import Right_Arrow_Button_Mult_Image from "./Right_Arrow_Button_Mult_Image";


export interface Feedz_Image_L_Grater_Than_2_Props {


    imgsOFThisFeed: string[],


    // indexPrimary: number,

    comp_Width: number,
    comp_Height: number,
    navigationProp: any,

    feedContent: string,


}

const Detail_Page_Image_VList_Comp: React.FC<Feedz_Image_L_Grater_Than_2_Props> = ({
                                                                                       imgsOFThisFeed,

                                                                                       // indexPrimary,
                                                                                       comp_Width,
                                                                                       comp_Height,
                                                                                       navigationProp,
                                                                                       feedContent,

                                                                                   }

                                                                                   // props
                                                                                   //
    ) => {

        const Detail_Page_Multiple_Image_Render_V_LIst_Ref = useRef<VirtualizedList<any>>(null);

        const Vlist_Width = comp_Width - ((comp_Width / 9) * 2);
        const [currentIndexState, setCurrentIndexState] = useState<number>(0);


        console.log("currentIndexState: ", currentIndexState);


        const scrollToIndexFailed = (error: {
            index: number,
            highestMeasuredFrameIndex: number,
            averageItemLength: number,
        }) => {
            console.log("at here[scrollToIndexFailed]:::: ", error);

            const offset = error.averageItemLength * error.index;
            // this.flatListRef.scrollToOffset({offset});


            Detail_Page_Multiple_Image_Render_V_LIst_Ref?.current?.scrollToOffset({offset});

            setTimeout(() => Detail_Page_Multiple_Image_Render_V_LIst_Ref?.current?.scrollToIndex({index: error.index}), 100);
            // You may choose to skip this line if the above typically works well because your average item height is accurate.
        };


        const left_Pressed_0 = () => {

            console.log("___left_Pressed_0___");

            Detail_Page_Multiple_Image_Render_V_LIst_Ref?.current?.scrollToIndex({
                    animated: true,
                    index: currentIndexState - 1,//next_Value_Index,
                    viewPosition: 0,
                }
            );

        };

        const right_Pressed_0 = () => {

            console.log("___right_Pressed_0___");

            Detail_Page_Multiple_Image_Render_V_LIst_Ref?.current?.scrollToIndex({
                    animated: true,
                    index: currentIndexState + 1,//next_Value_Index,
                    viewPosition: 0,
                }
            );

        };

        const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {


            // console.log(Math.min(-2, -3, -1));

            // Expected output: -3

            const pageNumber = Math.min(Math.max(Math.floor(event.nativeEvent.contentOffset.x / Vlist_Width + 0.5) + 1, 0),
                imgsOFThisFeed.length);

            console.log("event.nativeEvent.contentOffset.x: ", event.nativeEvent.contentOffset.x);
            console.log("Vlist_Width: ", Vlist_Width);


            console.log("at__onScrollEnd", pageNumber);
            const realPageNumber = pageNumber - 1;


            setCurrentIndexState(realPageNumber);


        };


        return (

            <View

                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    // backgroundColor: 'gold',
                    /* borderColor: 'black',
                     borderWidth: 1,*/

                    width: comp_Width,
                    //minWidth: ((comp_Width -  41) / 2),

                    height: comp_Height,

                }}

            >

                <View

                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        // backgroundColor: 'gold',
                        /* borderColor: 'black',
                         borderWidth: 1,*/

                        width: comp_Width,
                        //minWidth: ((comp_Width -  41) / 2),

                        height: comp_Height,

                    }}

                >


                    <Left_Arrow_Button
                        left_Pressed_0={left_Pressed_0}
                        comp_Width={comp_Width / 9}
                        comp_Height={comp_Height}
                        bg_Color={'transparent'}
                        disabled_State={(currentIndexState === 0)}
                    />


                    <VirtualizedList
                        data={imgsOFThisFeed}
                        // data={imgsOFThisFeed.slice(0,2)}
                        // data={itemAlias.feed_photos.slice(0,(itemAlias.feed_photos.length <= 4)?itemAlias.feed_photos.length: 4)}
                        // data={imgsOFThisFeed.slice(0,(imgsOFThisFeed?.length <= 4)?imgsOFThisFeed?.length: 4)}
                        // data={animalImages.slice(0, 4)}
                        // data= {imgsOFThisFeed.slice(0,(imgsOFThisFeed?.length <= 4)?imgsOFThisFeed?.length: 4)}

                        getItemCount={(data) => data.length}
                        // keyExtractor={(item: string) => `${item}${inde}`}
                        keyExtractor={(item00:string, index00:number) => `${index00}+${item00}`}

                        getItem={(data2, index) => {

                            return data2[index];
                            /*const item = data2[index];

                            return {
                                // ...item,
                                item
                            };*/
                        }}
                        /*getItemLayout={(data, index) => ({



                                length: comp_Width,
                                offset: comp_Width * index,
                                index


                            }
                        )}*/


                        getItemLayout={(data, index) => ({


                                length: Vlist_Width,
                                offset: Vlist_Width * index,
                                index


                            }
                        )}


                        style={{

                            width: Vlist_Width,
                            height: comp_Height,
                            /*
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            */


                        }}



                        horizontal={true}

                        renderItem={({
                                         item,
                                         index,
                                     }) => (


                            <ONEImage

                                oneItem_url={item}
                                //date= {date}
                                idx={index}
                                comp_Width_2={Vlist_Width}
                                comp_Height_3={comp_Height}
                                navigationProp={navigationProp}
                                // rootIndex={indexPrimary}
                                imgsOFThisFeed={imgsOFThisFeed}
                                // all_images_string={imgsOFThisFeed}
                                content={feedContent}


                                // left_Pressed={left_Pressed_0}
                                // right_Pressed={right_Pressed_0}

                            />
                        )}

                        // numColumns={2}
                        // keyExtractor= {(item00) => `${index00}+${item00.user_id}${item00.datetime}`}


                        ref={Detail_Page_Multiple_Image_Render_V_LIst_Ref}
                        // onMomentumScrollEnd={onScrollEnd}

                        // onMomentumScrollBegin={on_Scroll_Begin}

                        showsHorizontalScrollIndicator={false}

                        // copid from tr ch
                        pagingEnabled={true}
                        disableIntervalMomentum={true}

                        onMomentumScrollEnd={onScrollEnd}

                        onScrollToIndexFailed={scrollToIndexFailed}

                    />

                    {/*right arrow begins here*/}

                    <Right_Arrow_Button_Mult_Image
                        right_Arrow_Pressed_0={right_Pressed_0}
                        comp_Width={comp_Width / 9}
                        comp_Height={comp_Height}
                        // bg_Color={'teal'}
                        bg_Color={'transparent'}
                        disabled_State={(currentIndexState === (imgsOFThisFeed.length - 1))}
                    />
                    {/*right arrow ends here*/}

                </View>
            </View>

        );


    }
;


export default Detail_Page_Image_VList_Comp;
