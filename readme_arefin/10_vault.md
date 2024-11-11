


## details_page





## vault: 

```tsx

/*
    const increment_Payload = action.payload;
    const temp_Product_ID = increment_Payload.product_ID;

    state.single_Product_State.single_Prod_Quantity += 1; //action.payload;

    const temp_Cart = state.local_Cart_Array;

    // console.log("temp_Cart: >>>",temp_Cart);

    if (temp_Cart.length === 0) {
      // const temp_Cart_Item:local_Cart_Item= add_Item_To_Cart_33(/!*state.product_State, *!/temp_Product_ID);

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
    }*/

```
