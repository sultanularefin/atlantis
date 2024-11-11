


interface One_Product_Item_For_Detail_Interface extends One_Product_Base_Interface{


    // locally added april 08, 2023

    // single_Prod_Quantity: number,
    // single_Prod_Add_Btn_Pressed_State: boolean,
    // image: string[],
}

interface single_product_other_extra_data_interface{
    single_Prod_Quantity:number,
    single_Prod_Add_Btn_Pressed_State:boolean,
}

interface One_Product_Base_Interface{
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string[],//string,//string[],//string
    rating: product_Rating_Interface
}
interface One_Product_for_Home_Page_Interface extends One_Product_Base_Interface{

    // locally added on 8th November
    // show_Details_Btn: boolean,
    // added for view -- view label interface not present in server:
    // short_details
    show_Details_Btn: boolean,

    temp__Quantity: number,
    btn_Pressed: boolean,

    // added locally ends here
}

interface product_Rating_Interface {
    rate: number
    count: number
}



interface local_Cart_Item /*extends Doc*/
{

    // name: Cadbury Bournville Dark Chocol;

    name: string,
    quantity: number,
    price: number,

    // price_Foreign_or_Delivery: number, // IMPORTANT


    image: string[],
    id: number,//string,
    index: number,
    // weight: number,

};


interface get_One_Product_Payload__Interface {
    // userID: string,//number; ///string;
    // user_Interest_data: string;
    product_Id: string,

    btn_Pressed_State: boolean,
    prev_Quantity: number,

}


export type {
    One_Product_for_Home_Page_Interface,
    product_Rating_Interface,
    local_Cart_Item,
    One_Product_Item_For_Detail_Interface,
    get_One_Product_Payload__Interface,
    One_Product_Base_Interface,
    single_product_other_extra_data_interface,
};

