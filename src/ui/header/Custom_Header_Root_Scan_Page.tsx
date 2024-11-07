import React from 'react';

import {Pressable, Text, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import {useAppSelector} from '../../appStore/app/hooks';
import {old_scan_result_data_interface} from '../../interfaces/scan/scan_interfaces.ts';
import {all_items_where_scan_worked} from '../../appStore/features/scan/scan_Slice.ts';

export interface Custom_Header_Root_Scan_Page_Props {
  page_title: string;
  comp_Height: number;
  total_Width: number;
  read_all_Button_Pressed: () => void;
  save_before_Leave: () => void;
  show_back_button: boolean;
}

const Custom_Header_Root_Scan_Page: React.FC<
  Custom_Header_Root_Scan_Page_Props
> = ({
  page_title,
  comp_Height,
  total_Width,
  read_all_Button_Pressed,
  save_before_Leave,
  show_back_button,
}) => {
  const read_all_Button_Pressed_2 = async () => {
    // return
    await read_all_Button_Pressed();
  };

  const save_before_Leave_2 = async () => {
    // return
    await save_before_Leave();
  };
  const all_scanned_items: old_scan_result_data_interface[] = useAppSelector(
    all_items_where_scan_worked,
  );

  const back_Button_width = total_Width / 8;

  return (
    <View
      style={{
        height: comp_Height,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'tomato',
        width: total_Width,
      }}>
      <View
        style={{
          // flex: 1,
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flex: 10,
        }}>
        {/*partner name and image starts here*/}

        {/*row begins here*/}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'teal',
            flex: 7,
          }}>
          {/*back button begins here...*/}

          {!show_back_button ? (
            <View
              style={{
                width: back_Button_width,
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', // 16
                // paddingStart: 12,  // 16
                flex: 1.5, // 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.5 = 6.5; +3
              }}></View>
          ) : (
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
                  width: back_Button_width,
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // 16
                  // paddingStart: 12,  // 16
                  flex: 1.5, // 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.5 = 6.5; +3
                },
              ]}
              onPress={() => {
                save_before_Leave_2();
              }}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </Pressable>
          )}

          {/*back button ends here...*/}

          {/*partner name and image starts here*/}

          <View
            style={{
              // width: total_Width/1.8,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              // backgroundColor: 'red',
              flex: 5.5, // 5.3+1.2 = 6.5;
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: back_Button_width,
                // backgroundColor: 'blue',
                height: '100%',
                alignItems: 'center',
                flex: 1.5, // 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.2 = 6.5;
              }}>
              {all_scanned_items.length === 0 ? null : (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: back_Button_width * 0.7,
                    // backgroundColor: 'blue',
                    height: back_Button_width * 0.7,
                    alignItems: 'center',
                    // flex: 1.5// 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.2 = 6.5;
                    backgroundColor: 'dodgerblue',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      // color: 'blue',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      fontSize: 14,
                    }}>
                    {all_scanned_items.length}
                  </Text>
                </View>
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'gold',
                flex: 4, // 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.2 = 6.5;
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  color: 'white',
                  letterSpacing: 1.1,
                }}>
                {page_title.length < 18
                  ? page_title
                  : `${page_title.substring(0, 15)}...`}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // width: total_Width/5,
              // backgroundColor: 'tomato',
              alignItems: 'center',
              flex: 3, // 1.5+ 3.8 = 5.3 ;;; flex:5.3, // 5.3+1.2 = 6.5; +3
            }}>
            <Pressable
              onPress={read_all_Button_Pressed_2}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'lightsteelblue' : 'transparent',
                  // width: back_Button_width,
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // 16
                  // paddingStart: 12,  // 16
                  width: '100%',
                },
              ]}>
              {all_scanned_items.length === 0 ? null : (
                <Text
                  style={{
                    fontSize: 15,
                    // fontWeight: 'bold',
                    alignSelf: 'center',
                    // color: 'white',
                    color: 'black',
                  }}>
                  Remove All
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
      {/*</View>*/}
    </View>
  );
};
export default Custom_Header_Root_Scan_Page;
