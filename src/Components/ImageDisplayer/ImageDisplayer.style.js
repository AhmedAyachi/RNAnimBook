import {StyleSheet} from "react-native";
import {rem,vw,vh,border} from "css";


const css=StyleSheet.create({
    imagedisplayer:{
        width:"100%",
        flex:1,
    },
    image:{
        width:100*vw,
        height:100*vh,
        resizeMode:"cover",
        //...border(1,"solid","transparent"),
    },
    focalpoint:{
        position:"absolute",
        width:1*rem,
        height:1*rem,
        /* left:"50%",
        top:"50%", */
        borderRadius:0.5*rem,
        backgroundColor:"red",
    },
});

export default css;

