import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text} from "react-native";
import css from "./HomeScreen.style";


export default function HomeScreen(props){
    return (
        <ScreenView style={css.homescreen}>
            <Text>App created with create-expo-app command</Text>
        </ScreenView>
    )
}
