import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

// import {RootState} from "../app/store";

// import {baseInterface} from "./baseInterface";
// import {appStatic, base_URL} from "../../utils_server/server_settings";
// import {single_Order_Detail_Interface} from "../interfaces_Slice/single_Order_Detail_Interface";
import {Region} from 'react-native-maps';
// import {ukBD_London_Store_Region} from "../../ui/screens/Order_Tracking_Page";
import {LatLng} from 'react-native-maps/lib/sharedTypes';
// import {path_London_BD} from "../../ui/components/tracking/map_Constraints";
// import {Doc} from "../interfaces_Slice/product_Related_Interfaces";

export interface payment_Intent_Response_Interface {
  // export interface Root {
  client_secret: string;
  payment_intent_id: string;
  payment_method: string;
  success: boolean;
  // }
}

/*import {
    // add_Item_To_Cart_Payload_Final_Interface,
    // add_Item_To_Cart_Payload_Interface,
    add_Item_To_Cart_Response_Interface,
    Delivery_And_Payments_Page_SubComp_interface,
    local_Cart_Item
} from "./product_Slice";*/

// import {Payment_GateWay_Response_Root, Stripe_setup_Intent_Response_Root} from "../interfaces_Slice/payment_Related";
// import { payload_For_Payment_GateWay_Interface} from "./authSlice";
/*import {
    BannerImgArray1,
    BannerImgArray2,
    BannerImgArray3,
    BannerTextArray,
    Cart_Order_Invoice_Root,
    HomeBannerImage,
    LanguagesSupported,
    OrderPayment,
    PriceFormulaInput,
    Store,
    StoreDeliveryTime,
    StoreTime,
    TableSettingDetail,
    Vehicle
} from "../interfaces_Slice/cart_Response_Interfaces";*/

export interface stripe_Payment_Intent_API_Payload_Interface {
  type: number; //7,
  user_id: string; //single_Order_Payload.userID,
  server_token: string; //single_Order_Payload.server_token,
  amount: number; // for wallet payemtn
  payment_id: string; //"",
  order_payment_id: string; //"",

  payment_currency: string;
  view_price_currency: string; //number,

  exchange_rate_website: number;

  jwt_token: string;

  //order_id: single_Order_Payload.orderId,

  payment_method: string;
}

export interface stripe_Setup_Intent_Card_Payload_Interface {
  payment_id: string; //payment_GateWay_Response_Stripe.payment_gateway[0]._id,

  server_token: string; //localStorage.user.server_token,//"",//"DHily2IzpnE3kOsiwleDGBWc37ZuePjF",
  user_id: string; //localStorage.user._id,//
  is_web?: boolean; //false,
  // url: '/checkout'

  type: number; // 7,static let TYPE_USER = 7
}

export interface add_Item_To_Cart_Payload_Final_Interface {
  /*  user_id?: null|string, // add_To_Cart_Item__Payload?.user_id ? add_To_Cart_Item__Payload.user_id : null,
        server_token?: null|string, //add_To_Cart_Item__Payload?.server_token ?add_To_Cart_Item__Payload.server_token: null,
        user_type_id?: null,
        cart_id?: string,//cart_id ? cart_id : null,*/

  user_id: null | string; // add_To_Cart_Item__Payload?.user_id ? add_To_Cart_Item__Payload.user_id : null,
  server_token: null | string; //add_To_Cart_Item__Payload?.server_token ?add_To_Cart_Item__Payload.server_token: null,
  user_type_id?: null;
  cart_id: null | string; //cart_id ? cart_id : null,

  user_type: number; // 1,
  items: local_Cart_Item[];

  total_Price: number;

  store_id: string; //params_data.item.store_id,

  city_ID: string; /// params_data.city._id,
  country_ID: string; // params_data.country._id,
  cart_unique_token: string; //getUniqCartId(),

  city: string; //add_To_Cart_Item__Payload.city_ID,
  country: string; // add_To_Cart_Item__Payload.country_ID,

  order_details: local_Cart_Item[]; //orderDetails,//[...orderDetails, d2].filter(v => v.quantity > 0),
  destination_addresses: {
    address: string; //appStatic.address,
    address_type: string; //"destination",
    city: string; //appStatic.city,
    delivery_status: number; //0,
    flat_no: string; //"",
    landmark: string; //"",
    location: [number, number]; // [appStatic.latitude, appStatic.longitude],
    note: string; //"",
    street: string; //"",
    user_details: {
      country_phone_code: string;
      email: string;
      name: string;
      phone: string;
    };
    user_type: 1;
  }[];

  pickup_addresses: {
    delivery_status: number; //0,
    address_type: string; //"pickup",
    address: string; //add_To_Cart_Item__Payload.store_Address,
    city: string; // add_To_Cart_Item__Payload.store_City_ID,
    location: [number, number]; //add_To_Cart_Item__Payload.store_Location,
    note: string; //"",
    user_details: {
      name: string; //add_To_Cart_Item__Payload.store_User_details_Name,
      country_phone_code: string; //add_To_Cart_Item__Payload.store_User_details_Country,
      phone: string; // add_To_Cart_Item__Payload.store_User_details_Phone,
      email: string; //add_To_Cart_Item__Payload.store_User_details_Email,
    };
  }[];

