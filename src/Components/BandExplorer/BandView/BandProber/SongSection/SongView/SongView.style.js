import {StyleSheet} from "react-native";
import {rem,border} from "stylesheet";


const css={...StyleSheet.create({
    songview:{
        width:"70%",
        marginVertical:1*rem,
        alignSelf:"center",
        overflow:"visible",
    },
    row0:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
    },
    row1:{
        width:"100%",
    },
    title:{
        flex:5,
        textTransform:"capitalize",
        fontWeight:"700",
        fontSize:1.5*rem,
        color:"#605f6f",
        opacity:0.85,
    },
    duration:{
        flex:1,
        fontWeight:"700",
        fontSize:1.25*rem,
        color:"#605f6f",
        opacity:0.85,
    },
    progressbarbg:{
        width:"95%",
        height:0.25*rem,
        marginTop:2*rem,
        alignSelf:"flex-start",
        backgroundColor:"#605f6f",
    },
    progressbar:{
        width:"0%",
        height:"100%",
        backgroundColor:"#532d6f",
    },
    stopbtn:{
        position:"absolute",
        left:-2.5*rem,
    },
}),...{
    stopbtnicon:{
        size:2*rem,
        color:"#532d6f",
        backgroundColor:"#007AFF",
        style:{
            width:"100%",
            alignSelf:"center",
            borderRadius:200,
        },
    },
}};

export default css;
