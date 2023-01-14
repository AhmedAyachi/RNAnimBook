import {StyleSheet} from "react-native";
import {border,rem} from "css";


const css=StyleSheet.create({
    homescreen:{
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        width:20*rem,
        height:3*rem,
        paddingHorizontal:0.5*rem,
        fontSize:1.5*rem,
        marginBottom:3*rem,
        ...border(0.1*rem,"solid","black"),
    },
    button:{
        width:10*rem,
        height:4*rem,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        backgroundColor:"dodgerblue",
        elevation:10,
        shadowColor:"black",
        shadowRadius:10,
        shadowOffset:{x:0,y:0},
        shadowOpacity:0.15,
    },
    text:{
        fontSize:1.27*rem,
        textTransform:"capitalize",
        color:"white",
    },
});

export default css;
