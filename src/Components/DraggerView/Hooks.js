import {useRef} from "react";
import {useSharedValue,useAnimatedGestureHandler,useAnimatedStyle,withSpring} from "react-native-reanimated";
import css from "./DraggerView.style";


export const useDragGesture=()=>{
    const dx=useSharedValue(0),dy=useSharedValue(0),config={velocity:0};
    const handler=useAnimatedGestureHandler({
        onStart:(event,context)=>{
            context.dx=dx.value;
            context.dy=dy.value;
        },
        onActive:(event,context)=>{
            dx.value=context.dx+event.translationX;
            dy.value=context.dy+event.translationY;
        },
        onEnd:()=>{
            const distance=Math.sqrt(dx.value**2+dy.value**2);
            if(distance>=max){
                dx.value=withSpring(0,config);
                dy.value=withSpring(0,config);
            }
        },
    });
    const style=useAnimatedStyle(()=>({
        transform:[
            {translateX:dx.value},
            {translateY:dy.value},
        ],
    }));

    return {handler,style};
};

const max=(css.draggerview.width-css.dragger.width)/2;