  total_cart_price: number; // cartPrice,
  total_item_tax: number; // 0,
  tax_details: number; // 0,
  is_use_item_tax: number; // 0,
  is_tax_included: number; // 0,
  table_no: number; // 0,
  no_of_persons: number; // 0,
  booking_type: number; // 0,
  delivery_type: number; // 0,
  table_id: null;
  order_start_at: number; // 0,
  order_start_at2: number; // 0
}

export interface add_Item_To_Cart_Payload_Interface {
  items: local_Cart_Item[]; //local_Ca
  total_Price: number;

  store_id: string; //params_data.item.store_id,

  city_ID: string; /// params_data.city._id,
  country_ID: string; // params_data.country._id,
  cart_unique_token: string; //getUniqCartId(),

  cart_id: null | string; //cart_id ? cart_id : null,
  server_token: null | string;
  user_id: null | string;

  user_type_id: null | number;

  /*
      user_type_id: null,
      user_id: add_To_Cart_Item__Payload?.user_id ? add_To_Cart_Item__Payload.user_id : null,
      server_token: add_To_Cart_Item__Payload?.server_token ?add_To_Cart_Item__Payload.server_token: null,
      cart_id: add_To_Cart_Item__Payload?.cart_id
          ?add_To_Cart_Item__Payload.cart_id
          : null,
      */

  /*
      store_details,
      product_details,
      city,
      country,

      */
  // q: q
  quantity: number;

  // user_details, or customer details ---
  country_phone_code: string;
  email: string;
  name: string;
  phone: string;

  // store_details: Store,

  /*    country_phone_code: user_details ? user_details.country_phone_code : '',
          email: user_details ? user_details.email : '',
          name: user_details ? user_details.name : '',
          phone: user_details ? user_details.phone : ''*/

  store_Address: string;
  store_City_ID: string;
  store_Location: [number, number]; //number[],
  store_address_Note: '';

  store_User_details_Name: string;
  store_User_details_Country: string;
  store_User_details_Phone: string;
  store_User_details_Email: string;

  /*
      "address": add_To_Cart_Item__Payload.store_details.address,
      "city": add_To_Cart_Item__Payload.store_details.city_id,
      "location": add_To_Cart_Item__Payload.store_details.location,
      "note": "",
      "user_details": {
          "name": add_To_Cart_Item__Payload.store_details.name,
          "country_phone_code": add_To_Cart_Item__Payload.store_details.country_phone_code,
          "phone": add_To_Cart_Item__Payload.store_details.phone,
          "email": add_To_Cart_Item__Payload.store_details.email
      }

      */
}

// import axios, {isCancel, AxiosError} from 'axios';
// import {CardFormView} from "@stripe/stripe-react-native";
// import {CardBrand} from "@stripe/stripe-react-native/lib/typescript/src/types/Token";
import {RootState} from '../../app/store.ts';
import {local_Cart_Item} from '../../../interfaces/products/product.ts';
// import {Region} from 'react-native-maps';

export const BD_Store_Location = {
  latitude: 23.791,
  longitude: 90.401,
};

export const London_UK_Store_Location = {
  latitude: 51.502,
  longitude: -0.122,
}; //London
export const new_York_City_Latitude_Longitude = {
  latitude: 40.714,
  longitude: -74.006,
};
export const ukBD_London_Store_Region: Region = {
  // latitude: single_Order_Details.order.destination_addresses[0].location[0],
  // longitude: single_Order_Details.order.destination_addresses[0].location[1],

  // latitude: path_London_BD[1].lat,
  // longitude: path_London_BD[1].lng,

  // latitude: 40.714,
  // longitude: -74.006,
  ...London_UK_Store_Location,

  // ...new_York_City_Latitude_Longitude,

  longitudeDelta: 0.0421,
  latitudeDelta: 0.0922,
};

export interface longitude_Latitude_Delta_Interface {
  longitudeDelta: number; //0.0421,
  latitudeDelta: number; // 0.0922,
}

export const longitude_Latitude_Delta_For_Few_Blocks_In_Dhaka: longitude_Latitude_Delta_Interface =
  {
    longitudeDelta: 0.0421,
    latitudeDelta: 0.0922,
  };

export interface get_One_Order_Detail_Payload__Interface {
  userID: string;
  orderId: string;
  server_token: string;
  jwt_token: string;
}

export interface order_Load_Error_Object_Interface {
  // {"success":false,"error_code":652,"pages":0,"status_phrase":"Order not found."}
  success: boolean;
  error_code: number;
  pages: number;
  status_phrase: string;
}

export interface single_Order_Error_Interface {
  error_code: number; // 652,
  pages: number; // 0,
  status_phrase: string; // "Order not found.",
  success: boolean; //false
}

