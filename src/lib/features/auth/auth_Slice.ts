import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
// import {baseInterface} from '../../../interfaces/baseInterface.ts';

import {old_scan_result_data_interface} from '../../../interfaces/scan/scan_interfaces.ts';
import {
  get_Detail_By_User_ID_server_Token,
  User_BY_UserID,
} from '../../../interfaces/user/user_data.ts';
import {Region} from 'react-native-maps';
import {

  longitude_Latitude_Delta_Interface,
} from '../../../interfaces/location/location.ts';

export interface todo__State_Interface /*extends baseInterface*/ {
  user_Data_By_ID: get_Detail_By_User_ID_server_Token;
  map_Position_Respective_to_Driver: Region,
}


const longitude_Latitude_Delta_For_Few_Blocks_In_Dhaka: longitude_Latitude_Delta_Interface = {

  longitudeDelta: 0.0421,
  latitudeDelta: 0.0922,
};


const initialState: todo__State_Interface = {
  user_Data_By_ID: {
    user: {
      first_name: 'user_first_name',
      last_name: 'last_name',
    },
  } as get_Detail_By_User_ID_server_Token,
  map_Position_Respective_to_Driver: {
    longitude: 0,//temp_One_Order_Details.order.destination_addresses[0].location[1],

    latitude: 20,//temp_One_Order_Details.order.destination_addresses[0].location[0],
    // longitudeDelta: 0.0421,
    // latitudeDelta: 0.0922,
    ...longitude_Latitude_Delta_For_Few_Blocks_In_Dhaka,

  },
};

const initial_State0 = initialState;

const auth_Slice = createSlice({
  name: 'auth_Slice',
  initialState,
  reducers: {
    // delete_all_scan_items: delete_all_scan_items_2,
    // get_all_scan_items: get_all__scan__items_2,
    // update_scanning_state: update_scanning_state_2,
    // delete_one_scanned_item: delete_one_scanned_item_2,
    // delete_one_scanned_item_From_Scanning_Page: delete_one_scanned_item_From_Scanning_Page_2,
  },
  extraReducers: (builder) => {

  },
});

export const {
  // get_all_scan_items,
  // update_scanning_state,
  //
  // // delete begins here
  // delete_all_scan_items,
  // delete_one_scanned_item,
  // delete_one_scanned_item_From_Scanning_Page,
} = auth_Slice.actions;

/*export const select_logger_person_data = (state: RootState) =>
  state.auth_Reducer;*/

export const select_Logger_Data_BY_ID = (state: RootState) => state.auth_Reducer.user_Data_By_ID;
export const select_Map_Region_Respective_to_Driver_Location = (state: RootState) => state.auth_Reducer.map_Position_Respective_to_Driver;

export default auth_Slice.reducer;
