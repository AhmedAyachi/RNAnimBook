import {StyleSheet} from "react-native";
import {rem,textColor,mainFont} from "stylesheet";


const css=StyleSheet.create({
    topicview:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        overflow:"hidden",
        //...border(1,"solid","red"),
    },
    image:{
        width:14*rem,
        height:15*rem,
        borderRadius:3*rem,
        resizeMode:"contain",
        marginTop:12*rem,
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
