import React from "react";
import {View,Text} from "react-native";
import css from "./HeaderView.style";


export default function HeaderView(props){
    return (
        <View style={css.headerview}>
            {["topics","skip"].map(text=><Text key={text} style={css.text}>{text}</Text>)}
        </View>
    )
}
