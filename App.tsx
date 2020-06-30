import React from 'react';
import MainView from "./src/MainView";
import {StyleSheet, View} from "react-native";
import Constants from "expo-constants";
import {Provider} from 'react-redux'
import configureStore from './src/configureStore'


const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>

                <MainView/>

        </Provider>
    );
}


export default App;
