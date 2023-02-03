import {StyleSheet} from "react-native";
import {rem,border,mainColor,minorColor} from "css";
 

const {radius,coef}={
    radius:15*rem,
    coef:3.5,
},css=StyleSheet.create({
    prisonerview:{
        width:radius*2,
        height:radius*2,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:radius,
        ...border(0.2*rem,"solid",minorColor),
    },
    prisoner:{
        position:"absolute",
        width:radius/coef,
        height:radius/coef,
        borderRadius:radius,
        backgroundColor:mainColor,
    },
});



export default css;
