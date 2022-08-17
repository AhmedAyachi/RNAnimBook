import {useSharedValue,useAnimatedStyle,interpolateColor} from "react-native-reanimated";
import css from "./ThemeSwitcher.style";


export const useAnimStyles=()=>{
    const transx=useSharedValue(0);
    const inrange=[0,css.indicator.width];
    return [transx,{
        themeswitcher:useAnimatedStyle(()=>({
            backgroundColor:interpolateColor(transx.value,inrange,["white","#1e1d1e"]),
        })),
        title:useAnimatedStyle(()=>({
            color:interpolateColor(transx.value,inrange,["black","white"]),
        })),
        disc:useAnimatedStyle(()=>({
            backgroundColor:interpolateColor(transx.value,inrange,["white","#252426"]),
        })),
        switcher:useAnimatedStyle(()=>({
            backgroundColor:interpolateColor(transx.value,inrange,["#e5e9e2","#5a345e"]),
        })),
        indicator:useAnimatedStyle(()=>({
            transform:[{translateX:transx.value}],
        })),
    }];
}
