import React,{useState} from "react";
import {Switch} from "react-native";
import css from "./ThemeSwitcher.style";
import Animated from "react-native-reanimated";
import * as H from "./Hooks";


export default function ThemeSwitcher(props){
    const {}=props;
    const {isdark,style,toggleTheme}=H.useThemeTransition();
    return (
        <Animated.View style={[css.themeswitcher,style.themeswitcher]}>
            <Animated.Text style={[css.title,style.title]}>theme</Animated.Text>
            <Switch 
                value={isdark} 
                thumbColor={statics.thumbColors[isdark?1:0]}
                trackColor={statics.track}
                onValueChange={toggleTheme}
            />
        </Animated.View>
    )
}

const statics={
    thumbColors:["dodgerblue","rgb(240,89,204)"],
    track:{
        false:"rgba(0,0,0,0.1)",
        true:"rgba(240,89,204,0.5)",
    }
}
