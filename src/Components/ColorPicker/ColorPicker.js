import React,{useState} from "react";
import {View} from "react-native";
import css from "./ColorPicker.style";
import ColorSlider from "./ColorSlider/ColorSlider";
import Animated,{interpolateColor,useAnimatedStyle,useSharedValue} from "react-native-reanimated";


export default function ColorPicker(props){
    const {}=props;
    const translateX=useSharedValue(0);
    const [inrange,setInRange]=useState();
    return (
        <View style={[css.colorpicker,props.style]}>
            <Animated.View 
                style={[
                    css.colorview,
                    useAnimatedStyle(()=>inrange?{
                        backgroundColor:interpolateColor(translateX.value,inrange,statics.colors),
                    }:{}),
                ]}
            />
            <ColorSlider
                translateX={translateX}
                inrange={inrange}
                setInRange={setInRange}
            />
        </View>
    )
}

const statics={
    ...ColorSlider.statics,
}
