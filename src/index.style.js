import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import {princesssofia,squadaone,dynapuff,cabin,anton} from "assets";


export const mainFont="";
export const mainColor="#1E90FF";
export const minorColor="#FF8D1E";
export const backgroundColor="white";

export const useCustomFonts=()=>{
    const [loaded]=useFonts({
        princesssofia,squadaone,dynapuff,cabin,anton,
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
