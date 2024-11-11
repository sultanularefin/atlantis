/*function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />*/


import React, {useEffect} from 'react';

import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {store} from './lib/app/store';
import SplashScreen from './ui/screens/identity/SplashScreen';

import Catalog_Home_Page from './ui/screens/Catalog_Home_Page.tsx';
// import Logger_Scan_Page from "./ui/screens/Logger_Scan_Page.tsx";
import MultipleImageHeaderNull from './ui/screens/MultipleImageHeaderNull.tsx';
import Product_Details_Page from './ui/screens/Product_Details_Page.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Login_Page from './ui/screens/identity/Login_Page.tsx';
import Cart from "./ui/screens/Cart.tsx";

const Native_Root_Stack =
    createNativeStackNavigator<Native_Root_Stack_ParamList>();

// const RootStack = createNativeStackNavigator<Native_Root_StackParamList>();

export interface Props {
}

// export type Native_Root_Stack_ParamList = NonNullable<unknown>;


export type Native_Root_Stack_ParamList = {
    // SplashScreen: undefined;
    SplashScreen: {
        name: string,
    };
    Login_Page: undefined,
    Catalog_Home_Page: undefined,
    // Logger_Scan_Page: undefined,
    // AnyUsersFeedz : undefined;
    Product_Details_Page: {
        single_Product_ID: string,//:number,


        // single_Product_ID: item_Data._id,
        add_Button_Pressed_State: boolean,//item_Data.btn_Pressed,
        quantity: number,//item_Data.temp__Quantity,


    };

    MultipleImageHeaderNull: undefined,
    Cart: undefined,
}

export interface Props {

}

const App: React.FC<Props> = (props) => {
    return (
        <GestureHandlerRootView style={{
            flex: 1,
        }}>
            <Provider store={store}>
                <SafeAreaProvider>


                    <ActionSheetProvider>
                        <NavigationContainer>
                            <StatusBar barStyle="dark-content"
                                       backgroundColor="#00bfff"/>
                            <Native_Root_Stack.Navigator
                                initialRouteName={
                                    'SplashScreen'
                                }
                                screenOptions={{
                                    // cardOverlayEnabled: true,

                                    headerStyle: {
                                        backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                    },
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        // fontSize: rdx_dimension.width>360? 16:14,
                                        fontSize: 16,
                                    },
                                    headerTitleAlign: 'center',
                                }}>

                                <Native_Root_Stack.Screen
                                    name="SplashScreen"
                                    component={SplashScreen}

                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },

                                        headerShown: false,

                                    }}

                                />


                                <Native_Root_Stack.Screen
                                    name="Cart"
                                    component={Cart}

                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },

                                        headerShown: false,

                                    }}

                                />


                                <Native_Root_Stack.Screen
                                    name="MultipleImageHeaderNull"
                                    component={MultipleImageHeaderNull}

                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },
                                        // screenOptions={{
                                        headerShown: false,
                                    }}
                                />


                                <Native_Root_Stack.Screen
                                    name="Product_Details_Page"
                                    component={Product_Details_Page}
                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },
                                        headerShown: false,


                                        // presentation: 'transparentModal',
                                    }}

                                    // initialParams={{single_Product_ID: "635f742ff26b331cb5dcf6ab"}}

                                />


                                <Native_Root_Stack.Screen
                                    name="Catalog_Home_Page"
                                    component={Catalog_Home_Page}
                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },
                                        headerShown: false,
                                        // headerShown: true,
                                    }}
                                />

                                {/*    <Native_Root_Stack.Screen
                                    name="Logger_Scan_Page"
                                    component={Logger_Scan_Page}
                                    options={{
                                        headerShown: false,


                                    }}
                                />*/}


                                <Native_Root_Stack.Screen
                                    name="Login_Page"
                                    component={Login_Page}
                                    options={{
                                        headerStyle: {
                                            backgroundColor: '#6a51ae', // This will affect the StatusBar background on iOS
                                        },
                                        headerShown: false,
                                        // presentation: 'transparentModal',
                                        // presentation: 'modal',
                                        presentation: 'fullScreenModal',

                                        // presentation: "card", // Very very important. "Double screen problem was due to this".

                                    }}
                                />

                            </Native_Root_Stack.Navigator>
                        </NavigationContainer>
                    </ActionSheetProvider>
                </SafeAreaProvider>
            </Provider>
        </GestureHandlerRootView>
    );
};

export default App;

const AppStyles = StyleSheet.create({
    // hairLineWidth2: StyleSheet.hairlineWidth,

    commonHeaderStyle64: {
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
    },
});


// export default App;
