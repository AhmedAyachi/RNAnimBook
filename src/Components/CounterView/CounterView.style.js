import {StyleSheet} from "react-native";
import {rem,border,mainColor} from "css";


const css=StyleSheet.create({
    counterview:{
        
    },
    view:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:1*rem,
        borderRadius:1*rem,
        backgroundColor:mainColor,
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        padding:1*rem,
    },
    text:{
        fontSize:2*rem,
        fontWeight:"700",
        textTransform:"capitalize",
        marginRight:0.25*rem,
        color:"white",
    },
    button:{
        fontSize:3*rem,
        fontWeight:"700",
        color:"black",
    },
});

export default css;
