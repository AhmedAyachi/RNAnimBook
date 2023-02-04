import {StyleSheet} from "react-native";
import {rem,vw,border} from "css";


const css=StyleSheet.create({
    imageview:{
        width:100*vw,
        height:205,
    },
    imgwrapper:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:"100%",
        resizeMode:"contain",
    },
    taptarget:{
        position:"absolute",
        width:"100%",
        height:"100%",
    },
});

export default css;
