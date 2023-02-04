import React from "react";
import css from "./HeartPopup.style";
import Animated,{withSpring,withSequence,useAnimatedStyle,useDerivedValue,interpolate,withDelay,withTiming} from "react-native-reanimated";
import {SvgXml} from "react-native-svg";
import {heart0} from "assets";
import {minorColor} from "css";


export default function HeartPopup(props){
    const {visible}=props;
    const scale=useDerivedValue(()=>withSequence(withSpring(1,{damping:5}),withDelay(350,withTiming(0))),[visible]);
    const style=useAnimatedStyle(()=>({
        opacity:interpolate(scale.value,[0,1],[0,1]),
        transform:[{scale:scale.value}],
    }));
    return (
        <Animated.View style={[css.heartpopup,style]}>
            <SvgXml {...css.icon} xml={heart0(minorColor)}/>
        </Animated.View>
    )
}
