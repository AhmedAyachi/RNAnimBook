import React,{useEffect} from "react";
import {View,Animated} from "react-native";
import css from "./ProgressView.style";
import {useSharedValue,useAnimatedStyle,withTiming} from "react-native-reanimated";


export default function ProgressView(props){
    const progress=useSharedValue(0);
    const style=useAnimatedStyle(()=>({
        width:withTiming(progress.value,{duration:500}),
    }));
    useEffect(()=>{
        //progress.value=0;//withTiming(1);
    });
    return (
        <View style={css.progressview}>
            <Animated.View style={[css.progressbar,style]}/>
        </View>
    )
}
