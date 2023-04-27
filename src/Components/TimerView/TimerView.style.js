import {StyleSheet} from "react-native";
import {rem,mainColor} from "stylesheet";


const css=StyleSheet.create({
    timerview:{
        maxWidth:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        width:"80%",
        paddingVertical:0.5*rem,
        paddingHorizontal:2*rem,
        marginTop:3*rem,
        borderRadius:1*rem,
        backgroundColor:mainColor,
    },
    text:{
        fontSize:2*rem,
        fontWeight:"400",
        textAlign:"center",
        textTransform:"uppercase",
        color:"white",
    },
});

export default css;
