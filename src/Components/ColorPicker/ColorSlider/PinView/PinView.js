import React from "react";
import {} from "react-native";
import css from "./PinView.style";
import Animated,{useAnimatedStyle,interpolateColor} from "react-native-reanimated";


export default function PinView(props){
    const {translateX,translateY,inrange}=props;
    return (
        <Animated.View
            style={[
                css.pinview,
                useAnimatedStyle(()=>inrange?({
                    backgroundColor:interpolateColor(translateX.value,inrange,statics.colors),
                    transform:[
                        {translateX:translateX.value},
                        {translateY:translateY.value},
                    ],
                }):{}),
            ]}
        />
    )
}

const statics=PinView.statics={
    colors:["red","purple","blue","cyan","green","yellow","orange","black","white"],
}
