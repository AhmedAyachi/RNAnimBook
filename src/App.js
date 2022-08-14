import React from "react";
import {ScrollView} from "react-native";
import css from "./App.style";
import {StatusBar} from "expo-status-bar";
import {CounterView,ProgressView} from "components";


export default function App(){
    return (
        <ScrollView contentContainerStyle={css.app} scrollEnabled={false}>
            <ProgressView/>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}
