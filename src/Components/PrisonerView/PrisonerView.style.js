import {StyleSheet} from "react-native";
import {rem,border,minorColor,majorColor} from "css";
 

const {radius,coef}={
    radius:15*rem,
    coef:6,
},css=StyleSheet.create({
    prisonerview:{
        width:radius*2,
        height:radius*2,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:radius,
        ...border(0.2*rem,"solid",majorColor),
    },
    prisoner:{
        position:"absolute",
        width:radius/coef,
        height:radius/coef,
        borderRadius:radius,
        backgroundColor:minorColor,
    },
});



export default css;
