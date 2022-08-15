import React,{useEffect} from "react";
import {View,Animated} from "react-native";
import css from "./ProgressView.style";
import {useSharedValue,useAnimatedStyle,withTiming} from "react-native-reanimated";


export default function ProgressView(props){
    const progress=useSharedValue(20);
    const style=useAnimatedStyle(()=>({
        width:progress.value,
    }));
    useEffect(()=>{
        progress.value=withTiming(100,{duration:1000});
    });
    return (
        <View style={css.progressview}>
            <Animated.View style={[css.progressbar,style]}/>
        </View>
    )
}
