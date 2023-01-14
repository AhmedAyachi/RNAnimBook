import {useEffect,useRef} from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {interpolateColor,useAnimatedStyle,useSharedValue,withTiming} from "react-native-reanimated";


export const useThemeTransition=(theme)=>{
    const state=useRef({
        prevtheme:ThemeSwitcher.statics.light,
    }).current,{prevtheme}=state;
    const transition=useSharedValue(theme===prevtheme?1:0);
    const colors=[prevtheme.backgroundColor,theme.backgroundColor];
    const themeswitcher=useAnimatedStyle(()=>({
        backgroundColor:interpolateColor(transition.value,inputrange,colors),
    }),[theme]);
    const title=useAnimatedStyle(()=>({
        color:interpolateColor(transition.value,inputrange,colors.reverse()),
    }),[theme]);
    useEffect(()=>{
        state.prevtheme=theme;
        transition.value=withTiming(inputrange[theme===prevtheme?0:1],{duration:500});
    },[theme]);
    return {transition,style:{themeswitcher,title}};
}
const inputrange=[0,1];
