import React, { useRef } from "react";
import {} from "react-native";
import css from "./ColorSlider.style";
import PinView from "./PinView/PinView";
import Animated, { interpolateColor } from "react-native-reanimated";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";


export default function ColorSlider(props){
    const {translateX}=props;
    
    return (
        <GestureHandlerRootView style={css.colorslider}>
            <Animated.View style={css.colorslider} onLayout={props.onLayout}>
                <PinView translateX={translateX}/>
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

const statics=ColorSlider.statics={
    colors:["red","purple","blue","cyan","green","yellow","orange","black","white"],
};
