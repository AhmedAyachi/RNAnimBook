import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import {parisienne,princesssofia,squadaone,dynapuff,cabin,anton} from "assets";


export const mainFont="cabin";
export const mainColor="#532d6f";
export const majorColor="#bface2";
export const minorColor="#ffe9b1";
export const backgroundColor="#655DBB";

export const useCustomFonts=()=>{
    const [loaded]=useFonts({
        parisienne,princesssofia,squadaone,dynapuff,cabin,anton,
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
