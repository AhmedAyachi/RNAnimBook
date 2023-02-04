import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    heartpopup:{
        position:"absolute",
        width:10*rem,
        height:10*rem,
        zIndex:1,
        elevation:10,
    },
    icon:{
        width:"100%",
        height:"100%",
    },
});

export default css;
