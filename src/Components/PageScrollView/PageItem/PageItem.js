import React from "react";
import {View,Text} from "react-native";
import css from "./PageItem.style";
import Animated from "react-native-reanimated";
import * as H from "./Hooks";


export default function PageItem(props){
    const {title,index,scrollLeft}=props;
    const style=H.useScrollStyle({scrollLeft,index});
    return (
        <View style={[css.pageitem,styles.pageitem(index)]}>
            <Animated.View style={[css.container,style.container]}/>
            <Animated.Text style={[css.title,style.title]} numberOfLines={1}>{title||""}</Animated.Text>
        </View>
    )
}

const styles={
    pageitem:(i)=>({
        backgroundColor:`rgba(255,141,30,0.${i+2})`,
    }),
}
