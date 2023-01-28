import React from "react";
import {} from "react-native";
import css from "./ColorSlider.style";
import PinView from "./PinView/PinView";
import Animated,{useSharedValue,useAnimatedGestureHandler,withSpring,withTiming} from "react-native-reanimated";
import {GestureHandlerRootView,PanGestureHandler} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";


export default function ColorSlider(props){
    const {translateX,inrange,setInRange}=props;
    const translateY=useSharedValue(0);
    const panHandler=useAnimatedGestureHandler({
        onStart:(event,context)=>{
            context.x=translateX.value;
            translateY.value=withSpring(-50);
            translateX.value=withTiming(event.x);
        },
        onActive:(event,context)=>{
            translateX.value=event.x;
        },
        onFinish:()=>{
            translateY.value=withSpring(0);
        },
    });
    return (
        <GestureHandlerRootView style={css.colorslider}>
            <PanGestureHandler onGestureEvent={panHandler}>
                <Animated.View 
                    style={css.colorslider} 
                    onLayout={({nativeEvent:{layout:{width}}})=>{
                        setInRange(statics.colors.map((_,i,{length})=>i*(width/length)));
                    }}
                >
                    <PinView 
                        translateX={translateX}
                        translateY={translateY}
                        inrange={inrange}
                    />
                    <LinearGradient 
                        style={css.gradient} 
                        colors={statics.colors}
                        start={[0,0.5]} end={[1,0.5]}
                        locations={new Array(statics.colors.length).fill().map((_,i,{length})=>(1/length)*i)}
                    />
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    )
}

const statics=ColorSlider.statics={
    ...PinView.statics,
};
