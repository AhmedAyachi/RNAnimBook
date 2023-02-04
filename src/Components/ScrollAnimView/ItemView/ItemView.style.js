import {StyleSheet} from "react-native";
import {rem,vw,mainColor,minorColor,backgroundColor} from "css";


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
        color:backgroundColor,
    },
}),{
    colors:[mainColor,minorColor],
});

export default css;
