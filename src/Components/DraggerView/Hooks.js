import {useSharedValue,useAnimatedGestureHandler,useAnimatedStyle,withSpring} from "react-native-reanimated";
import css from "./DraggerView.style";


export const useDrag=()=>{
    const dx=useSharedValue(0),dy=useSharedValue(0),config={velocity:0};
    const handler=useAnimatedGestureHandler({
        onStart:(event,context)=>{
            context.dx=dx.value;
            context.dy=dy.value;
        },
        onActive:(event,context)=>{
            dx.value=event.translationX+context.dx;
            dy.value=event.translationY+context.dy;
        },
        onEnd:()=>{
            const distance=Math.sqrt(dx.value**2+dy.value**2);
            const max=(css.draggerview.width-css.dragger.width)/2;
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
