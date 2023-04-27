import {StyleSheet} from "react-native";
import {rem} from "stylesheet";


const css=StyleSheet.create({
    colorslider:{
        width:"100%",
        height:4*rem,
        justifyContent:"center",
        alignItems:"stretch",
        borderRadius:8*rem,
        //overflow:"hidden",
    },
    gradient:{
        width:"100%",
        height:"100%",
        borderRadius:8*rem,
    },
});

export default css;
