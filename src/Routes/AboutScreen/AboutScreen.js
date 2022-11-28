import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text} from "react-native";
import css from "./AboutScreen.style";


export default function AboutScreen(props){
    const {route:{params}}=props;
    return (
        <ScreenView style={css.aboutscreen}>
            <Text>About Screen</Text>
        </ScreenView>
    )
}
