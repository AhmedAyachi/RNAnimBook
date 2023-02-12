import {StyleSheet} from "react-native";
import {rem,backgroundColor} from "css";


const css=StyleSheet.create({
    componentscreen:{
        justifyContent:"center",
        backgroundColor,
    },
    component:{
        maxWidth:"100%",
        flex:1,
    },
    checklist:{
        marginTop:2*rem,
    },
    colorpicker:{
        paddingHorizontal:2*rem,
    },
    progressview:{
        flex:0,
        alignSelf:"center",
    },
    counterview:{
        justifyContent:"center",
        alignItems:"stretch",
        paddingHorizontal:2*rem,
    },
    prisonerview:{
        flex:0,
        alignSelf:"center",
    }
});

export default css;
