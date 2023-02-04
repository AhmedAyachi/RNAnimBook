import React from "react";
import {View,Text} from "react-native";
import css from "./CounterView.style";
import {useSelector,useDispatch} from "react-redux";
import {increase,decrease} from "actions";


export default function CounterView(props){
    const {value}=useSelector(store=>store.counter);
    const dispatch=useDispatch();
    return (
        <View style={[css.counterview,props.style]}>
            <View style={css.view}>
                <Text style={css.text}>count : {value}</Text>
            </View>
            <View style={css.buttons}>
                {["+","-"].map((name,i)=>(
                    <Text key={name} style={css.button} onPress={()=>{dispatch(i?decrease():increase())}}>{name}</Text>
                ))}
            </View>
        </View>
    )
}
