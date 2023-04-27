import {StyleSheet} from "react-native";
import {rem} from "stylesheet";


const css=StyleSheet.create({
    bandview:{
        height:"100%",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingTop:2*rem,
        overflow:"hidden",
    },
    content:{
        width:"100%",
        height:"100%",
        backgroundColor:"#532d6f",
        justifyContent:"flex-end",
        alignItems:"center",
    },
});

export default css;