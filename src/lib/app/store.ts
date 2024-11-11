import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
    AnyAction,
    Reducer,
    // getDefaultMiddleware,

} from '@reduxjs/toolkit';
// import { enableMapSet } from 'immer';
// import toDoSlice from "../features/auth/todo_Slice.ts";
// import Scan_Slice from "../features/scan/scan_Slice.ts";
import {productsApiSlice} from "../features/products/productsApiSlice.ts";
import { setupListeners } from '@reduxjs/toolkit/query';
import productSlice from "../features/products/productSlice.ts";
import auth_Slice from "../features/auth/auth_Slice.ts";



const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    // console.log(")))______***(((( at __rootReducer: ", state);
    // console.log(")))______***(((( action.type: ", action.type);


    if (action.type === "auth/clearState") {

        // eslint-disable-next-line no-param-reassign
        state = {} as RootState;
    }
    return combinedReducer(state, action);
};



const combinedReducer = combineReducers({



    // todo_Reducer: toDoSlice,
    // scan_Reducer: Scan_Slice,

    product_Reducer: productSlice,
    auth_Reducer: auth_Slice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,




});


// enableMapSet();
export const store = configureStore({


    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApiSlice.middleware);
    },


    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(api.middleware),

    // OPTOIN 01
    // middleware: [...getDefaultMiddleware()]

    // 0PTION 02,
   /* middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {
            //     extraArgument: myCustomApiService,
            // },
            serializableCheck: false,
        }),*/




    // may be used to seed some values or good for logout...
    // preloadedState: {},


});






// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>>;


// ## from redux.js.org/recipes/usage-with-tyepscript:
// ## https://redux.js.org/recipes/usage-with-typescript

/*
```js

import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer
  }
})

// Infer the \`RootState\` and \`AppDispatch\` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
*/

