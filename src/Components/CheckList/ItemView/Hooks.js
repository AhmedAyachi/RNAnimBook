import {useState} from "react";
import {Easing,interpolate,interpolateColor,runOnJS,useAnimatedGestureHandler,useAnimatedStyle,useSharedValue,withTiming} from "react-native-reanimated";
import {vw} from "css";


export const useUnMountAnim=()=>{
    const [mindistance,setMinDistance]=useState(0);
    const [mounted,setMounted]=useState(true);
    const translateX=useSharedValue(0);
    const opacity=useSharedValue(1);

    const itemStyle=useAnimatedStyle(()=>({
        opacity:opacity.value,
        backgroundColor:interpolateColor(translateX.value,[-mindistance/2,0,mindistance/2],["#00e673","transparent","#ff4d4d"]),
    }),[mindistance]);
    const containerStyle=useAnimatedStyle(()=>({
        transform:[{translateX:translateX.value}],
    }));
    
    const confirmIconStyle=useAnimatedStyle(()=>({
        opacity:interpolate(translateX.value,[-mindistance,0],[1,0]),
    }));
    const deleteIconStyle=useAnimatedStyle(()=>({
        opacity:interpolate(translateX.value,[0,mindistance],[0,1]),
    }));
    const panHandler=useAnimatedGestureHandler({
        onActive:(event,context)=>{
            const dx=(context.x||0)+event.translationX;
            translateX.value=dx;
        },
        onEnd:({translationX},context)=>{
            if(Math.abs(translationX)>mindistance){
                const toValue=((translationX>0)?1:-1)*100*vw;
                translateX.value=withTiming(toValue,{duration:300,easing:Easing.in},(finished)=>{
                    if(finished){
                        opacity.value=withTiming(0,{duration:500},(finished)=>{
                            finished&&runOnJS(setMounted)(false);
                        });
                    }
                });
            }
            else{
                context.x=0;
                translateX.value=withTiming(0);
            }
        },
    });

    return {itemStyle,containerStyle,confirmIconStyle,deleteIconStyle,panHandler,mounted,setMinDistance};
}
