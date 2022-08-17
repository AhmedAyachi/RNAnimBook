import React,{useEffect,useState} from "react";
//import {View} from"react-native";
import css from "./ThemeSwitcher.style";
import Animated,{withTiming} from "react-native-reanimated";
import * as H from "./Hooks";


export default function ThemeSwitcher(props){
    const [islight,setIsLight]=useState(true);
    const [transx,animstyle]=H.useAnimStyles();
    useEffect(()=>{
        transx.value=withTiming(islight?0:css.indicator.width);
    },[islight]);
    return (
        <Animated.View style={[css.themeswitcher,animstyle.themeswitcher]}>
            <Animated.Text style={[css.title,animstyle.title]}>theme</Animated.Text>
            <Animated.View style={[css.disc,animstyle.disc]}>
                <Animated.View 
                    style={[css.switcher,animstyle.switcher]}
                    onTouchStart={()=>{setIsLight(!islight)}}
                >
                    <Animated.View style={[css.indicator,animstyle.indicator]}/>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}
