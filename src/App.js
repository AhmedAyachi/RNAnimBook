import React from "react";
import {View,Text} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";


export default function App(){
    return (
        <View style={css.app}>
            <Text>App created with create-expo-app command</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