export interface One_Product_Status__For_Displaying_Interface {
  status_Name: string;
  emo_image_resource_Link: string; //ImageURISource,//string,
  index: number;
  passed: boolean;
}

export interface order_Cart_Invoice_Response_Interface {
  error_code: number;
  status_phrase: string;
  success: boolean;
  /*{
          "error_code": 967,
          "status_phrase": "Your delivery address is out of store defined area.",
          "success": false
      }*/
}

export interface order_Cart_Invoice_API_Payload_Interface {
  // const payload_For_getting_Order_Cart_Invoice:any ={

  /*
      try {
          let total_cart_price = 0;
          // let total_item_count = 0;

          for (let i of params_data.items) {
      // total_item_count = (total_item_count + i.quantity) ;
      // total_cart_price = (total_cart_price + (i.quantity * i.price))
      total_cart_price = (total_cart_price + (i.quantity * i.view_price))
  }
          */
  // let user_details = getUserData({ type: 'get' });
  // const parameters = {
  booking_fees: number; //0,
  cart_unique_token: string; //unique_Cart_ID,  //get_Unique_Cart_ID
  cart_id: string; //"",
  city_id: string; //city_ID,//"",
  country_id: string; //"",
  is_tax_included: boolean; //false,
  is_use_item_tax: boolean; //false,
  is_user_pick_up_order: boolean; //false,
  order_type: number; //7,
  server_token: string; //localStorage.user.server_token,//"",
  store_id: string; //product_Store_ID,//params_data.store._id,
  tax_details: [];
  tip_amount: number; //0,
  total_cart_amount_without_tax: number; //local_Cart_Price,
  total_cart_price: number; // total_Price_with_including_handling_shipping_etc,
  total_distance: number; //0,
  // "total_item_count":total_item_count,
  total_time: number; //0,
  user_id: string; // localStorage.user._id,//"",
  vehicle_id: null;
  order_details: local_Cart_Item[]; //local_Cart,//params_data.items

  jwt_token: string;
}

export const initial__Product_Order_Status_array_for_Displaying: One_Product_Status__For_Displaying_Interface[] =
  [
    {
      status_Name: 'accepted',

      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🛫', //require("../../../WEXPREZ_App_Assets/icons_/ALL_Icon.png"),

      index: 0,
      passed: false,
    },
    {
      status_Name: 'prepared',

      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🛫', //require("../../../WEXPREZ_App_Assets/icons_/Happy-Agree3d.png"),

      index: 1,
      passed: false,
    },
    {
      status_Name: 'waytoBd',
      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🛬', //require("../../../WEXPREZ_App_Assets/icons_/Angry_3C.png"),

      index: 2,
      passed: false,
    },

    {
      status_Name: 'bdCustoms',
      // eslint-disable-next-line global-require
      emo_image_resource_Link: '📦', //Package,//require("../../../WEXPREZ_App_Assets/icons_/Nutral3F.png"),

      index: 4,
      passed: false,
    },
    {
      status_Name: 'wareHouse',
      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🏛️', //Package,//require("../../../WEXPREZ_App_Assets/icons_/Nutral3F.png"),

      index: 5,
      passed: false,
    },
    {
      status_Name: 'wayToYou',
      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🚚', //Package,//require("../../../WEXPREZ_App_Assets/icons_/Nutral3F.png"),

      // 🚙🚚
      index: 6,
      passed: false,
    },

    {
      status_Name: 'Delivered',
      // eslint-disable-next-line global-require
      emo_image_resource_Link: '🛍️', //Package,//require("../../../WEXPREZ_App_Assets/icons_/Nutral3F.png"),

      index: 7,
      passed: false,
    },
  ];

//      accepted: true,
//      prepared: false,
//      waytoBd: false,
//      bdCustoms: false,
//      wareHouse: false,
//      wayToYou: false,
//      Delivered: false,

const initial_Single_Order_Error = {
  success: false,
  error_code: 0,
  pages: 0,
  status_phrase: '',
};

