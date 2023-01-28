import React from "react";
import {} from "react-native";
import css from "./PinView.style";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated,{useAnimatedStyle,useSharedValue,useAnimatedGestureHandler,runOnJS} from "react-native-reanimated";


export default function PinView(props){
    const {translateX}=props;
    const panHandler=useAnimatedGestureHandler({
        onStart:()=>{},
        onActive:(event,context)=>{
            translateX.value=(context.x||0)+event.translationX;
        },
        onEnd:(_,context)=>{
            context.x=translateX.value;
        },
    });
    return (
        <PanGestureHandler onGestureEvent={panHandler}>
            <Animated.View 
                style={[
                    css.pinview,
                    useAnimatedStyle(()=>({
                        transform:[{translateX:translateX.value}],
                    })),
                ]}
            />
        </PanGestureHandler>
    )
}
