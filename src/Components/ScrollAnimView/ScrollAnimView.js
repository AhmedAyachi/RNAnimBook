import React from "react";
import css from "./ScrollAnimView.style";
import Animated from "react-native-reanimated";
import ItemView from "./ItemView/ItemView";
import *  as H from "./Hooks";


export default function ScrollAnimView(props){
    const {scrollhandler,scrollLeft}=H.useScrollAnim();
    return (
        <Animated.FlatList 
            style={css.scrollanimview} 
            horizontal={true} pagingEnabled={true}
            data={"ahmed".split("")}
            onScroll={scrollhandler}
            scrollEventThrottle={10}
            renderItem={({item,index})=><ItemView item={item} index={index} scrollLeft={scrollLeft}/>}
        />
    )
}
