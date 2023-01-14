import React,{useRef,useState} from "react";
import {Switch} from "react-native";
import css from "./ThemeSwitcher.style";
import Animated from "react-native-reanimated";
import * as H from "./Hooks";


export default function ThemeSwitcher(props){
    const {}=props;
    const [theme,setTheme]=useState(statics.light);
    const {style}=H.useThemeTransition(theme);
    return (
        <Animated.View style={[css.themeswitcher,style.themeswitcher]}>
            <Animated.Text style={[css.title,style.title]}>theme</Animated.Text>
            <Switch 
                value={theme===statics.dark} 
                thumbColor={theme.thumbColor}
                trackColor={theme.thumbColor}
                onValueChange={(value)=>{
                    const key=theme===statics.light?"dark":"light";
                    setTheme(statics[key]);
                }}
            />
        </Animated.View>
    )
}

const statics=ThemeSwitcher.statics={
    dark:{
        backgroundColor:"black",
        thumbColor:"violet",
    },
    light:{
        backgroundColor:"white",
        thumbColor:"dodgerblue",
    },
}
