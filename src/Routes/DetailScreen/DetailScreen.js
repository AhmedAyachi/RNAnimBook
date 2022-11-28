import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text} from "react-native";
import css from "./DetailScreen.style";


export default function DetailScreen(props){
    //const {route:{params}}=props;
    return (
        <ScreenView style={css.detailscreen}>
            <Text>Detail Screen</Text>
        </ScreenView>
    )
}
