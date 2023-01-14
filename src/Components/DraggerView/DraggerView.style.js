import {StyleSheet} from "react-native";
import {rem,border,inset} from "css";
 

const {radius,coef}={
    radius:15*rem,
    coef:2.5,
},css=StyleSheet.create({
    draggerview:{
        width:radius*2,
        height:radius*2,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:radius,
        ...border(0.2*rem,"solid","red"),
    },
    dragger:{
        position:"absolute",
        width:radius/coef,
        height:radius/coef,
        borderRadius:0.5*rem,
        backgroundColor:"red",
    },
});



export default css;
