import React from "react";
import {Image} from "react-native";
import css from "./ImageDisplayer.style";
import Animated,{withTiming,useAnimatedStyle,useSharedValue,useAnimatedGestureHandler} from "react-native-reanimated";
import {GestureHandlerRootView,PinchGestureHandler} from "react-native-gesture-handler";
import {img9} from "assets";


export default function ImageDisplayer(props){
    const scale=useSharedValue(0);
    const focalX=useSharedValue(0);
    const focalY=useSharedValue(0);
    const onPinch=useAnimatedGestureHandler({
        onActive:(event)=>{
            if(event.scale>1){
                scale.value=event.scale;
                focalX.value=event.focalX;
                focalY.value=event.focalY;
            }
        },
        onEnd:()=>{
            scale.value=withTiming(1);
            focalX.value=withTiming(css.image.width/2);
            focalY.value=withTiming(css.image.height/2);
        },
    });
    return (
        <GestureHandlerRootView style={css.imagedisplayer}>
            <PinchGestureHandler onGestureEvent={onPinch}>
                <Animated.View>
                    <Animated.Image 
                        style={[css.image,useAnimatedStyle(()=>({
                            transform:[
                                {translateX:focalX.value-css.image.width/2},
                                {translateY:focalY.value-css.image.height/2},
                                {scale:scale.value},
                                {translateX:css.image.width/2-focalX.value},
                                {translateY:css.image.height/2-focalY.value},
                            ],
                        }))]} 
                        source={img9}
                    />
                    <Animated.View style={[css.focalpoint,useAnimatedStyle(()=>({
                        left:focalX.value,
                        top:focalY.value,
                    }))]}/>
                </Animated.View>
            </PinchGestureHandler>
        </GestureHandlerRootView>
    )
}
