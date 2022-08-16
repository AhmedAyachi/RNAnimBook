import React from "react";
import css from "./ItemView.style";
import Animated from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import * as H from "./Hooks";


export default function ItemView(props){
    const {item,index,scrollLeft}=props;
    const textStyle=H.useTextStyle(scrollLeft,index);
    return (
        <Animated.View key={item} style={css.itemview}>
            <LinearGradient
                style={css.gradient}
                colors={index%2?[...css.colors].reverse():css.colors}
                start={[0,0.5]} end={[1,0.5]}
                locations={[0.1,1]}
            />
            <Animated.Text style={[css.letter,textStyle]}>{item}</Animated.Text>
        </Animated.View>
    )
}
