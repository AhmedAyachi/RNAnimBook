import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    homescreen:{
        justifyContent:"flex-start",
        alignItems:"stretch",
        paddingHorizontal:1*rem,
    },
    row0:{
        maxWidth:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    row1:{
        maxWidth:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingVertical:1*rem,
    },
    message:{
        fontSize:1.75*rem,
        textAlign:"center",
        color:"white",
    },
    name:{
        fontFamily:"parisienne",
        fontSize:2*rem,
        color:"white",
    },
    /* content:{
        width:"100%",
        flex:1,
        backgroundColor,
    }, */
});

export default css;
