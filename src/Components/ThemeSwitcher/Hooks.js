import {useState,useCallback} from "react";
import {interpolateColor,useAnimatedStyle,useDerivedValue,withTiming,useSharedValue} from "react-native-reanimated";


const backgroundColors=["white","black"],textColors=[...backgroundColors].reverse();
const inputrange=[0,1];
export const useThemeTransition=()=>{
    const [isdark,setIsDark]=useState(false);
    const transition=useDerivedValue(()=>withTiming(inputrange[isdark?1:0]),[isdark]);//useSharedValue(inputrange[isdark?1:0]);
    const themeswitcher=useAnimatedStyle(()=>({
        backgroundColor:interpolateColor(transition.value,inputrange,backgroundColors),
    }),[isdark]);
    const title=useAnimatedStyle(()=>({
        color:interpolateColor(transition.value,inputrange,textColors),
    }),[isdark]);
    const toggleTheme=useCallback((isdark)=>{
        //transition.value=withTiming(inputrange[isdark?1:0]);
        setIsDark(isdark);
    },[isdark]);
    return {
        isdark,toggleTheme,
        style:{themeswitcher,title},
    };
}
