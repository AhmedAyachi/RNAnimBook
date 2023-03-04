import {StyleSheet} from "react-native";
import {rem,backgroundColor} from "css";


const css=StyleSheet.create({
    itemview:{
        width:"85%",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginBottom:1*rem,
        borderRadius:1.5*rem,
        elevation:8,
        backgroundColor:"transparent",
        shadowColor:"black",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.15,
        shadowRadius:10,
    },
    container:{
        flex:1,
        height:5*rem,
        justifyContent:"center",
        paddingHorizontal:1*rem,
        borderRadius:1*rem,
        backgroundColor:"white",
        zIndex:1,
    },
    checkbtn:{
        position:"absolute",
        right:3*rem,
    },
    deletebtn:{
        position:"absolute",
        left:3*rem,
    },
    icon:{
        width:2*rem,
        height:2*rem,
    },
    text:{
        fontSize:1.25*rem,
        textTransform:"capitalize",
        color:"black",
    },
});

export default css;
