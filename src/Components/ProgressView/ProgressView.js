import React,{useEffect} from "react";
import {View,Animated} from "react-native";
import css from "./ProgressView.style";
import {useSharedValue,useAnimatedStyle,withTiming} from "react-native-reanimated";


export default function ProgressView(props){
    const progress=useSharedValue(0.5);
    useEffect(()=>{
        progress.value=0.5;//withTiming(1);
    });
    return (
        <View style={css.progressview}>
            <Animated.View style={[css.progressbar,useAnimatedStyle(()=>({width:`${progress.value*100}%`}))]}/>
        </View>
    )
}
