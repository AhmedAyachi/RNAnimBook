import {StyleSheet} from "react-native";
import {rem,textColor,mainFont,border} from "stylesheet";


const css=StyleSheet.create({
    topicview:{
        width:"50%",
        justifyContent:"flex-start",
        alignItems:"center",
        ...border(1,"solid","red"),
        overflow:"hidden",
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
