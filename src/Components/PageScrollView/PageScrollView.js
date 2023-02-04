import React from "react";
import {} from "react-native";
import css from "./PageScrollView.style";
import Animated,{useAnimatedScrollHandler,useSharedValue} from "react-native-reanimated";
import PageItem from "./PageItem/PageItem";


export default function PageScrollView(props){
    const {}=props;
    const scrollLeft=useSharedValue(0);
    const scrollHandler=useAnimatedScrollHandler((event)=>{
        scrollLeft.value=event.contentOffset.x;
    });
    return (
        <Animated.FlatList 
            style={[css.pagescrollview,props.style]}
            onScroll={scrollHandler}
            scrollEventThrottle={17}
            contentContainerStyle={css.container}
            horizontal pagingEnabled
            data={statics.words}
            renderItem={({item,index})=><PageItem key={item} title={item} index={index} scrollLeft={scrollLeft}/>}
        />
    )
}

const statics={
    words:"this is an experimental component".split(" "),
}
