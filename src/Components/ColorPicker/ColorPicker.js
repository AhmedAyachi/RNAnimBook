import React,{useState} from "react";
import {View} from "react-native";
import css from "./ColorPicker.style";
import ColorSlider from "./ColorSlider/ColorSlider";
import Animated,{interpolateColor,useAnimatedStyle,useSharedValue} from "react-native-reanimated";


export default function ColorPicker(props){
    const {}=props;
    const translateX=useSharedValue(0);
    const [width,setWidth]=useState();
    return (
        <View style={[css.colorpicker,props.style]}>
            <Animated.View 
                style={[
                    css.colorview,
                    useAnimatedStyle(()=>width?{
                        backgroundColor:interpolateColor(translateX.value,statics.colors.map((_,i,{length})=>i*(width/length)),statics.colors),
                    }:{}),
                ]}
            />
            <ColorSlider
                translateX={translateX}
                onLayout={({nativeEvent:{layout:{width}}})=>{
                    setWidth(width);
                }}
            />
        </View>
    )
}

const statics={
    ...ColorSlider.statics,
}
