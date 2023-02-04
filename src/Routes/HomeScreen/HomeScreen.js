import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {} from "react-native";
import css from "./HomeScreen.style";
import {TimerView} from "components";


export default function HomeScreen(props){
    return (
        <ScreenView style={css.homescreen}>
            {/* <TimerView style={css.content}/> */}
        </ScreenView>
    )
}
