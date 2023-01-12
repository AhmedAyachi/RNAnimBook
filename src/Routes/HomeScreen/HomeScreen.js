import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {} from "react-native";
import css from "./HomeScreen.style";
import {ImageDisplayer,ThemeSwitcher,ScrollAnimView,PageScrollView,DraggerView,ProgressView,CounterView} from "components";


export default function HomeScreen(props){
    //const {navigation}=props,state=useRef({text:null}).current;
    return (
        <ScreenView style={css.homescreen}>
            <PageScrollView/>
        </ScreenView>
    )
}
