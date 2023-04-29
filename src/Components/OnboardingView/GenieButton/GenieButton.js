import React,{useRef} from "react";
import {TouchableOpacity} from "react-native";
import css from "./GenieButton.style";
import Animated,{useAnimatedStyle,interpolate, Extrapolation} from "react-native-reanimated";
import {vw} from "stylesheet";


export default function GenieButton(props){
    const {from,to,scrollLeft,onClick}=props;
    const btnRef=useRef();
    const style=useAnimatedStyle(()=>{
        const reversed=Math.round(scrollLeft.value/(100*vw))%2;
        let scale=interpolate(scrollLeft.value,[0,50*vw,100*vw],[1,250,1],Extrapolation.CLAMP);
        const translateX=(1-1/scale)*(css.geniebutton.width/2);
        return {
            backgroundColor:reversed?to:from,
            transform:[
                {scale},
                {scaleX:reversed?-1:1},
                {translateX:translateX+1},
            ],
        }
    },[from,to]);
    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPressIn={onClick}
        >
            <Animated.View ref={btnRef} style={[css.geniebutton,style,props.style]}/>
        </TouchableOpacity>
    )
}

const statics={
    toscale:400,
}
