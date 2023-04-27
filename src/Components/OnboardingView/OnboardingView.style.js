import {StyleSheet} from "react-native";
import {rem,border} from "stylesheet";


export const css=StyleSheet.create({
    onboardingview:{
        width:"100%",
        flex:1,
    },
    foreground:{
        position:"absolute",
        width:"75%",
        top:"5%",
        alignSelf:"center",
        zIndex:3,
        ...border(1,"solid","black"),
    },
    topics:{
        marginTop:10*rem,
        ...border(1,"solid","red"),
    },
});

export default css;
