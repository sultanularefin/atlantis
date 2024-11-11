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
  FlatList, StatusBar,
} from 'react-native';

import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import Snackbar from 'react-native-snackbar';
import {useAppDispatch, useAppSelector} from '../../lib/app/hooks';

import No_More_Items from '../comps/No_More_Items.tsx';

import List_Empty_Comp from '../comps/List_Empty_Comp.tsx';

import FloatingButton_Scan_New from '../floating_comp/FloatingButton_Scan_New.tsx';
import {old_scan_result_data_interface} from '../../interfaces/scan/scan_interfaces.ts';
/*
import {
  all_items_where_scan_worked,
  delete_all_scan_items,
} from '../../lib/features/scan/scan_Slice.ts';
*/

// import Custom_Header_Root_Scan_Page from '../header/Custom_Header_Root_Scan_Page.tsx';
import Indicator_Common from '../indicator/Indicator_Common.tsx';
// import One_Scan_Item from '../list_comp/One_Scan_Item.tsx';
import {useGetProductsQuery} from '../../lib/features/products/productsApiSlice.ts';
import Focus_Aware_Status_Bar from '../header/Focus_Aware_Status_Bar.tsx';
import {
  ukbd_navy_blue,
  ukbd_place_holder_TextColor,
} from '../ui_utils/important_Colors.ts';
import Header_DashBoard_Home from '../header/Header_DashBoard_Home.tsx';
import Home_Item from '../home_comp/Home_Item.tsx';
import {One_Product_for_Home_Page_Interface} from '../../interfaces/products/product.ts';
import {select_Shipped_From_State_Or_Delivery_Currency} from '../../lib/features/products/product_Slice.ts';
import {monetary_Unit_Interface} from '../ui_utils/localization_utils.ts';
import {home_page_product_limit} from '../../config/business_constants.ts';

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
/*  const all_scanned_items: old_scan_result_data_interface[] = useAppSelector(
    all_items_where_scan_worked,
  );*/

  const {
    data: home_products,
    isLoading: is_home_products_Loading,
    isError: home_products_load_Error,
  } = useGetProductsQuery({
    limit: home_page_product_limit,
    // offset: 1,
  });

  // console.log("home_products: ",home_products);
  // console.log("is_home_products_Loading: ",is_home_products_Loading);
  // console.log("home_products_load_Error: ",home_products_load_Error);

  const List_Footer_Comp_32 = () => (
    <No_More_Items
      first_String={'No More '}
      last_String={' Found.'}
      highlighted_String={"Scanned Item's"}
    />
  );

  const save__Before_Close_In_Notifications_Page = async () => {};

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

 /* const delete_all_Button_Pressed_0 = /!*async*!/ () => {
    dispatch(delete_all_scan_items(true));

    return;
  };*/

  const comp_Height = deviceHeight / 10;
  const header__Height = deviceHeight / 16;

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

  const displayWidth = useWindowDimensions().width;
  const displayHeight = useWindowDimensions().height;
  const Home_Page_FlatList_Ref = useRef<FlatList<any>>(null);

  const comp_Height_1 = displayHeight / 3.5;
  // comp_Height_1 = (displayHeight / 2); GOOD FOR ANDROID physical device
  // comp_Height_1 = (displayHeight / 2.5); GOOD FOR iPhone simulators

  const Home_Each_Item_Width = displayWidth / 2.1;
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


  const header_Home_Height = displayHeight / 15;
  return (
    <SafeAreaView
      style={
        // styles.container,
        {
          flex: 10,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          display: 'flex',
          // height: '100%',

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
        }}>
        <Header_DashBoard_Home
          comp_Height={header_Home_Height}
          nav={navigation}
          comp_Width={displayWidth}
          // exchang_Rage={exchange_Rate}
        />
      </View>

      <View
        style={{
          ...itemContainer_Style_Root.itemContainer_Style,
          width: displayWidth,
          paddingTop: 10,
        }}>

        {

          (is_home_products_Loading ) && (

            <Indicator_Common
              color={ukbd_navy_blue}
            />
          )
        }
        <FlatList
          style={
            {
            }}
          contentContainerStyle={{
            // marginTop: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            // backgroundColor: 'gold',
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
          /*getItemLayout={(data, index) => ({

                            length: displayWidth,
                            offset: displayWidth * index,
                            index


                        }
                    )}*/
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
          /*
                    getItemCount={(data) => data.length}
                    getItem={(data2, index11) => {
                      const item = data2[index11];
                      return {
                        ...item
                      };
                    }}

                    */

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
          // removeClippedSubviews

          // ItemSeparatorComponent={item_Separator_Component}
        /*  refreshControl={
            <RefreshControl
              refreshing={refreshingState}
              onRefresh={onRefresh}
            />
          }*/


          refreshControl={
            <RefreshControl
              refreshing={refreshingState}
              onRefresh={onRefresh}
              title={"Refreshing"}// ios
              titleColor={'blue'} // ios
              tintColor={'lightskyblue'}// ios
              colors={['dimgrey']/*["wheat","steelblue"]*/} // android
              //@ts-ignore
              size={'large'} //android
              enabled={true} //android

            />
          }
        />
      </View>


    </SafeAreaView>
  );
};

export const itemContainer_Style_Root = StyleSheet.create({
  itemContainer_Style: {
    // width: windowWidth,
    flex: 9.4, //9,//9.4,
    backgroundColor: '#FFF',
  },
});

const notificationStyles = StyleSheet.create({});

export default Catalog_Home_Page;
