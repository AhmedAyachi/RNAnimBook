import React from "react";
import {StatusBar} from "expo-status-bar";
import {ImageDisplayer,ThemeSwitcher,ScrollAnimView,DraggerView,ProgressView,CounterView} from "components";
import Navigator from "./Navigator/Navigator";


export default function App(){
    return <>
        <StatusBar style="auto"/>
        <Navigator/>
    </>;
}