const empty_Single_Order_Detail_Object = {
  success: false, //boolean;
  message: 0, //number;
  is_confirmation_code_required_at_complete_delivery: false, //boolean;
  order: {
    _id: '', // string;
    store_id: '', // string;
    cart_id: '', // string;
    order_payment_id: '', // string;
    timezone: '', // string;
    order_change: false, // boolean;
    user_order_change: false, // boolean;
    is_allow_contactless_delivery: false, // boolean;
    destination_addresses: [], //DestinationAddress[];
    user_id: '', // string;
    order_type: 0, // number;
    order_type_id: '', // string;
    delivery_type: 0, // number;
    order_status_id: 0, // number;
    order_status: 0, // number;
    order_status_manage_id: 0, // number;
    image_url: ['', ''], //any[];
    is_allow_pickup_order_verification: false, // boolean;
    is_bring_change: false, // boolean;
    table_id: '', // string;
    is_schedule_order_informed_to_store: false, // boolean;
    confirmation_code_for_pick_up_delivery: 0, // number;
    confirmation_code_for_complete_delivery: 0, // number;
    store_notify: 0, // number;
    cancel_reason: '', // string;
    user_detail: {
      _id: '', //string;
      image_url: '', //string;
      email: '', //string;
      name: '', //string;
      phone: '', //string;
    },
    store_detail: {
      _id: '', //string;
      admin_type: 0, // number;
      store_type: 0, // number;
      customer_id: '', //string;
      country_id: '', //string;
      city_id: '', //string;
      store_type_id: '', // any; //store_type_id?: any;
      franchise_id: '', //any; //franchise_id?: any;
      store_delivery_id: '', //string;
      payment_intent_id: '', //string;
      name: '', //string;
      delivery_locations: [], //any[];
      email: '', //string;
      otp: '', //string;
      country_phone_code: '', //string;
      phone: '', //string;
      social_ids: [], //any[];
      password: '', //string;
      address: '', //string;
      cancellation_charge_apply_from: 0, // number;
      cancellation_charge_apply_till: 0, // number;
      firebase_token: '', //string;
      uid: '', //string;
      location: [], //number[];
      image_url: '', //string;
      theme_number: 0, // number;
      price_rating: 0, // number;
      is_store_busy: false, // boolean;
      is_business: false, // boolean;
      is_approved: false, // boolean;
      is_edit_menu: false, // boolean;
      is_edit_menu_price: false, // boolean;
      is_edit_menu_image: false, // boolean;
      is_email_verified: false, // boolean;
      is_phone_number_verified: false, // boolean;
      is_document_uploaded: false, // boolean;
      is_use_item_tax: false, // boolean;
      item_tax: 0, // number;
      min_order_price: 0, // number;
      max_item_quantity_add_by_user: 0, // number;
      is_order_cancellation_charge_apply: false, // boolean;
      order_cancellation_charge_for_above_order_price: 0, // number;
      order_cancellation_charge_type: 0, // number;
      order_cancellation_charge_value: 0, // number;
      is_taking_schedule_order: false, // boolean;
      inform_schedule_order_before_min: 0, // number;
      schedule_order_create_after_minute: 0, // number;
      is_ask_estimated_time_for_ready_order: false, // boolean;
      is_provide_pickup_delivery: false, // boolean;
      is_provide_delivery: false, // boolean;
      is_provide_delivery_anywhere: false, // boolean;
      delivery_radius: 0, // number;
      is_store_pay_delivery_fees: false, // boolean;
      free_delivery_for_above_order_price: 0, // number;
      free_delivery_within_radius: 0, // number;
      delivery_time: 0, // number;
      delivery_time_max: 0, // number;
      jwt_token: '', //string;
      user_rate: 0, // number;
      user_rate_count: 0, // number;
      provider_rate: 0, // number;
      provider_rate_count: 0, // number;
      admin_profit_mode_on_store: 0, // number;
      admin_profit_value_on_store: 0, // number;
      is_visible: false, // boolean;
      wallet: 0, // number;
      wallet_currency_code: '', //string;
      bank_id: '', //string;
      account_id: '', //string;
      is_store_can_add_provider: false, // boolean;
      is_store_can_complete_order: false, // boolean;
      slot_difference: 0, // number;
      store_time: [], // StoreTime[];
      is_store_set_schedule_delivery_time: false, // boolean;
      store_delivery_time: [], //StoreDeliveryTime[];
      website_url: '', //string;
      slogan: '', //string;
      offers: [], //any[];
      famous_products_tags: [], // any[];
      languages_supported: [], //LanguagesSupported[];
      comments: '', //string;
      referral_code: '', //string;
      total_referrals: 0, // number;
      is_referral: false, // boolean;
      device_type: '', //string;
      server_token: '', //string;
      login_by: '', //string;
      taxes: [], //any[];
      is_tax_included: false, // boolean;
      created_at: new Date(), //;
      updated_at: new Date(), // Date;
      unique_id: 0, // number;
      __v: 0, // number;
      branchio_url: '', //string;
      formula_string: '', //string;
      price_formula_input: [], //PriceFormulaInput[];
      banner_img_array1: [], //BannerImgArray1[];
      banner_img_array2: [], //BannerImgArray2[];
      banner_img_array3: [], //BannerImgArray3[];
      banner_text_array: [], // BannerTextArray[];
      delivery_currency_code: '', //string;
      bkash_number: '', //string;
      is_editor: false, // boolean;
      device_token: '', //string;
      home_banner_images: [], // HomeBannerImage[];
      store_tax_details: [], // any[];
    },
    provider_detail: ['', ''], //any[];
    total: 0, // number;
    is_user_pick_up_order: false, // boolean;
    is_payment_mode_cash: false, // boolean;
    is_paid_from_wallet: false, // boolean;
    is_user_show_invoice: false, // boolean;
    is_provider_show_invoice: false, // boolean;
    is_store_rated_to_provider: false, // boolean;
    is_store_rated_to_user: false, // boolean;
    is_provider_rated_to_store: false, // boolean;
    is_provider_rated_to_user: false, // boolean;
    is_user_rated_to_provider: false, // boolean;
    is_user_rated_to_store: false, // boolean;
    is_schedule_order: false, // boolean;
    date_time: [], //DateTime[];
    completed_date_tag: '', // string;
    completed_date_in_city_timezone: false, //any; //completed_date_in_city_timezone?: any;
    schedule_order_start_at: new Date(), //; //Date;
    schedule_order_start_at2: new Date(), //"", //schedule_order_start_at2?://any;
    schedule_order_server_start_at: new Date(), //; //Date;
    completed_at: new Date(), //; //Date;
    created_at: new Date(), //; //Date;
    updated_at: new Date(), //; //Date;
    city_id: '', // string;
    country_id: '', // string;
    unique_id: 0, // number;
    __v: 0, // number;
    request_id: '', // string;
    order_payment_detail: {
      _id: '', //string;
      cart_id: '', //string;
      store_id: '', //string;
      user_id: '', //string;
      payment_intent_id: '', //string;
      city_id: '', //string;
      capture_amount: 0, //number;
      tip_amount: 0, //number;
      tip_value: 0, //number;
      country_id: '', //string;
      promo_id: '', //any; //promo_id?: any;
      taxes: [], //any[];
      delivery_price_used_type: 0, //number;
      delivery_price_used_type_id: '', //delivery_price_used_type_id?: any;
      currency_code: '', //string;
      admin_currency_code: '', //string;
      order_currency_code: '', //string;
      current_rate: 0, //number;
      wallet_to_admin_current_rate: 0, //number;
      wallet_to_order_current_rate: 0, //number;
      total_distance: 0, //number;
      total_time: 0, //number;
      total_item_count: 0, //number;
      is_distance_unit_mile: false, //boolean;
      service_tax: 0, //number;
      total_service_price: 0, //number;
      total_admin_tax_price: 0, //number;
      total_delivery_price: 0, //number;
      pay_to_provider: 0, //number;
      admin_profit_mode_on_delivery: 0, //number;
      admin_profit_value_on_delivery: 0, //number;
      total_admin_profit_on_delivery: 0, //number;
      total_provider_income: 0, //number;
      item_tax: 0, // number;
      total_cart_price: 0, //number;
      total_store_tax_price: 0, //number;
      total_order_price: 0, //number;
      other_promo_payment_loyalty: 0, //number;
      pay_to_store: 0, //number;
      admin_profit_mode_on_store: 0, //number;
      admin_profit_value_on_store: 0, //number;
      total_admin_profit_on_store: 0, //number;
      total_store_income: 0, //number;
      promo_payment: 0, //number;
      user_pay_payment: 0, //number;
      wallet_payment: 0, //number;
      total_after_wallet_payment: 0, // number;
      remaining_payment: 0, //number;
      total: 0, //number;
      cash_payment: 0, //number;
      card_payment: 0, //number;
      is_paid_from_wallet: false, //boolean;
      is_promo_for_delivery_service: false, //boolean;
      is_payment_mode_cash: false, //boolean;
      is_payment_paid: false, //boolean;
      is_order_price_paid_by_store: false, //boolean;
      is_store_pay_delivery_fees: false, //boolean;
      payment_id: '', //any; //                payment_id?: any;
      is_min_fare_applied: false, //boolean;
      is_transfered_to_store: false, //boolean;
      is_transfered_to_provider: false, //boolean;
      is_user_pick_up_order: false, //boolean;
      is_order_payment_status_set_by_store: false, //boolean;
      is_cancellation_fee: false, //boolean;
      order_cancellation_charge: 0, // number;
      is_order_payment_refund: false, //boolean;
      refund_amount: 0, //number;
      is_provider_income_set_in_wallet: false, //boolean;
      is_store_income_set_in_wallet: false, //boolean;
      provider_income_set_in_wallet: 0, //number;
      store_income_set_in_wallet: 0, //number;
      booking_fees: 0, // number;
      service_taxes: [], //any[];
      completed_date_tag: '', //string;
      completed_date_in_city_timezone: false, //any; //completed_date_in_city_timezone?: any;
      created_at: new Date(), //;
      updated_at: new Date(), // Date;
      unique_id: 0, //number;
      __v: 0, //number;
      invoice_number: '', //string;
      order_id: '', //string;
      order_unique_id: 0, //number;
    },
    cart_detail: {
      _id: '', // string;
      cart_unique_token: '', // string;
      user_id: '', // string;
      user_type: 0, // number;
      user_type_id: '', // string;
      store_id: '', // string;
      order_payment_id: '', // string;
      order_id: '', // string;
      city_id: '', // string;
      total_item_tax: 0, // number;
      delivery_type: 0, // number;
      language: 0, //  number;
      pickup_addresses: [], // PickupAddress[];
      destination_addresses: [], //DestinationAddress2[];
      order_details: [], //OrderDetail[];
      total_item_count: 0, // number;
      total_cart_price: 0, // number;
      is_use_item_tax: false, // boolean;
      is_tax_included: false, // boolean;
      store_taxes: [], //any[];
      created_at: new Date(), //Date;
      updated_at: new Date(), //Date;
      unique_id: 0, //number;
      __v: 0, //number;
      booking_type: 0, //number;
      no_of_persons: 0, //number;
      table_no: 0, //number;
    },
    request_detail: {
      _id: '', // string;
      city_id: '', // string;
      country_id: '', // string;
      timezone: '', // string;
      vehicle_id: '', // string;
      orders: [], //Order2[];
      user_id: '', // string;
      manual_provider_id: '', //                manual_provider_id?: any;
      user_unique_id: 0, // number;
      request_type: 0, // number;
      request_type_id: '', // string;
      user_detail: {
        _id: '', //string;
        image_url: '', //string;
        email: '', //string;
        name: '', //string;
        phone: '', //string;
      },
      // UserDetail2;
      store_detail: {
        _id: '', // string;
        image_url: '', // string;
        email: '', // string;
        name: ['aa', 'bb'], //string[];
        phone: '', //string;
      },
      //StoreDetail2;
      provider_detail: '', //provider_detail?: any;
      delivery_type: 0, // number;
      provider_type: 0, // number;
      provider_type_id: '', //provider_type_id?: any;
      provider_id: '', //provider_id?: any;
      provider_unique_id: 0, // number;
      delivery_status: 0, // number;
      delivery_status_manage_id: 0, // number;
      delivery_status_by: '', //delivery_status_by?: any;
      current_provider: '', //current_provider?: any;
      estimated_time_for_delivery_in_min: 0, // number;
      providers_id_that_rejected_order_request: [], //any[];
      confirmation_code_for_pick_up_delivery: 0, // number;
      confirmation_code_for_complete_delivery: 0, // number;
      is_forced_assigned: false, //boolean;
      pickup_addresses: [], //PickupAddress2[];
      destination_addresses: [], // DestinationAddress3[];
      cancel_reasons: [], //any[];
      date_time: [], //any[];
      completed_date_tag: '', // string;
      completed_date_in_city_timezone: '', //completed_date_in_city_timezone?: any;
      completed_at: '', //                completed_at?: any;
      created_at: new Date(), //;
      updated_at: new Date(), // Date;
      unique_id: 0, // number;
      __v: 0, // number;
    },
    //RequestDetail;
    country_detail: {
      _id: '', //string;
      currency_rate: 0, // number;
      country_name: '', // string;
      country_flag: '', // string;
      country_code: '', // string;
      country_timezone: [], //string[];
      currency_name: '', // string;
      currency_code: '', // string;
      currency_sign: '', // string;
      country_phone_code: '', // string;
      country_code_2: '', // string;
      is_ads_visible: false, // boolean;
      referral_bonus_to_user: 0, // number;
      referral_bonus_to_user_friend: 0, // number;
      no_of_user_use_referral: 0, // number;
      referral_bonus_to_store: 0, // number;
      referral_bonus_to_store_friend: 0, // number;
      no_of_store_use_referral: 0, // number;
      referral_bonus_to_provider: 0, // number;
      referral_bonus_to_provider_friend: 0, // number;
      no_of_provider_use_referral: 0, // number;
      is_business: false, //boolean;
      is_distance_unit_mile: false, //boolean;
      is_referral_user: false, //boolean;
      is_referral_store: false, //boolean;
      is_referral_provider: false, //boolean;
      minimum_phone_number_length: 0, // number;
      maximum_phone_number_length: 0, // number;
      is_auto_transfer_for_store: false, //boolean;
      auto_transfer_day_for_store: 0, // number;
      is_auto_transfer_for_deliveryman: false, //boolean;
      auto_transfer_day_for_deliveryman: 0, // number;
      taxes: [], // any[];
      created_at: new Date(), //;
      updated_at: new Date(), //;
      unique_id: 0, // number;
      __v: 0, // number;
    },
    // CountryDetail;
    payment_gateway_detail: ['', ''], //any[];
    reviews_detail: ['', ''], //any[];
    table_settings_details: {
      _id: '', //string;
      store_id: '', // string;
      is_table_reservation: false, // boolean;
      is_table_reservation_with_order: false, // boolean;
      is_cancellation_charges_for_with_order: false, // boolean;
      is_set_booking_fees: false, // boolean;
      is_cancellation_charges_for_without_order: false, // boolean;
      booking_fees: 0, // number;
      with_order_cancellation_charges: [], // any[];
      without_order_cancellation_charges: [], //  any[];
      table_reservation_time: 0, // number;
      user_come_before_time: 0, // number;
      reservation_max_days: 0, // number;
      reservation_person_min_seat: 0, // number;
      reservation_person_max_seat: 0, // number;
      booking_time: [], // BookingTime[];
      created_at: new Date(), //;
      updated_at: new Date(), // Date;
      unique_id: 0, // number;
      __v: 0, //  number;
    }, //TableSettingsDetails
    // };
    total_order_price: 0, // number;
  },
  server_time: '', //string;
};

