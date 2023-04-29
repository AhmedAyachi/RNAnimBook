import {StyleSheet} from "react-native";
import {rem,border,textColor,mainFont} from "stylesheet";


const css=StyleSheet.create({
    headerview:{
        position:"absolute",
        width:"80%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignSelf:"center",
        top:3*rem,
        zIndex:3,
    },
    text:{
        fontFamily:mainFont,
        fontSize:1.75*rem,
        textTransform:"capitalize",
        color:textColor,
    },
});

export default css;
