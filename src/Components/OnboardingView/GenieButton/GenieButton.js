import React,{useRef} from "react";
import {TouchableOpacity} from "react-native";
import css from "./GenieButton.style";
import Animated,{useAnimatedStyle,interpolate,Extrapolation,withTiming, runOnJS} from "react-native-reanimated";


export default function GenieButton(props){
    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPressIn={props.onClick}
        >
            <Animated.View style={[css.geniebutton,props.style]}/>
        </TouchableOpacity>
    )
}

const statics={
    toscale:400,
}
