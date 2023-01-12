import React from "react";
import {View,TouchableWithoutFeedback,Keyboard} from "react-native";
import css from "./ScreenView.style"


export default function ScreenView(props){
    console.log(props.children);
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View {...props} style={[css.screenview,props.style]}/>
        </TouchableWithoutFeedback>
    )
}
