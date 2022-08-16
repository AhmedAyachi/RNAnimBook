import {useAnimatedStyle,interpolate} from "react-native-reanimated";
import css from "./ItemView.style";


const {width}=css.itemview;
export const useTextStyle=(scrollLeft,i)=>useAnimatedStyle(()=>{
    const inrange=[(i-1)*width,i*width,(i+1)*width];
    return {
        opacity:interpolate(scrollLeft.value,inrange,[0.5,1,0.5]),
        transform:[
            {scale:interpolate(scrollLeft.value,inrange,[0,1,0])},
            {rotate:interpolate(scrollLeft.value,inrange,[Math.PI,0,-Math.PI])},
        ],
    };
});
