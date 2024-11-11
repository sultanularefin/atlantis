


```ts



const update_product_detail_extra_data_2 = (
  state: any,
  action: PayloadAction<single_product_other_extra_data_interface>,
) => {
  state.single_product_extra_data = action.payload;
};


const update_single_Product_Add_Btn_Pressed_State_2 = (
  state: any,
  action: PayloadAction<boolean>,
) => {
  state.single_Product_State.item.single_Prod_Add_Btn_Pressed_State =
    action.payload; // false;// action.payload;

  state.single_Product_State.item.single_Prod_Quantity = 0;

  // state.single_Product_Add_Btn_Pressed_State= action.payload;
};

const populate_all_product_data_2 = (
  state: any,
  action: PayloadAction<One_Product_for_Home_Page_Interface[]>,
) => {
  // console.log('action.payload: ', action.payload);

  state.product_State = action.payload;
};

const decrement_Single_Product_2_For_Details_Page = (
  state: any,
  action: PayloadAction<increment_Decrement_Single_Item_Payload_Interface>,
) => {
  const decrement_Payload = action.payload;
  const temp_Product_ID = decrement_Payload.product_ID;
  const updated_Quantity = decrement_Payload.quantity_Single_Product;

  if (decrement_Payload.quantity_Single_Product === 0) {
    // state.single_Product_Add_Btn_Pressed_State = false;

    state.single_Product_State.item.single_Prod_Add_Btn_Pressed_State = false; // action.payload;
  }

  state.single_Product_State.item.single_Prod_Quantity = updated_Quantity; //  decrement_Payload.quantity_Single_Product;// action.payload;
  // state.single_Product_Quantity__State = action.payload;

  const temp_Cart = state.local_Cart_Array;

  //  TEMP CART  LENGTH 0

  // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
  const foundIndex_Already_In_Cart_Decrement = temp_Cart.findIndex(
    (one_Product: local_Cart_Item) => one_Product.id === temp_Product_ID,
  );

  // console.log("__foundIndex_Already_In_Cart_Decrement__: ", foundIndex_Already_In_Cart_Decrement);

  // console.log("(temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity): ",(temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity));

  // temp_Cart[foundIndex_Already_In_Cart].quantity= (temp_Cart[foundIndex_Already_In_Cart].quantity) + 1;

  // ORDER IS IMPORTANT ORDER:2
  // eslint-disable-next-line operator-assignment
  temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity - 1;

  // state.product_State.[foundIndex_read].temp_Cart_Quantity = 1;

  // ORDER IS IMPORTANT ORDER:1
  // eslint-disable-next-line operator-assignment
  temp_Cart[foundIndex_Already_In_Cart_Decrement].weight =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity *
    temp_Cart[foundIndex_Already_In_Cart_Decrement].weight;

  /* state.product_State.[temp_Cart[foundIndex_Already_In_Cart].index].weight
       = ((temp_Cart[foundIndex_Already_In_Cart].quantity) + 1)*(temp_Cart[foundIndex_Already_In_Cart].weight);*/

  // price decrement begins
  state.local_Cart_Price_Total -=
    temp_Cart[foundIndex_Already_In_Cart_Decrement].price;

  // price decrement ends

  state.local_Cart_Weight_Total -=
    temp_Cart[foundIndex_Already_In_Cart_Decrement].weight;

  // state.product_State.[foundIndex_read].temp_Cart_Quantity = 1;
  state.product_State[
    temp_Cart[foundIndex_Already_In_Cart_Decrement].index
  ].temp_Cart_Quantity =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity;

  if (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity === 0) {
    if (temp_Cart.length === 1) {
      state.local_Cart_Array = [];
      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement].index
      ].temp_Cart_Quantity = 0; //
      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement].index
      ].btn_Pressed = false;
      // (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity) - 1;
    } else if (temp_Cart.length === 2) {
      // extra [] added to save it as an array.

      state.local_Cart_Array = [
        temp_Cart[foundIndex_Already_In_Cart_Decrement === 1 ? 0 : 1],
      ];

      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement === 1 ? 0 : 1].index
      ].temp_Cart_Quantity = 0; //
      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement === 1 ? 0 : 1].index
      ].btn_Pressed = false;

      // state.product_State.[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].temp_Cart_Quantity = 0;//
      // state.product_State.[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].btn_Pressed = false;
    } else if (temp_Cart.length > 2) {
      state.local_Cart_Array =
        foundIndex_Already_In_Cart_Decrement === 0
          ? temp_Cart.slice(1, temp_Cart.length)
          : temp_Cart
              .slice(0, foundIndex_Already_In_Cart_Decrement)
              .concat(
                temp_Cart.slice(
                  foundIndex_Already_In_Cart_Decrement + 1,
                  temp_Cart.length,
                ),
              );

      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement].index
      ].temp_Cart_Quantity = 0; //
      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart_Decrement].index
      ].btn_Pressed = false;
    }
  }
  // state.local_Cart_Array= state.local_Cart_Array.concat(temp_Cart_Item);

  // updated_Quantity
  else {
    console.log(
      'decrement_Single_Product_2_For_Details_Page>>>> [temp_Cart]: -- ',
      temp_Cart,
    );

    state.local_Cart_Array = temp_Cart;
  }
};

const increment_Single_Product_2_For_Details_Page = (
  state: any,
  action: PayloadAction<increment_Decrement_Single_Item_Payload_Interface>,
) => {
  const increment_Payload = action.payload;
  const temp_Product_ID = increment_Payload.product_ID;

  state.single_Product_State.single_Prod_Quantity += 1; //action.payload;

  const temp_Cart = state.local_Cart_Array;

  // console.log("temp_Cart: >>>",temp_Cart);

  if (temp_Cart.length === 0) {
    // const temp_Cart_Item:local_Cart_Item= add_Item_To_Cart_33(/*state.product_State, */temp_Product_ID);

    // common code -----------------------------add temp_cart_item___begins here
    //  TEMP CART  LENGTH 0
    const foundIndex_read = state.product_State.findIndex(
      (one_Product: One_Product_Item_For_Detail_Interface) =>
        one_Product.id === temp_Product_ID,
    );

    // state.product_State[one_Product_Index].

    // if (foundIndex_read){

    const one_Item = state.product_State[foundIndex_read];

    const cart_Item: local_Cart_Item = {
      name: one_Item.name.toString(), // one_Item.name,
      quantity: 1,
      // price: one_Item.view_price,
      price: one_Item.price,
      image: one_Item.image_url[0],
      id: one_Item._id,
      index: foundIndex_read,
      // weight: one_Item.item_weight,
    };

    state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
    state.product_State[foundIndex_read].btn_Pressed = true;

    // price begins
    // state.local_Cart_Price_Total = one_Item.view_price;
    state.local_Cart_Price_Total = one_Item.price;

    state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);

    return;
  } else {
    // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
    const foundIndex_Already_In_Cart = temp_Cart.findIndex(
      (one_Product: local_Cart_Item) => one_Product.id === temp_Product_ID,
    );

    // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
    if (foundIndex_Already_In_Cart !== -1) {
      // const one_Item =  temp_Cart[foundIndex_Already_In_Cart];

      // console.log("at __foundIndex_Already_In_Cart: ");

      // eslint-disable-next-line operator-assignment
      temp_Cart[foundIndex_Already_In_Cart].quantity =
        temp_Cart[foundIndex_Already_In_Cart].quantity + 1;

      // price begins
      state.local_Cart_Price_Total +=
        temp_Cart[foundIndex_Already_In_Cart].price;

      // price ends

      state.local_Cart_Weight_Total +=
        temp_Cart[foundIndex_Already_In_Cart].weight;

      state.local_Cart_Array = temp_Cart; //[...temp_Cart];

      // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
      state.product_State[
        temp_Cart[foundIndex_Already_In_Cart].index
      ].temp_Cart_Quantity = temp_Cart[foundIndex_Already_In_Cart].quantity;
      state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].weight =
        temp_Cart[foundIndex_Already_In_Cart].quantity *
        temp_Cart[foundIndex_Already_In_Cart].weight;

      return;
    } else {
      //  TEMP CART  LENGTH 0
      const foundIndex_read = state.product_State.findIndex(
        (one_Product: One_Product_Item_For_Detail_Interface) =>
          one_Product.id === temp_Product_ID,
      );

      // state.product_State[one_Product_Index].

      // if (foundIndex_read){

      const one_Item = state.product_State[foundIndex_read];

      const cart_Item: local_Cart_Item = {
        name: one_Item.name.toString(), // one_Item.name,
        quantity: 1,
        // price: one_Item.view_price,
        price: one_Item.price,
        image: one_Item.image_url[0],
        id: one_Item._id,
        index: foundIndex_read,
        // weight: one_Item.item_weight,
      };

      state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
      state.product_State[foundIndex_read].btn_Pressed = true;

      state.local_Cart_Price_Total += one_Item.price;
      // price ends

      state.local_Cart_Weight_Total += one_Item.item_weight;

      state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);

      return;
    }
  }
};

const populateTag_data_for_multiple_Images_2 = (
  state: any,
  action: PayloadAction<MultipleImageHeaderNull_route_date_interface>,
) => {
  // const temp_Multiple_2__Image_data: MultipleImageHeaderNull_route_date_interface = action.payload;

  state.two_Image__data_For_Tag_State = action.payload; //temp_Multiple_2__Image_data;
};

const disable_Btn_Pressed_State_In_Home_Page = (
  state: any,
  action: PayloadAction<number>,
) => {
  // state.product_State[action.payload].temp_Cart_Quantity = 1;
  state.product_State[action.payload].btn_Pressed = false;
  state.product_State[action.payload].temp_Cart_Quantity = 0;
};

const decrement_item_for_home_index_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  state.local_Cart_Array[action.payload].quantity -= 1;
};

const increment_item_for_home_index_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  state.local_Cart_Array[action.payload].quantity += 1;
};

const store_temp_cart_array_2 = (
  state: any,
  action: PayloadAction<local_Cart_Item[]>,
) => {
  // object for new item, or first item, then concat, for array no concat. array when incremented an existing item

  console.log('action.payload: ', action.payload);

  // return;

  state.local_Cart_Array = action.payload; //state.local_Cart_Array.concat(action.payload);

  state.local_Cart_Price_Total = state.local_Cart_Array.reduce(
    (accumulator: number, one_Cart_Item: local_Cart_Item) =>
      accumulator + one_Cart_Item.price,
    0,
  );
};

const store_temp_cart_object_2 = (
  state: any,
  action: PayloadAction<local_Cart_Item>,
) => {
  // object for new item, or first item, then concat, for array no concat. array when incremented an existing item

  state.local_Cart_Array = state.local_Cart_Array.concat(action.payload); //state.local_Cart_Array.concat(action.payload);

  console.log(
    'state.local_Cart_Array :  in << store_temp_cart_object_2 >>: ',
    state.local_Cart_Array,
  );
  state.local_Cart_Price_Total = state.local_Cart_Array.reduce(
    (accumulator: number, one_Cart_Item: local_Cart_Item) =>
      accumulator + one_Cart_Item.price,
    0,
  );
};
const increment_Single_Cart_Item_2__For_Home_Page = (
  state: any,
  action: PayloadAction<number>,
) => {
  // ----..

  // ----...
  const home_Item_Index = action.payload;

  const temp_Cart = state.local_Cart_Array;

  const temp_Product_ID = state.product_State[home_Item_Index]._id;
  const one_Item = state.product_State[home_Item_Index];

  if (temp_Cart.length === 0) {
    const cart_Item: local_Cart_Item = {
      name: one_Item.name.toString(), // one_Item.name,
      quantity: 1,
      // price: one_Item.view_price,
      price: one_Item.price,
      image: one_Item.image_url[0],
      id: one_Item._id,
      index: home_Item_Index, //foundIndex_read,
      // weight: one_Item.item_weight,
    };

    state.product_State[home_Item_Index].temp_Cart_Quantity = 1;
    state.product_State[home_Item_Index].btn_Pressed = true;

    // price begins
    // state.local_Cart_Price_Total = one_Item.view_price;

    state.local_Cart_Price_Total = one_Item.price;

    state.local_Cart_Weight_Total = one_Item.item_weight;

    state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);

    return;
  } else {
    // else if (temp_Cart.length > 0) {
    //  TEMP CART  LENGTH  > 0

    console.log('___at TEMP CART  LENGTH  > 0 ');

    // console.log("__temp_Product_ID__: ",temp_Product_ID);
    // console.log("temp_Cart: ", temp_Cart);

    // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
    const foundIndex_Already_In_Cart = temp_Cart.findIndex(
      (one_Product: local_Cart_Item) => one_Product.id === temp_Product_ID,
    );

    // console.log("__foundIndex_Already_In_Cart__: ", foundIndex_Already_In_Cart);
    if (foundIndex_Already_In_Cart !== -1) {
      // const one_Item =  temp_Cart[foundIndex_Already_In_Cart];

      // console.log("at __foundIndex_Already_In_Cart: ");

      // eslint-disable-next-line operator-assignment
      temp_Cart[foundIndex_Already_In_Cart].quantity =
        temp_Cart[foundIndex_Already_In_Cart].quantity + 1;

      // price begins
      state.local_Cart_Price_Total +=
        temp_Cart[foundIndex_Already_In_Cart].price;

      // price ends

      state.local_Cart_Weight_Total +=
        temp_Cart[foundIndex_Already_In_Cart].weight;

      state.local_Cart_Array = temp_Cart; //[...temp_Cart];

      // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
      state.product_State[home_Item_Index].temp_Cart_Quantity =
        temp_Cart[foundIndex_Already_In_Cart].quantity;

      return;
    } else {
      const cart_Item: local_Cart_Item = {
        name: one_Item.name.toString(), // one_Item.name,
        quantity: 1,
        // price: one_Item.view_price,
        price: one_Item.price,
        image: one_Item.image_url[0],
        id: one_Item._id,
        index: home_Item_Index,
        // weight: one_Item.item_weight,
      };

      state.product_State[home_Item_Index].temp_Cart_Quantity = 1;

      state.local_Cart_Price_Total += one_Item.price;

      // state.local_Cart_Price_Total = one_Item.price;

      // price ends

      // state.local_Cart_Weight_Total += one_Item.item_weight;

      // common code ----------------add temp_cart_item__ends here

      // const temp_Cart_Item:local_Cart_Item= add_New_Item_In_Cart(state.product_State,temp_Product_ID);

      // temp_Cart.concat(temp_Cart_Item);
      state.local_Cart_Array = state.local_Cart_Array.concat(cart_Item);
      // temp_Cart.concat(cart_Item);

      // foundIndex_Already_In_Cart

      // state.local_Cart_Array=[...temp_Cart];

      return;
    }
  }
};

const decrement_Single_Cart_Item_2_For_Home_Page = (
  state: any,
  action: PayloadAction<number>,
) => {
  // const decrement_Payload = action.payload;
  // const temp_Product_ID = decrement_Payload.product_ID;
  // const previous_Cart_Qtity = decrement_Payload.single_Cart_Item_Qtity;

  const home_Item_Index = action.payload;

  // const temp_Cart = state.local_Cart_Array;

  // console.log("temp_Cart: >>>",temp_Cart);

  const temp_Product_ID = state.product_State[home_Item_Index]._id;
  const one_Item = state.product_State[home_Item_Index];

  /*
  const decrement_Payload = action.payload;
  const temp_Product_ID = decrement_Payload.product_ID;
  const updated_Quantity = decrement_Payload.quantity_Single_Product;

  */

  /*
  if (decrement_Payload.quantity_Single_Product === 0) {
      // state.single_Product_Add_Btn_Pressed_State = false;

      state.single_Product_State.item.single_Prod_Add_Btn_Pressed_State = false;// action.payload;

  }

  state.single_Product_State.item.single_Prod_Quantity = updated_Quantity;//  decrement_Payload.quantity_Single_Product;// action.payload;
  // state.single_Product_Quantity__State = action.payload;


  */

  let temp_Cart = state.local_Cart_Array;

  //  TEMP CART  LENGTH 0

  // SEARCH FIRST IN TEMP CART IF EXIST THEN INCREMENT
  const foundIndex_Already_In_Cart_Decrement = temp_Cart.findIndex(
    (one_Product: local_Cart_Item) => one_Product.id === temp_Product_ID,
  );

  // ORDER IS IMPORTANT ORDER:2
  // eslint-disable-next-line operator-assignment
  temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity - 1;

  // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;

  // ORDER IS IMPORTANT ORDER:1
  // eslint-disable-next-line operator-assignment
  temp_Cart[foundIndex_Already_In_Cart_Decrement].weight =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity *
    temp_Cart[foundIndex_Already_In_Cart_Decrement].weight;

  /* state.product_State[temp_Cart[foundIndex_Already_In_Cart].index].weight
       = ((temp_Cart[foundIndex_Already_In_Cart].quantity) + 1)*(temp_Cart[foundIndex_Already_In_Cart].weight);*/

  // price decrement begins
  state.local_Cart_Price_Total -=
    temp_Cart[foundIndex_Already_In_Cart_Decrement].price;

  // price decrement ends

  state.local_Cart_Weight_Total -=
    temp_Cart[foundIndex_Already_In_Cart_Decrement].weight;

  // state.product_State[foundIndex_read].temp_Cart_Quantity = 1;
  state.product_State[home_Item_Index].temp_Cart_Quantity =
    temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity;

  if (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity === 0) {
    // const temp_local_Cart = state.local_Cart_Array;

    // console.log("temp_Cart: (when 0) ", temp_Cart);
    if (temp_Cart.length === 1) {
      // state.local_Cart_Array = [];

      temp_Cart = [];
      // state.product_State[home_Item_Index].temp_Cart_Quantity = 0;//
      state.product_State[home_Item_Index].btn_Pressed = false;
      // (temp_Cart[foundIndex_Already_In_Cart_Decrement].quantity) - 1;
      state.local_Cart_Array = temp_Cart;
    } else if (temp_Cart.length === 2) {
      // extra [] added to save it as an array.

      temp_Cart = [
        temp_Cart[foundIndex_Already_In_Cart_Decrement === 1 ? 0 : 1],
      ];

      // state.product_State[home_Item_Index].temp_Cart_Quantity = 0;//
      state.product_State[home_Item_Index].btn_Pressed = false;

      console.log('temp_Cart when previous length was 2', temp_Cart);

      state.local_Cart_Array = temp_Cart;
      // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].temp_Cart_Quantity = 0;//
      // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].btn_Pressed = false;
    } else if (temp_Cart.length > 2) {
      temp_Cart =
        foundIndex_Already_In_Cart_Decrement === 0
          ? temp_Cart.slice(1, temp_Cart.length)
          : temp_Cart
              .slice(0, foundIndex_Already_In_Cart_Decrement)
              .concat(
                temp_Cart.slice(
                  foundIndex_Already_In_Cart_Decrement + 1,
                  temp_Cart.length,
                ),
              );

      state.product_State[home_Item_Index].temp_Cart_Quantity = 0; //
      // state.product_State[temp_Cart[foundIndex_Already_In_Cart_Decrement].index].btn_Pressed = false;
      state.product_State[home_Item_Index].btn_Pressed = false;

      state.local_Cart_Array = temp_Cart;
    }
  }
  // state.local_Cart_Array= state.local_Cart_Array.concat(temp_Cart_Item);

  // updated_Quantity
  else {
    // console.log("decrement_Single_Cart_Item_2_For_Home_Page >> [temp_Cart]: at else -- ", temp_Cart);

    state.local_Cart_Array = temp_Cart;
  }
};

const update_All_Products_Add_BTN_Pressed_State__And_Single_Product_Add_Btn_Pressed_State_2 =
  (state: any, action: PayloadAction<number>) => {
    // const yourData = useSelector(selectYourData);
    // useSelector
    // Access the query data using the RTK Query selector
    /*  const queryState = productsApiSlice.endpoints.getProducts.select({limit:10});

      // Check if the query was successful
      if (queryState.isSuccess) {
        // Access the data
        const users = queryState.data;

        // You can now perform logic with the data, like updating state
        state.userCount = users.length;
      }*/
    /* if (queryState) {
       // Access the data if the query was successful
       // const users = queryState.data;
       // console.log('Users data:', users);
       // You can now modify your state or perform other logic with the query data


       console.log('action.payload: ', action.payload);
       console.log('state.product_State: ', state.product_State);
       console.log("queryState: ",queryState);
       console.log("queryState.data: ",queryState);

       // state.product_State[action.payload].temp_Cart_Quantity = 1;
       state.product_State[action.payload].btn_Pressed = true;
       state.product_State[action.payload].temp_Cart_Quantity = 0;
     }
*/
    // 00
  };

const product_detail_page_double_tap_navigation_displayed = (
  state: any,
  action: PayloadAction<null>,
) => {
  const displayed = state.detail_navigation_double_tap_message_displayed;

  if (!displayed) {
    Snackbar.show({
      text: 'Kindly double tap the product to view the product details.',
      duration: Snackbar.LENGTH_INDEFINITE,
      numberOfLines: 3,
      action: {
        text: 'close',
        textColor: 'green',
        onPress: () => {
          Snackbar.dismiss();
        },
      },
    });
  }

  state.detail_navigation_double_tap_message_displayed = true;

  return;
};

const single_Product__Show_Details_Button_true_2 = (
  state: any,
  action: PayloadAction<number>,
) => {
  // FOUND THIS NOT WORKED.

  console.log(
    'at << single_Product__Show_Details_Button_true_2 >> and index: ',
    action.payload,
  );

  // Use RTK Query's api.util.updateQueryData to update cached query data
  productsApiSlice.util.updateQueryData(
    'getProducts',
    {limit: home_page_product_limit},
    (draft_Products: MaybeDrafted<One_Product_for_Home_Page_Interface>[]) => {
      if (draft_Products) {
        console.log('// FOUND THIS NOT WORKED.\n');
        console.log('// FOUND THIS NOT WORKED.\n');
        console.log('// FOUND THIS NOT WORKED.\n');

        console.log('draft_Products.length: ', draft_Products.length);

        const prev_index = state.previous_Show_Detail_Button_Index_for_Item;
        draft_Products[prev_index].show_Details_Btn = false;
        state.previous_Show_Detail_Button_Index_for_Item = action.payload;

        // draft.name = name;  // Example update: updating user's name in cache
      } else {
        console.log('at <<ELSE >>');
      }
    },
  );

  return;
  // one_Product_Index
};
```