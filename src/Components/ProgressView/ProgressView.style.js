import {StyleSheet} from "react-native";
import {rem,border,mainColor,majorColor} from "css";


const css=StyleSheet.create({
    progressview:{
        width:30*rem,
        height:2*rem,
        overflow:"hidden",
        borderRadius:0.35*rem,
        ...border(1,"solid",majorColor),
    },
    progressbar:{
        height:"100%",
        backgroundColor:mainColor,
    },
});

export default css;
