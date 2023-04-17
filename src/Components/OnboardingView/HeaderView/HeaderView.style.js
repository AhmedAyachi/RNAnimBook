import {StyleSheet} from "react-native";
import {rem,border,textColor,mainFont} from "css";


const css=StyleSheet.create({
    headerview:{
        //width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        fontFamily:mainFont,
        fontSize:1.75*rem,
        textTransform:"capitalize",
        color:textColor,
    },
});

export default css;
