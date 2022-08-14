import {StyleSheet} from "react-native";
import {rem,border} from "css";


const css=StyleSheet.create({
    progressview:{
        width:30*rem,
        height:2*rem,
        ...border(1,"solid","black"),
    },
    progressbar:{
        height:"100%",
        backgroundColor:"red",
    },
});

export default css;
