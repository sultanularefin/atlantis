import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
import {baseInterface} from '../../../interfaces/baseInterface.ts';

/*import {
  Code,
  CodeType,
} from 'react-native-vision-camera/src/types/CodeScanner.ts';*/
import {old_scan_result_data_interface} from '../../../interfaces/scan/scan_interfaces.ts';
import {
  get_Detail_By_User_ID_server_Token,
  User_BY_UserID,
} from '../../../interfaces/user/user_data.ts';

export interface todo__State_Interface extends baseInterface {
  user_Data_By_ID: get_Detail_By_User_ID_server_Token;
}

const initialState: todo__State_Interface = {
  user_Data_By_ID: {
    user: {
      first_name: 'user_first_name',
      last_name: 'last_name',
    },
  } as get_Detail_By_User_ID_server_Token,
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

export const select_Logger_Data_BY_ID = (state: RootState) =>
  state.auth_Reducer.user_Data_By_ID;

export default auth_Slice.reducer;
