import {StyleSheet} from "react-native";
import {mainColor,backgroundColor,majorColor,rem} from "css";


const css=StyleSheet.create({
    timer:{
        width:25*rem,
        height:25*rem,
    },
    container:{
        cx:50,cy:50,
        r:47,
        strokeWidth:6,
        stroke:mainColor,
    },
    progress:{
        cx:50,cy:50,
        r:47,
        strokeWidth:3,
        stroke:backgroundColor,
        strokeDasharray:2*47*Math.PI,
        strokeLinecap:"round",
    },
    percentage:{
        height:"100%",
        fontSize:5*rem,
        color:majorColor,
        alignSelf:"center",
        textAlignVertical:"center",
    },
});

export default css;
