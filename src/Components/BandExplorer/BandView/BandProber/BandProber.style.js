import {StyleSheet} from "react-native";
import {rem,vh} from "stylesheet";


const css={...StyleSheet.create({
    bandprober:{
        position:"absolute",
        width:"100%",
        height:25*vh,
        justifyContent:"flex-start",
        alignItems:"center",
        left:0,
        bottom:0,
    },
    row0:{
        width:"100%",
        flexDirection:"column",
        paddingRight:2*rem,
        paddingLeft:3.5*rem,
        justifyContent:"space-between",
        alignItems:"flex-start",
    },
    row1:{
        width:"100%",
        flex:1,
        paddingTop:3*rem,
        justifyContent:"space-around",
        alignItems:"center",
    },
    row2:{
        width:"100%",
        opacity:0,
    },
    row3:{
        width:"100%",
        opacity:0,
    },
    label:{
        fontFamily:"cabin",
        fontSize:1.75*rem,
        textTransform:"capitalize",
        marginVertical:1*rem,
        opacity:0.5,
        color:"white",
    },
    overview:{
        fontSize:2*rem,
        opacity:1,
    },
}),...{
    closebtn:{
        size:2*rem,
        color:"white",
        style:{
            opacity:0.5,
            marginBottom:2*rem,
            marginLeft:"13%",
        },
    },
}};

export default css;