import {useEffect,useState} from "react";
import {withTiming,useSharedValue,useAnimatedProps,runOnJS,Easing} from "react-native-reanimated";
import css from "./Timer.style";


export const useProgressAnim=({started,onEnd})=>{
    const [percentage,setPercentage]=useState(0);
    const progress=useSharedValue(percentage);
    const animatedProps=useAnimatedProps(()=>{
        runOnJS(setPercentage)(Math.round(100*progress.value));
        return {
            strokeDashoffset:css.progress.strokeDasharray*(1-progress.value),
        };
    });
    useEffect(()=>{
        if(started){
            let rest
            if(percentage>=100){
                rest=100;
                progress.value=0;
            }
            else{
                rest=100-percentage;
            }
            progress.value=withTiming(1,{duration:rest*50,easing:Easing.linear},(isdone)=>{
                isdone&&onEnd&&runOnJS(onEnd)();
            });
        }
        else{
            progress.value=percentage/100;
        }
    },[started]);
    return {percentage,animatedProps};
}
