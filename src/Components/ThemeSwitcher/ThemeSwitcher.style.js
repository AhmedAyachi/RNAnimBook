import {StyleSheet} from "react-native";
import {rem} from "css";


const {discdiam,indiam}={
    discdiam:25*rem,
    indiam:2*rem,

},css=StyleSheet.create({
    themeswitcher:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    title:{
        fontSize:6*rem,
        fontWeight:"700",
        letterSpacing:1*rem,
        textTransform:"uppercase",
        color:"black",
        marginBottom:3*rem,
    },
    disc:{
        width:discdiam,
        height:discdiam,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:discdiam,
        shadowColor:"black",
        shadowOffset:{width:0*rem,height:1*rem},
        shadowRadius:2*rem,
        shadowOpacity:0.3,
        backgroundColor:"white",
        elevation:2*rem,
    },
    switcher:{
        width:2*indiam,
        height:indiam,
        borderRadius:indiam,
        backgroundColor:"#e5e9e2",
    },
    indicator:{
        width:indiam,
        height:indiam,
        borderRadius:indiam,
        backgroundColor:"#ed80ee",
        transform:[{translateX:0}],
    },
});

export default css;
