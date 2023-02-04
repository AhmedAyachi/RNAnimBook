import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text} from "react-native";
import css from "./ComponentScreen.style";


export default function ComponentScreen(props){
    const {/* route:{params}, */name,component}=props;
    return (
        <ScreenView style={css.componentscreen}>
            {component&&component({style:[css.component,css[name]]})}
        </ScreenView>
    )
}
