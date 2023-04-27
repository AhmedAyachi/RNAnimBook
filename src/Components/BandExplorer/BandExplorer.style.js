import {StyleSheet} from "react-native";
import {rem} from "stylesheet";


const css=StyleSheet.create({
    bandexplorer:{
        width:"100%",
        flex:1,
        backgroundColor:"#161726",
    },
    background:{
        position:"absolute",
        width:"100%",
        height:"100%",
        top:0,
        flexDirection:"row",
        resizeMode:"cover",
        zIndex:0,
    },
    bandslist:{
        height:"100%",
        justifyContent:"flex-start",
    },
});

export default css;
