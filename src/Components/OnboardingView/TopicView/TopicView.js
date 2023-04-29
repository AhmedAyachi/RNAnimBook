import React from "react";
import {View,Image,Text} from "react-native";
import css from "./TopicView.style";


export default function TopicView(props){
    const {}=props;
    return (
        <View style={[css.topicview,{backgroundColor:props.color}]}>
            {/* <Image style={css.image} source={props.image}/>
            <Text style={css.description}>{props.description}</Text> */}
        </View>
    )
}
