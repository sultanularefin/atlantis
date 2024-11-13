import React, {useCallback, useRef, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
    StyleSheet,
    Alert,
    View,
    ActivityIndicator,
    // FlatList,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    useWindowDimensions,
    RefreshControl,
    SafeAreaView,
    TouchableNativeFeedback,
    Pressable,
    ListRenderItem,
    VirtualizedList,
    BackHandler,
    StatusBarStyle,
    FlatList,
    StatusBar,
    AppState,
    AppStateStatus,
} from 'react-native';

import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import Snackbar from 'react-native-snackbar';
import {useAppDispatch, useAppSelector} from '../../lib/app/hooks';

import No_More_Items from '../comps/No_More_Items.tsx';

import List_Empty_Comp from '../comps/List_Empty_Comp.tsx';

import FloatingButton_Scan_New from '../floating_comp/FloatingButton_Scan_New.tsx';
import {old_scan_result_data_interface} from '../../interfaces/scan/scan_interfaces.ts';

import Indicator_Common from '../indicator/Indicator_Common.tsx';

import {useGetProductsQuery} from '../../lib/features/products/productsApiSlice.ts';
import Focus_Aware_Status_Bar from '../header/Focus_Aware_Status_Bar.tsx';
import {
    backOverlayColor_Green,
    cac_item_Select_BG_Color,
    ukbd_navy_blue,
    ukbd_navy_Blue_Genuine,
    ukbd_place_holder_TextColor,
    ukbd_red_light,
} from '../ui_utils/important_Colors.ts';
import Header_DashBoard_Home from '../header/Header_DashBoard_Home.tsx';
import Home_Item from '../home_comp/Home_Item.tsx';
import {One_Product_for_Home_Page_Interface} from '../../interfaces/products/product.ts';
import {select_Shipped_From_State_Or_Delivery_Currency} from '../../lib/features/products/product_Slice.ts';
import {monetary_Unit_Interface} from '../ui_utils/localization_utils.ts';
import {home_page_product_limit} from '../../config/business_constants.ts';
import NetInfo, {
    // addEventListener,
    NetInfoState, useNetInfo,
} from '@react-native-community/netinfo';
import {
    is_online_RTK,
    select_online_status,
} from '../../lib/features/auth/auth_Slice.ts';
import You_Are_Offline_Comp from '../ui_utils/You_Are_Offline_Comp.tsx';

export interface Catalog_Home_Page_Props {
    navigation: any;
}

