import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import {useMemo} from "react";
import {Animated} from "react-native";
import {dynapuff} from "assets";


export const useCustomFonts=()=>{
    const [loaded]=useFonts({
        dynapuff
    });
    return loaded;
}

export const {height,width}=Dimensions.get("window");
export const vw=width*0.01;
export const vh=height*0.01;
export const rem=3*vw;

export const border=(width=2,style="solid",color="black")=>({borderWidth:width,borderStyle:style,borderColor:color});
export const rotate=(x="0deg",y="0deg",z="0deg")=>[{rotateX:x},{rotateY:y},{rotateZ:z}];
export const skew=(x="0deg",y="0deg")=>[{skewX:x},{skewY:y}];
export const inset=(value=0)=>({top:value,right:value,bottom:value,left:value});

export const fadeIn=(opacity,duration=300)=>useMemo(()=>{
    const animation=(()=>Animated.timing(opacity,{
        toValue:1,duration,
        useNativeDriver:true,
    }))();
    return {
        stop:(callback)=>{opacity.stopAnimation(callback)},
        reset:()=>{opacity.setValue(0)},
        start:(ref,callback)=>{
            opacity.setValue(0);
            ref&&ref.setNativeProps({style:{display:"flex"}});
            animation.start(callback);
        },
    };
},[]);

export const fadeOut=(opacity,duration=300)=>useMemo(()=>{
    const animation=(()=>Animated.timing(opacity,{
        toValue:0,duration,
        useNativeDriver:true,
    }))();
    return {
        stop:(callback)=>{opacity.stopAnimation(callback)},
        reset:()=>{opacity.setopacity(0)},
        start:(ref,callback)=>{
            opacity.setValue(1);
            animation.start(()=>{
                ref&&ref.setNativeProps({style:{display:"none"}});
                callback&&callback();
            });
        },
    };
},[]);

export const rotateZ=(duration=1500)=>useMemo(()=>{
    const value=new Animated.Value(0);
    const animation=(()=>Animated.timing(value,{
        toValue:2,
        duration,
        useNativeDriver:true,
    }))();
    return {
        animation:{
            stop:(callback)=>{value.stopAnimation(callback)},
            reset:()=>{value.setValue(0)},
            set:(frame)=>{value.setValue(frame)},
            start:(ref,callback)=>{
                ref&&ref.setNativeProps({
                    style:{
                        display:"flex", 
                    },
                });
                value.setValue(0)
                animation.start(callback);
            },
        },
        value:value.interpolate({
        inputRange:[0,1,2],
        outputRange:["0deg","180deg","360deg"],
    })};
},[]);

