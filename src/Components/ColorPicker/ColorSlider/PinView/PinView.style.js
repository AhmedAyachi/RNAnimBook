import {StyleSheet} from "react-native";
import {border,rem} from "css";


const css=StyleSheet.create({
    pinview:{
        position:"absolute",
        width:3*rem,
        height:3*rem,
        //alignSelf:"center",
        ...border(0.75*rem,"solid","white"),
        borderRadius:1.5*rem,
        backgroundColor:"transparent",
        zIndex:1,
    },
});

export default css;
