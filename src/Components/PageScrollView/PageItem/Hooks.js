import {useRef} from "react";
import {useAnimatedStyle,interpolate,Extrapolate} from "react-native-reanimated";
import {width,height} from "css";
import css from "./PageItem.style";
 

export const useScrollStyle=({scrollLeft,index})=>{
    const {inputrange,radius}=useRef({
        inputrange:[(index-1)*width,index*width,(index+1)*width],
        radius:css.container.width/2,
    }).current;
    const container=useAnimatedStyle(()=>({
        borderRadius:interpolate(scrollLeft.value,inputrange,[25,radius,25],Extrapolate.CLAMP),
        transform:[
            {scale:interpolate(scrollLeft.value,inputrange,[0,1,0],Extrapolate.CLAMP)},
            {rotateZ:`${interpolate(scrollLeft.value,inputrange,[+Math.PI/2,0,-Math.PI/2])}rad`},
        ],
    }),[]);
    const title=useAnimatedStyle(()=>({
        opacity:interpolate(scrollLeft.value,inputrange,[-1,1,-1]),
        transform:[{translateY:interpolate(scrollLeft.value,inputrange,[height/2,0,-height/2],Extrapolate.CLAMP)}],
    }));
    return {container,title};
};
