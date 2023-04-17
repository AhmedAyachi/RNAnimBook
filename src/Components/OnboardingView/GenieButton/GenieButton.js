import React from "react";
import {TouchableOpacity} from "react-native";
import css from "./GenieButton.style";
import Animated from "react-native-reanimated";


export default function GenieButton(props){
    const {}=props;
    return (
        <TouchableOpacity style={css.geniebutton}>
            <Animated.View style={[css.geniebutton,{bottom:undefined}]}>
                
            </Animated.View>
        </TouchableOpacity>
    )
}
