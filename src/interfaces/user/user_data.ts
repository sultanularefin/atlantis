



export interface User_BY_UserID {
    login_by: string;
    device_token: string;
    device_type: string;
    _id: string;
    user_type: number;
    admin_type: number;
    favourite_stores: any[];
    user_type_id?: any;
    payment_intent_id: string;
    customer_id: string;
    image_url: string;
    first_name: string;
    last_name: string;
    email: string;
    otp: string;
    password: string;
    social_id?: any;
    social_ids: any[];
    country_phone_code: string;
    country_code: string;
    phone: string;
    address: string;
    country_id: string;
    city: string;
    server_token: string;
    orders: any[];
    promo_count: number;
    referral_code: string;
    is_referral: boolean;
    total_referrals: number;
    jwt_token: string;
    store_rate: number;
    store_rate_count: number;
    provider_rate: number;
    provider_rate_count: number;
    wallet: number;
    wallet_currency_code: string;
    is_use_wallet: boolean;
    is_approved: boolean;
    is_email_verified: boolean;
    is_phone_number_verified: boolean;
    is_document_uploaded: boolean;
    is_user_type_approved: boolean;
    uid: string;
    firebase_token: string;
    created_at: Date;
    updated_at: Date;
    unique_id: number;



    // ---test begins here

    // favourite_addresses: FavouriteAddress[]



    // -test ends here
}


interface get_Detail_By_User_ID_server_Token {
    success: boolean;
    message: number;
    user: User_BY_UserID;
    firebase_token: string;

    status_phrase?: string;// added on feb 27, for registration. not present on get detail api call
}

export type {
    get_Detail_By_User_ID_server_Token,
};


