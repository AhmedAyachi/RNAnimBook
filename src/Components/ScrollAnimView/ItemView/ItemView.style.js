import {StyleSheet} from "react-native";
import {rem,vw} from "css";


const css=Object.assign(StyleSheet.create({
    itemview:{
        width:100*vw,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    gradient:{
        width:"100%",
        height:"100%",
    },
    letter:{
        position:"absolute",
        fontFamily:"dynapuff",
        fontSize:20*rem,
        textTransform:"capitalize",
        color:"rgba(0,0,0,0.35)",
    },
}),{
    colors:["red","purple"],
});

export default css;
