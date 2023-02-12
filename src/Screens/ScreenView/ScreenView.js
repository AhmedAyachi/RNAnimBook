import React from "react";
import {View,Keyboard,TouchableWithoutFeedback} from "react-native";
import css from "./ScreenView.style"


export default function ScreenView(props){
    return (
        <TouchableWithoutFeedback 
            disabled={true}
            onPress={()=>{Keyboard.isVisible&&Keyboard.isVisible()&&Keyboard.dismiss()}}
        >
            <View {...props} style={[css.screenview,props.style]}>{props.children}</View>
        </TouchableWithoutFeedback>
    )
}
