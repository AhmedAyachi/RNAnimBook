import React, { useRef } from "react";
import {} from "react-native";
import css from "./ColorSlider.style";
import PinView from "./PinView/PinView";
import Animated, { interpolateColor } from "react-native-reanimated";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";


export default function ColorSlider(props){
    const {onColorChange}=props;
    const state=useRef({width:null}).current;
    return (
        <GestureHandlerRootView style={css.colorslider}>
            <Animated.View style={css.colorslider} onLayout={({nativeEvent:{layout:{width}}})=>{
                state.width=width;
            }}>
                <PinView
                    onMove={(x)=>{
                        const color=interpolateColor(x.value,statics.colors.map((_,i,{length})=>i*(state.width/length)),statics.colors);
                        onColorChange&&onColorChange(color);
                    }}
                />
                <LinearGradient 
                    style={css.gradient} 
                    colors={statics.colors}
                    start={[0,0.5]} end={[1,0.5]}
                    locations={new Array(statics.colors.length).fill().map((_,i,{length})=>(1/length)*i)}
                />
            </Animated.View>
        </GestureHandlerRootView>
    )
}

const statics={
    ...PinView.statics,
};
