import React from "react";
import {View} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {ThemeSwitcher,ScrollAnimView,DraggerView,ProgressView,CounterView} from "components";


export default function App(){
    return (
        <View style={css.app}>
            <ThemeSwitcher/>
            <StatusBar style="auto"/>
        </View>
    );
}
