import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text} from "react-native";
import css from "./HomeScreen.style";
import {ThemeSwitcher} from "components";


export default function HomeScreen(props){
    return (
        <ScreenView style={css.homescreen}>
            <ThemeSwitcher/>
        </ScreenView>
    )
}
