import React from "react";
import {StatusBar} from "expo-status-bar";
import Navigator from "./Navigator/Navigator";


export default function App(){
    return <>
        <StatusBar translucent style="auto"/>
        <Navigator/>
    </>;
}
