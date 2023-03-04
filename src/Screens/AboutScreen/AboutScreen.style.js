import {StyleSheet} from "react-native";
import {rem,mainFont,minorColor} from "css";


const css=StyleSheet.create({
    aboutscreen:{
        justifyContent:"flex-start",
        alignItems:"stretch",
    },
    row0:{
        maxWidth:"100%",
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:3*rem,
    },
    row1:{
        maxWidth:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        opacity:0.5,
        backgroundColor:`${minorColor}15`,
    },
    appicon:{
        width:10*rem,
        height:10*rem,
    },
    title:{
        fontFamily:mainFont,
        fontSize:3*rem,
        color:"white",
    },
    version:{
        fontFamily:mainFont,
        fontSize:1.5*rem,
        color:"white",
    },
    section:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:3*rem,
    },
    fields:{
        width:"100%",
    },
    field:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:1*rem,
    },
    icon:{
        width:2*rem,
        height:2*rem,
        marginRight:0.5*rem,
    },
    value:{
        fontFamily:mainFont,
        fontSize:1.5*rem,
        color:"white",
    },
    image:{
        width:10*rem,
        height:10*rem,
    },
});

export default css;