export interface marker_Object_Interface {
  coordinate: LatLng;

  place_Name: string;
  color: string;
}

//Cash (inactive), bKash, Credit/Debit Card etc begins here
export interface Payment_Method_Comp_Interface {
  index: number; //0,
  comp_title: string; //"Cash",
  is_Selected: boolean; //true,
  is_Available: boolean;
  extra_Note: string;
}

const Payment_Method_Comps: Payment_Method_Comp_Interface[] = [
  {
    index: 0,
    comp_title: 'Cash',
    is_Selected: true,
    is_Available: false,

    extra_Note: '(Not Available)',
    // done: false,//true,// false,//boolean,//false, made true april 15, saturday, 2023.__
  },
  {
    index: 1,
    comp_title: 'bKash',
    is_Selected: false,
    is_Available: false,
    // done: false,
    extra_Note: '(Not Available)',
  },
  {
    index: 2,
    comp_title: 'Credit/Debit Card',
    is_Selected: false,
    is_Available: false,
    // done: false,
    extra_Note: '',
  },
];

export interface Cart_Order_State_Interface {
  // userName_Password_Login_Response: UKBD_App_Login_Response_With_Password, //email_password_login_responseInterface2;

  // single_Order_Detail: single_Order_Detail_Interface,

  delivery_Status_Array: One_Product_Status__For_Displaying_Interface[];

