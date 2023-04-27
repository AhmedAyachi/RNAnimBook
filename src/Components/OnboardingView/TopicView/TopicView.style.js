import {StyleSheet} from "react-native";
import {rem,textColor,mainFont,} from "stylesheet";


const css=StyleSheet.create({
    topicview:{
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"red",
    },
    image:{
        width:15*rem,
        height:15*rem,
        borderRadius:3*rem,
        resizeMode:"contain",
    },
    description:{
        width:"70%",
        fontFamily:mainFont,
        fontSize:3.25*rem,
        textTransform:"capitalize",
        textAlign:"center",
        color:textColor,
        marginTop:5*rem,
    },
});

export default css;
