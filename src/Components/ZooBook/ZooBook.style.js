import {StyleSheet} from "react-native";
import {rem} from "css";


const css=StyleSheet.create({
    zoobook:{
        width:"100%",
        flex:1,
        backgroundColor:"black",
    },
    cardslist:{
        minWidth:"100%",
        height:"100%",
    },
    illucard:{
        width:17*rem,
        marginHorizontal:2.5*rem,
    },
});

export default css;
