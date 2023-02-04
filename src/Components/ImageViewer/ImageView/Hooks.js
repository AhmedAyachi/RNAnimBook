import {useRef} from "react";
import {useAnimatedRef,useAnimatedGestureHandler,useSharedValue,useAnimatedStyle,withTiming,useDerivedValue,withSpring} from "react-native-reanimated";
//import {width,height} from "css";


export const useZoomGesture=(origin)=>{
    const scale=useSharedValue(1);
    const translateX=useSharedValue(0),translateY=useSharedValue(0);
    const zoomHandler=useAnimatedGestureHandler({
        onStart:(event,context)=>{
            context.first=true;
        },
        onActive:(event,context)=>{
            const {numberOfPointers:pointercount,scale:zoom}=event;
            if((pointercount===2)&&(zoom>1)&&origin){
                const {focalX,focalY}=event;
                if(context.first){
                    context.first=false;
                    context.focalX=focalX;
                    context.focalY=focalY;
                }
                const dscale=zoom-1;
                const dx=focalX-context.focalX,dy=focalY-context.focalY;
                const tlx=dx+(origin.x-focalX)*dscale/zoom;
                const tly=dy+(origin.y-focalY)*dscale/zoom;
                scale.value=zoom;
                translateX.value=tlx;
                translateY.value=tly;
            }
        },
        onEnd:()=>{
            scale.value=withTiming(1);
            translateX.value=withTiming(0);
            translateY.value=withTiming(0);
        }
    });
    const style=useAnimatedStyle(()=>({
        transform:[
            {scale:scale.value},
            {translateX:translateX.value},
            {translateY:translateY.value},
        ],
    }),[]);
    return {zoomHandler,style};
}

export const useRefs=()=>useRef({
    doubletap:useRef(),
}).current;
