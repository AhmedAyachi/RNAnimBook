import React from "react";
import {} from "react-native";
import css from "./PinView.style";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated,{useAnimatedStyle,useSharedValue,useAnimatedGestureHandler,runOnJS} from "react-native-reanimated";


export default function PinView(props){
    const {onMove}=props;
    const translateX=useSharedValue(0);
    const panHandler=useAnimatedGestureHandler({
        onStart:()=>{},
        onActive:(event,context)=>{
            translateX.value=(context.x||0)+event.translationX;
            onMove&&runOnJS(onMove)(translateX);
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

const statics=PinView.statics={
    colors:["red","purple","blue","cyan","green","yellow","orange","black","white"],
};
