import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    componentscreen:{
        justifyContent:"center",
    },
    component:{
        maxWidth:"100%",
        flex:1,
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
    draggerview:{
        flex:0,
        alignSelf:"center",
    }
});

export default css;
