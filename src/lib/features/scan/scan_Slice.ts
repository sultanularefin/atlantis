import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../../app/store';
import {baseInterface} from '../../../interfaces/baseInterface.ts';

import {
  Code,
  CodeType,
} from 'react-native-vision-camera/src/types/CodeScanner.ts';
import {old_scan_result_data_interface} from '../../../interfaces/scan/scan_interfaces.ts';

export interface todo__State_Interface extends baseInterface {
  scan_Items: old_scan_result_data_interface[];

  current_Item: Code[];
  scanning_state: boolean;
  current_Item_Scan_Success: boolean;
}

const initialState: todo__State_Interface = {
  api_Inovocation_Status: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  isComplete: false,

  scan_Items: [],

  current_Item: [],
  scanning_state: true,
  current_Item_Scan_Success: false,
};

const initial_State0 = initialState;


const delete_one_scanned_item_From_Scanning_Page_2  = (
    state: any,
    action: PayloadAction<boolean>,
) => {


  const temp_current_item = state.current_Item;


  const old_scan_items = state.scan_Items;

  state.scan_Items = old_scan_items.filter(
      (one_todo: old_scan_result_data_interface) => one_todo.value !== temp_current_item[0].value,
  ); // put here thus



  state.scanning_state = true;
  state.current_Item_Scan_Success = false;

  state.current_Item =[];
  // return 1;


};



const delete_one_scanned_item_2 = (
  state: any,
  action: PayloadAction<old_scan_result_data_interface>,
) => {


  const old_scan_items = state.scan_Items;



  state.scan_Items = old_scan_items.filter(
    (one_todo: old_scan_result_data_interface) => one_todo.value !== action.payload.value,
  ); // put here thus


  state.current_Item = [];
  // return 1;
};

const update_scanning_state_2 = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  if (action.payload) {
    state.scanning_state = true;
    state.current_Item_Scan_Success = false;


  } else {
    state.scanning_state = false;
    state.current_Item_Scan_Success = false;
  }
};

const get_all__scan__items_2 = (state: any, action: PayloadAction<boolean>) => {

};

const delete_all_scan_items_2 = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  state.scan_Items = [];
  state.current_Item = [];
};

const current_scan_result_found_and_update_2 = (
  state: any,
  action: PayloadAction<Code[]>,
) => {
  const found_Code: Code[] = action.payload;



  const new_scan_item: old_scan_result_data_interface = {
    type: found_Code[0]?.type,
    value: found_Code[0]?.value,
  };

  const old_items_temp = state.scan_Items;

  if (old_items_temp.length > 0) {
    const hasName = old_items_temp.some((obj:old_scan_result_data_interface) => obj.value === new_scan_item.value);
    if(!hasName){
      old_items_temp.unshift(new_scan_item);
      state.scan_Items = old_items_temp;
    }

  } else {

    const hasName = old_items_temp.some((obj:old_scan_result_data_interface) => obj.value === new_scan_item.value);
    if(!hasName){

      old_items_temp.push(new_scan_item);
      state.scan_Items = old_items_temp;
    }

  }

  state.current_Item = found_Code;

  state.scanning_state = false;
  state.current_Item_Scan_Success = true;
};

const scan_Slice = createSlice({
  name: 'scan_Slice',
  initialState,
  reducers: {
    current_scan_result_found_and_update:
      current_scan_result_found_and_update_2,
    delete_all_scan_items: delete_all_scan_items_2,
    get_all_scan_items: get_all__scan__items_2,
    update_scanning_state: update_scanning_state_2,
    delete_one_scanned_item: delete_one_scanned_item_2,
    delete_one_scanned_item_From_Scanning_Page: delete_one_scanned_item_From_Scanning_Page_2,
  },
  extraReducers: builder => {},
});

export const {
  current_scan_result_found_and_update,

  get_all_scan_items,
  update_scanning_state,

  // delete begins here
  delete_all_scan_items,
  delete_one_scanned_item,
  delete_one_scanned_item_From_Scanning_Page,

  // delete ends here
} = scan_Slice.actions;

export const select_logger_person_data = (state: RootState) =>
  state.scan_Reducer;

export const current_scanning_state_State = (state: RootState) =>
  state.scan_Reducer.scanning_state;

export const current_Item_Scan_Success_success = (state: RootState) =>
  state.scan_Reducer.current_Item_Scan_Success;

export const current_Item_When_Scan_Succeeded = (state: RootState) =>
  state.scan_Reducer.current_Item;

export const all_items_where_scan_worked = (state: RootState) =>
  state.scan_Reducer.scan_Items;

export default scan_Slice.reducer;
