import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    colorpicker:{
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"black",
    },
    colorview:{
        width:20*rem,
        height:20*rem,
        borderRadius:10*rem,
        backgroundColor:"white",
    },
});

export default css;
