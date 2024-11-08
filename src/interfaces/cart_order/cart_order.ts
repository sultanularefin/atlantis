import {local_Cart_Item} from "../products/product.ts";


interface add_Item_To_Cart_Payload_Interface{

    items: local_Cart_Item[],//local_Ca
    total_Price: number,

    store_id: string,//params_data.item.store_id,

    city_ID: string,/// params_data.city._id,
    country_ID: string,// params_data.country._id,
    cart_unique_token: string,//getUniqCartId(),


    cart_id: null|string,//cart_id ? cart_id : null,
    server_token: null|string,
    user_id: null|string,

    user_type_id: null| number,



    quantity: number,


    // user_details, or customer details ---
    country_phone_code: string,
    email: string,
    name: string,
    phone: string,



    store_Address: string,
    store_City_ID: string,
    store_Location: [number, number],//number[],
    store_address_Note: "",

    store_User_details_Name : string,
    store_User_details_Country : string,
    store_User_details_Phone : string,
    store_User_details_Email: string,


}

export type {
    add_Item_To_Cart_Payload_Interface
};



