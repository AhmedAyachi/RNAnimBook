import React from "react";
import {Switch} from "react-native";
import css from "./ThemeSwitcher.style";
import Animated from "react-native-reanimated";
import {mainColor,majorColor} from "stylesheet";
import * as H from "./Hooks";


export default function ThemeSwitcher(props){
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
    thumbColors:[mainColor,majorColor],
    track:{
        false:"rgba(0,0,0,0.1)",
        true:"rgba(255,141,30,0.5)",
    }
}
