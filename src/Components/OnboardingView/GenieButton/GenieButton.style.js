import {StyleSheet} from "react-native";
import {rem,mainColor} from "css";


const css=StyleSheet.create({
    geniebutton:{
        position:"absolute",
        width:8*rem,
        height:8*rem,
        alignSelf:"center",
        borderRadius:5*rem,
        bottom:"10%",
        backgroundColor:mainColor,
    },
});

export default css;