  single_Order_Detail_Loaded: boolean;

  is_Error_In_Single_Order: boolean;
  single_Order_Detail_Error_Object: order_Load_Error_Object_Interface;

  user_Ordered_From_Location_Region__OR_Map_Center_Location: Region;

  marker_Locations_State: marker_Object_Interface[];

  passed_Index: number;

  payment_Methods: Payment_Method_Comp_Interface[];
  active_Payment_Method_Index: number;

  billing_Address_Finalized_Status: number; // 0 not finalized, 1 finalized, 2 proceed further

  stripe_Payment_Intent_Response_State: payment_Intent_Response_Interface;

  payment_Data_Loaded: boolean;

  // added on 1st june 2023

  cart_Page_Tab_Index: number;

  // Cart_Order_Invoice_Root

  cart_ID: string; // added on june 5th 2023
}

const initialState: Cart_Order_State_Interface = {
  // apiInovocatoinStatus: '',
  // isFetching: false,
  // isSuccess: false,
  // isError: false,
  // errorMessage: '',
  // isComplete: false,

  single_Order_Detail_Loaded: false,

  is_Error_In_Single_Order: false,
  single_Order_Detail_Error_Object: initial_Single_Order_Error,

  // this below are for up--voters--

  // single_Order_Detail: empty_Single_Order_Detail_Object,

  delivery_Status_Array: initial__Product_Order_Status_array_for_Displaying,

  user_Ordered_From_Location_Region__OR_Map_Center_Location: {
    longitude: 0, //temp_One_Order_Details.order.destination_addresses[0].location[1],

    latitude: 0, //temp_One_Order_Details.order.destination_addresses[0].location[0],
    longitudeDelta: 0.0421,

    latitudeDelta: 0.0922,
  },

  marker_Locations_State: [],

  passed_Index: 0,

  // added on april 18, 2023

  // Payment_Method_Comps
  payment_Methods: Payment_Method_Comps,

  active_Payment_Method_Index: 0,

  billing_Address_Finalized_Status: 0, // 0 not finalized, 1 finalized, 2 proceed further

  payment_Data_Loaded: false,

  // added on 1st june 2023

  cart_Page_Tab_Index: 0,

  stripe_Payment_Intent_Response_State: {
    client_secret: '', //string
    payment_intent_id: '', //string
    payment_method: '', //string
    success: false, //boolean
  },

  cart_ID: '',
};

