import React,{useState} from "react";
import {View,TouchableOpacity,Text} from "react-native";
import css from "./TimerView.style";
import Timer from "./Timer/Timer";


export default function TimerView(props){
    const [started,setStarted]=useState(false);
    return (
        <View style={[css.timerview,props.style]}>
            <Timer started={started} onEnd={()=>{setStarted(false)}}/>
            <TouchableOpacity style={css.button} onPress={()=>{setStarted(!started)}}>
                <Text style={css.text}>{started?"stop":"run"}</Text>
            </TouchableOpacity>
        </View>
    )
}
