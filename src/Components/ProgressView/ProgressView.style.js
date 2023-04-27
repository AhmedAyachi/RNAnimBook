import {StyleSheet} from "react-native";
import {rem,border,mainColor,majorColor} from "stylesheet";


const css=StyleSheet.create({
    progressview:{
        width:30*rem,
        height:2*rem,
        overflow:"hidden",
        borderRadius:0.35*rem,
        ...border(2,"solid",mainColor),
    },
    progressbar:{
        height:"100%",
        backgroundColor:majorColor,
    },
});

export default css;
