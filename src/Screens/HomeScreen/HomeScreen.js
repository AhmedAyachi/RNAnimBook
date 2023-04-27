import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {View,Text} from "react-native";
import css from "./HomeScreen.style";
import {OnboardingView} from "components";


export default function HomeScreen(props){
    return (
        <ScreenView style={css.homescreen}>
            <OnboardingView/>
            {/* <View style={css.row0}>
                <Text style={css.message}>This is an animation book made with react-native</Text>
                <Text style={css.message}>Use the drawer navigator above to navigate between animations</Text>
            </View>
            <View style={css.row1}>
                <Text style={css.name}>Ahmed Ayachi</Text>
            </View> */}
        </ScreenView>
    )
}
