import React,{useRef} from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Text,TouchableOpacity,TextInput} from "react-native";
import css from "./HomeScreen.style";


export default function HomeScreen(props){
    const {navigation}=props,state=useRef({text:null}).current;
    return (
        <ScreenView style={css.homescreen}>
            <TextInput style={css.input} onChangeText={(value)=>{state.text=value}}/>
            <TouchableOpacity style={css.button} onPress={()=>{
                navigation.navigate("about",{text:state.text});
            }}>
                <Text style={css.text}>About</Text>
            </TouchableOpacity>
        </ScreenView>
    )
}
