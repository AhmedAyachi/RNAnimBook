import React,{useRef} from "react";
import {TouchableOpacity} from "react-native";
import css from "./GenieButton.style";
import Animated,{useAnimatedStyle, useSharedValue,withTiming,runOnJS} from "react-native-reanimated";


export default function GenieButton(props){
    const {from,to,onMidReached}=props;
    const btnRef=useRef();
    const scale=useSharedValue(1);
    const style=useAnimatedStyle(()=>{
        const mid=statics.toscale/2;
        const value=scale.value<mid?scale.value:(statics.toscale-scale.value);
        const reversed=scale.value>mid;
        onMidReached&&runOnJS(onMidReached)();
        return {
            backgroundColor:reversed?to:from,
            transform:[
                {scale:value},
                {scaleX:reversed?-1:1},
                {translateX:(1-1/value)*(css.geniebutton.width/2)},
            ],
        }
    },[from,to]);
    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPressIn={()=>{
                scale.value=1;
                scale.value=withTiming(statics.toscale-1,{duration:1000});
            }}
        >
            <Animated.View ref={btnRef} style={[css.geniebutton,style,props.style]}/>
        </TouchableOpacity>
    )
}

const statics={
    toscale:400,
}
