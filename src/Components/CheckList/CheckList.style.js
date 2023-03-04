import {StyleSheet} from "react-native";
import {rem,mainFont,border,mainColor,majorColor} from "css";


const css=StyleSheet.create({
    checklist:{
        width:"100%",
    },
    title:{
        fontFamily:mainFont,
        fontWeight:"700",
        fontSize:3*rem,
        textTransform:"capitalize",
        color:mainColor,
        marginLeft:"7.5%",
    },
    flatlist:{
        
    },
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        paddingVertical:2*rem,
    },
});

export default css;
