import React,{useEffect} from "react";
import {View} from "react-native";
import css from "./ProgressView.style";
import Animated,{useSharedValue,useAnimatedStyle,withTiming,withRepeat} from "react-native-reanimated";


export default function ProgressView(props){
    const progress=useSharedValue(0);
    useEffect(()=>{
        progress.value=withRepeat(withTiming(1,{duration:4000}),0,true);
    });
    return (
        <View style={css.progressview}>
            <Animated.View style={[css.progressbar,useAnimatedStyle(()=>({width:`${progress.value*100}%`}))]}/>
        </View>
    )
}

/* const useFadeInStyle=({duration=4000}={})=>{
    const opacity=useSharedValue(0);
    const style=useAnimatedStyle(()=>({
        opacity:withTiming(opacity.value,{duration}),
    }));
    useEffect(()=>{
        opacity.value=1;
    },[]);
    return style;
}

const useFadeOutStyle=({duration=4000}={})=>{
    const opacity=useSharedValue(1);
    const style=useAnimatedStyle(()=>({
        opacity:withTiming(opacity.value,{duration}),
    }));
    useEffect(()=>{
        opacity.value=0;
    },[]);
    return style;
}
 */