const initailState0 = initialState;

// add_To_Cart_API ends here ---- -5th june 2023---

// get_order_cart_invoice --ends--- here added on 4th june 2023

const update_Cart_Pages_Current_Tab_Index_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  const one_Tab_Index = action.payload; //state.editing_Product_Info;

  state.cart_Page_Tab_Index = one_Tab_Index;

  return;
  // one_Product_Index
};

const update_Billing_Address_Finalized_Status_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  const billing_Address_Finalized_Status = action.payload;

  state.billing_Address_Finalized_Status = billing_Address_Finalized_Status;
};

const update_payment_Method_Comp_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  const new_Index_of_Payment_Methods = action.payload;

  const temp_Payment_Methods = state.payment_Methods;

  // const temp_Old_Active_Payment_Method_Index = state.active_Payment_Method_Index;
  temp_Payment_Methods[new_Index_of_Payment_Methods].is_Selected = true;

  state.active_Payment_Method_Index = new_Index_of_Payment_Methods;
  state.payment_Methods = temp_Payment_Methods;
};

const clear_Previous_Single_Order_Data_2 = (
  state: any,
  action: PayloadAction<null>,
) => {
  state.single_Order_Detail = empty_Single_Order_Detail_Object;

  state.single_Order_Detail_Loaded = false;

  state.is_Error_In_Single_Order = false;
  state.delivery_Status_Array =
    initial__Product_Order_Status_array_for_Displaying;
  state.single_Order_Detail_Error_Object = initial_Single_Order_Error;

  state.user_Ordered_From_Location_Region__OR_Map_Center_Location = {
    longitude: 0, //temp_One_Order_Details.order.destination_addresses[0].location[1],

    latitude: 0, //temp_One_Order_Details.order.destination_addresses[0].location[0],

    longitudeDelta: 0.0421,

    latitudeDelta: 0.0922,
  };

  state.marker_Locations_State = [];

  state.passed_Index = 0;
};

