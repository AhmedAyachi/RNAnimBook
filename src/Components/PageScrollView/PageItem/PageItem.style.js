import {StyleSheet} from "react-native";
import {rem,vw,mainColor,backgroundColor} from "css";


const css=StyleSheet.create({
    pageitem:{
        width:100*vw,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    container:{
        width:70*vw,
        height:70*vw,
        backgroundColor:mainColor,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        position:"absolute",
        fontSize:3.5*rem,
        fontWeight:"500",
        textTransform:"capitalize",
        color:backgroundColor,
    },
});

export default css;
