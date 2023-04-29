import {StyleSheet} from "react-native";
import {rem,mainColor} from "stylesheet";


const css=StyleSheet.create({
    geniebutton:{
        position:"absolute",
        width:8*rem,
        height:8*rem,
        alignSelf:"center",
        borderRadius:5*rem,
        bottom:7*rem,
        zIndex:3,
    },
});

export default css;