const Catalog_Home_Page: React.FC<Catalog_Home_Page_Props> = ({navigation}) => {
    const [refreshingState, setRefreshingState] = useState(false);

    const deviceWidth = useWindowDimensions().width;
    const deviceHeight = useWindowDimensions().height;

    const dispatch = useAppDispatch();

    const [master_Loading_State, set_Master_Loading_State] = useState(false);

    const Home_State_Delivery_Currency: monetary_Unit_Interface = useAppSelector(
        select_Shipped_From_State_Or_Delivery_Currency,
    );

      const {
        data: home_products,
        isLoading: is_home_products_Loading,
        isError: is_home_products_load_Error,
          error: home_Product_Error_Detail,

      } = useGetProductsQuery({
        limit: home_page_product_limit,
        // offset: 1,
      });
      // isError: home_products_load_Error,

     /* if (is_home_products_load_Error) {
        return (
            <View>
              <Text>Error fetching posts: {(error as any)?.message || 'Unknown error'}</Text>
              <Button title="Retry" onPress={refetch} />
            </View>
        );
      }*/

   /*   console.log(`code: `, home_products_load_Error.code);
      console.log(`message: `, home_products_load_Error.message);
      console.log(`name: `, home_products_load_Error.name);
      // console.log(`stack`, error.stack);
      // setLoadingState(false);

      console.log(' ___', typeof home_products_load_Error.message);*/





        const online_State: boolean = useAppSelector(select_online_status);

        console.log("online_State: ", online_State);
        const netInfo = useNetInfo();

        console.log("netInfo: ",netInfo);

        useFocusEffect(
            useCallback(() => {
                // Subscribe
                const unsubscribe_From_Internet_connectivity = NetInfo.addEventListener(
                    (state: NetInfoState) => {
                        console.log('state: ', state);

                        if (state.isConnected !== null) {
                            dispatch(is_online_RTK(state.isConnected));
                        }
                    },
                );

                const appState_subscription_Bottom_Tabs_Main = AppState.addEventListener(
                    'change',
                    (nextAppState: AppStateStatus) => {
                        unsubscribe_From_Internet_connectivity();
                    },
                );

                unsubscribe_From_Internet_connectivity(); // put here on january _24

                return () => {
                    appState_subscription_Bottom_Tabs_Main.remove();
                };
            }, [
                // addEventListener,
                dispatch,
                // netInfo,
                NetInfo,
                AppState,
            ]),
        );

        const List_Footer_Comp_32 = () => (
            <No_More_Items
                first_String={'No More '}
                last_String={' Found.'}
                highlighted_String={"Scanned Item's"}
            />
        );

        const save__Before_Close_In_Notifications_Page = async () => {
        };

        const get_Item_Custom = (
            data: old_scan_result_data_interface[],
            index: number,
        ) => ({
            ...data[index],
            // key: `${index}`

            // key: `${index}${data[index].id}` ---THESE CAUSING PROBLEMS
        });

        // NHS F.... Begins here

        const onRefresh = () => {
            set_Master_Loading_State(true);

            // setInterval(code, delay)
            setTimeout(() => {
                // resolve("foo");
                set_Master_Loading_State(false);
            }, 600);

            // setTimeout()
        };

        const header_Home_Height = deviceHeight / 15;
        const comp_Height = deviceHeight / 10;

        const VList_Height = deviceHeight;

        const STYLES = ['default', 'dark-content', 'light-content'] as const;
        const TRANSITIONS = ['fade', 'slide', 'none'] as const;
        const [hidden, setHidden] = useState(false);
        const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
            STYLES[1],
        );
        const [statusBarTransition, setStatusBarTransition] = useState<
            'fade' | 'slide' | 'none'
        >(TRANSITIONS[0]);

        // status bar related comps ---- ends here

        const Home_Page_FlatList_Ref = useRef<FlatList<any>>(null);

        const comp_Height_1 = deviceHeight / 3.5;
        // comp_Height_1 = (header_Height / 2); GOOD FOR ANDROID physical device
        // comp_Height_1 = (header_Height / 2.5); GOOD FOR iPhone simulators

        const Home_Each_Item_Width = deviceWidth / 2.1;
        const inner_Comp_Width = Home_Each_Item_Width * 0.77;

        // console.log("inner_Comp_Width: ",inner_Comp_Width);
        // inner_Comp_Width:  137.44034024780967   ==> Xiaomi Redmi Note 7

        const is_Small_Device = inner_Comp_Width < 138;

        /*  // home_products
                  ((
                      is_home_products_Loading
                      ||
                      !home_products_load_Error

              */
        const List_Footer_Component = () => {
            if (home_products?.length === 0) {
                return null;
            } else {
                return (
                    <No_More_Items
                        first_String={'No More '}
                        last_String={' Found.'}
                        highlighted_String={'Product Items'}
                        // content_Text={'No More Tripz Later found.'}
                    />
                );
            }
        };
        const listEmpty = () => {
            return (
                <List_Empty_Comp
                    t_Height={deviceHeight}
                    content_first={'No '}
                    content_last={' Found.'}
                    content_high_light={'Product Item'}
                    t_width={deviceWidth}
                />
            );
            // partner_name
        };

        return (
            <SafeAreaView
                style={
                    // styles.container,
                    {
                        // flex: 10,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        height: deviceHeight,
                    }
                }>
                {/*<StatusBar barStyle="light-content" backgroundColor="dodgerblue" />*/}
                {/* <Focus_Aware_Status_Bar
        barStyle={statusBarStyle}
        backgroundColor={"deepskyblue"}
        // backgroundColor only available in android not in iOS
      />*/}

                <View
                    style={{
                        height: header_Home_Height,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        // flex: 1,
                    }}>
                    <Header_DashBoard_Home
                        comp_Height={header_Home_Height}
                        nav={navigation}
                        comp_Width={deviceWidth}
                        bg_Color={'white'}

                        // exchang_Rage={exchange_Rate}
                    />
                </View>

                {online_State
                    ? null
                    : (
                        <You_Are_Offline_Comp comp_width={deviceWidth}/>
                    )
                }
              {


                ((!is_home_products_load_Error) &&(!is_home_products_Loading)) &&(

                      <View
                          style={{
                            ...itemContainer_Style_Root.itemContainer_Style,
                            width: deviceWidth,
                            paddingTop: 10,
                            height: VList_Height,
                            paddingBottom: 20,
                          }}>
                        {is_home_products_Loading && (
                            <Indicator_Common color={ukbd_navy_blue}/>
                        )}
                        <FlatList
                            style={{
                              height: 600,
                            }}
                            contentContainerStyle={{
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              flexDirection: 'column',
                              // backgroundColor: 'gold',
                              // height: vlist_Height,
                            }}
                            ref={Home_Page_FlatList_Ref}
                            // is_home_products_Loading
                            // home_products_load_Error
                            // home_products

                            keyExtractor={(item: One_Product_for_Home_Page_Interface, index) =>
                                `${index}${item.id}`
                            }
                            data={home_products}
                            // renderItem = {OneChatPreviewItem}

                            // performance optimization
                            getItemLayout={(data, index) => ({
                              length: comp_Height_1,
                              offset: comp_Height_1 * index,
                              index,
                            })}
                            renderItem={({
                                           item,
                                           // item:one_Product__interface,
                                           index,
                                         }) => (
                                <Home_Item
                                    item_navigation={navigation}
                                    // item_Pressed={item_Pressed_2}
                                    // wish_Button_Pressed={wish_Button_Pressed_2}
                                    item_Data={item}
                                    comp_Height={comp_Height_1}
                                    comp_Width={Home_Each_Item_Width}
                                    inner_Comp_Width_2={inner_Comp_Width}
                                    currency_Code_Delivery={Home_State_Delivery_Currency}
                                    // local_Currency_2={local_Currency}
                                    // exchange_Rate={exchange_Rate}
                                    // conversion_Rate={conversion_Rate}
                                    // show_Details_Btn={item.show_Details_Btn}
                                    index_Value={index}
                                    is_Small_Device={is_Small_Device}

                                    // Home_State_Delivery_Currency_Code,exchange_Rate
                                />
                            )}
                            // required ends here___

                            numColumns={2}
                            // initialNumToRender={20}
                            // indicatorStyle={"black"}
                            horizontal={false}
                            // onEndReachedThreshold={1}
                            onEndReachedThreshold={0.5} // 0.5 invoke when  1/2 height content.
                            onEndReached={({distanceFromEnd}) => {
                              if (distanceFromEnd) {
                                /*
                                                                                          if(sizeOFTotal_Feedz <= 2)
                                                                                          {
                                                                                              return;
                                                                                          } else {

                                                                                            */
                                // loadMoreTEN();
                                /*}*/
                              } else {
                                /*if(distanceFromEnd ===0) {
                                                                                        }*/

                                // loadMoreTEN();

                                console.log('___distanceFromEnd__:', distanceFromEnd);
                              }
                            }}
                            // initialNumToRender={3} // default 10
                            removeClippedSubviews={false} // default false
                            windowSize={6} // 3 * 2 default 21 , performaNCE BOOSTER
                            ListEmptyComponent={listEmpty}
                            ListFooterComponent={List_Footer_Component}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                              <RefreshControl
                                  refreshing={refreshingState}
                                  onRefresh={onRefresh}
                                  title={'Refreshing'} // ios
                                  titleColor={'blue'} // ios
                                  tintColor={'lightskyblue'} // ios
                                  colors={['dimgrey'] /*["wheat","steelblue"]*/} // android
                                  //@ts-ignore
                                  size={'large'} //android
                                  enabled={true} //android
                              />
                            }
                        />
                      </View>
                  )

              }

            </SafeAreaView>
        );
    }
    ;

    export const itemContainer_Style_Root = StyleSheet.create({
        itemContainer_Style: {
            // width: windowWidth,
            // flex: 9.4, //9,//9.4,
            backgroundColor: '#FFF',
        },
    });

    const notificationStyles = StyleSheet.create({});

    export default Catalog_Home_Page;
