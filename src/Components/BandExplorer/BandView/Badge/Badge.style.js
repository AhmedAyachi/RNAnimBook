import {StyleSheet} from "react-native";
import {rem,mainColor} from "css";


const css={...StyleSheet.create({
    badge:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        bottom:0,
        alignSelf:"center",
        opacity:0.5,
        backgroundColor:mainColor,
        zIndex:0,
    },
    content:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        overflow:"hidden",
    },
    col0:{
        flex:4,
        maxHeight:"50%",
        paddingTop:2*rem,
        justifyContent:"flex-start",
        paddingHorizontal:"10%",
        overflow:"scroll",
        zIndex:1,
    },
    col1:{
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
    },
    bandname:{
        fontFamily:"anton",
        fontSize:3*rem,
        textTransform:"capitalize",
        color:"white",
    },
    followband:{
        fontFamily:"anton",
        fontSize:1*rem,
        marginVertical:2*rem,
        textTransform:"capitalize",
        transform:[{rotateZ:"-90deg"}],
        color:"white",
    },
}),...{
    logo:{
        size:2*rem,
        color:"white",
        style:{
            marginVertical:1.5*rem,
            opacity:0.65,
        },
    },
}};

export default css;