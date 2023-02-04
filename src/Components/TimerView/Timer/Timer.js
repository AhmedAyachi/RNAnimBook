import React from "react";
import {Text} from "react-native";
import css from "./Timer.style";
import {Svg,Circle} from "react-native-svg";
import Animated from "react-native-reanimated";
import * as H from "./Hooks";


export default function Timer(props){
    const {percentage,animatedProps}=H.useProgressAnim(props);
    return (
        <Svg style={css.timer} viewBox="0 0 100 100" preserveAspectRatio="none">
            <Circle {...css.container}/>
            <AnimatedCircle {...css.progress} animatedProps={animatedProps}/>
            <Text style={css.percentage}>{percentage}</Text>
        </Svg>
    )
}

const AnimatedCircle=Animated.createAnimatedComponent(Circle);
