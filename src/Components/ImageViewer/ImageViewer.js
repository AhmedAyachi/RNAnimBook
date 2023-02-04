import React from "react";
import css from "./ImageViewer.style";
import {GestureHandlerRootView,FlatList} from "react-native-gesture-handler";
import ImageView from "./ImageView/ImageView";
import {img7,img9} from "assets";


export default function ImageViewer(props){
    const {}=props;
    return (
        <GestureHandlerRootView style={css.imageviewer}>
            <FlatList
                style={css.flatlist}
                contentContainerStyle={css.container}
                horizontal pagingEnabled
                data={[img7,img9]}
                renderItem={({item})=><ImageView src={item}/>}
            />
        </GestureHandlerRootView>
    )
}
