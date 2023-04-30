import {useMemo, useState} from "react";
import {useAnimatedStyle,useSharedValue,interpolate,Extrapolation} from "react-native-reanimated";
import geniebuttoncss from "./GenieButton/GenieButton.style";
import {width,vw} from "stylesheet";


export const useTransitionAnim=(topics)=>{
    const transition=useSharedValue(0);
    const [index,setIndex]=useState(0);
    const [from,to,inputs]=useMemo(()=>[
        topics[index+1]?.color||topics[index-1].color,
        topics[index].color,
        [100*index,100*index+50,100*(index+1)],
    ],[index]);
    const topicsElStyle=useAnimatedStyle(()=>({
        transform:[
            {translateX:interpolate(
                transition.value,
                inputs,
                //[0,0,0]
                [-width*index,-width*index-50*vw,-width*(index+1)],
            )}
        ]
    }),[index]);
    const btnStyle=useAnimatedStyle(()=>{
        const reversed=(Math.round(transition.value/100)-index)%2;
        const scale=interpolate(
            transition.value,
            inputs,
            [1,200,1],
            Extrapolation.CLAMP,
        );
        const translateX=(1-1/scale)*(geniebuttoncss.geniebutton.width/2);
        return {
            backgroundColor:reversed?to:from,
            transform:[
                {scale:scale*(reversed?-1:1)},
                //{scaleX:reversed?-1:1},
                {translateX:translateX},
            ],
        }
    },[index]);

    return {transition,index,setIndex,btnStyle,topicsElStyle};
}