const cart_order_Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear_Previous_Single_Order_Data_1: clear_Previous_Single_Order_Data_2,

    // WHEN YOU ARE ONLINE CLEAR EVERYTHING AS WE WILL ONLY NEED USERID TO GET USER INFORMATION. // added 11th December,2021...

    // update_Delivery_Payment_Page_Active_Index: update_Delivery_Payment_Page_Active_Index_2,

    update_payment_Method_Comp: update_payment_Method_Comp_2,

    update_Billing_Address_Finalized_Status:
      update_Billing_Address_Finalized_Status_2,

    update_Cart_Pages_Current_Tab_Index: update_Cart_Pages_Current_Tab_Index_2,
  },
  extraReducers: (builder) => {},
});

// password_Update_response

export const {
  clear_Previous_Single_Order_Data_1,
  // update_Delivery_Payment_Page_Active_Index,

  update_payment_Method_Comp,

  update_Billing_Address_Finalized_Status,

  update_Cart_Pages_Current_Tab_Index,
} = cart_order_Slice.actions;

export const select_logger_person_data = (state: RootState) =>
  state.cart_order_Reducer;

export const export_Single_Order_Details = (state: RootState) =>
  state.cart_order_Reducer.single_Order_Detail;

export const select_Delivery_Status_Array = (state: RootState) =>
  state.cart_order_Reducer.delivery_Status_Array;

export const select_IS_Single_Order_Loaded = (state: RootState) =>
  state.cart_order_Reducer.single_Order_Detail_Loaded;
export const select_Is_Error_In_Single_Order = (state: RootState) =>
  state.cart_order_Reducer.is_Error_In_Single_Order;
export const select_Single_ORder_Error_OBJect = (state: RootState) =>
  state.cart_order_Reducer.single_Order_Detail_Error_Object;

// single_Order_Detail

// february 14, 2023
export const select_User_Ordered_From_Location_Region = (state: RootState) =>
  state.cart_order_Reducer
    .user_Ordered_From_Location_Region__OR_Map_Center_Location;

export const export_Marker_Locations = (state: RootState) =>
  state.cart_order_Reducer.marker_Locations_State;

export const select_Passed_Index = (state: RootState) =>
  state.cart_order_Reducer.passed_Index;

// added on april 18,2023

export const select_All_Delivery_Payment_Page_Comps = (state: RootState) =>
  state.cart_order_Reducer.Delivery_Payment_Page_Comps;

export const select_Active_Payment_Method_Index = (state: RootState) =>
  state.cart_order_Reducer.active_Payment_Method_Index;
export const select_All_Payment_Method_Comps = (state: RootState) =>
  state.cart_order_Reducer.payment_Methods;

export const select_BillAddress_Finalized_Status = (state: RootState) =>
  state.cart_order_Reducer.billing_Address_Finalized_Status;

export const select_Stripe_Payment_Setup_Response = (state: RootState) =>
  state.cart_order_Reducer.stripe_Payment_setup_Response_State;

export const select_Payment_Data_Loaded_State = (state: RootState) =>
  state.cart_order_Reducer.payment_Data_Loaded;

// added on 1st june 2023
export const select_Cart_Page_Tab_Index = (state: RootState) =>
  state.cart_order_Reducer.cart_Page_Tab_Index;

export const payment_Gateway_Response_State = (state: RootState) =>
  state.cart_order_Reducer.payment_GateWay_Response_State;

// added on 4th june 2023
export const select_Cart_Invoice_Response = (state: RootState) =>
  state.cart_order_Reducer.cart__Order_Invoice_Response_State;

// added on 5th june 2023

export const select_Cart_ID = (state: RootState) =>
  state.cart_order_Reducer.cart_ID;

export const select_Card_Details = (state: RootState) =>
  state.cart_order_Reducer.cart_Details_State;

export const select_Stripe_Payment_Intent_Response = (state: RootState) =>
  state.cart_order_Reducer.stripe_Payment_Intent_Response_State;

// stripe_Payment_Intent_Response_State

// state.

export default cart_order_Slice.reducer;
