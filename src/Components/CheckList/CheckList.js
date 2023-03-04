import React from "react";
import {View,Text,FlatList} from "react-native";
import css from "./CheckList.style";
import ItemView from "./ItemView/ItemView";


export default function CheckList(props){
    return (
        <View style={[css.checklist,props.style]}>
            <Text style={css.title}>checklist</Text>
            <FlatList
                style={css.flatlist}
                contentContainerStyle={css.container}
                data={statics.list}
                renderItem={({item})=><ItemView item={item}/>}
            />
        </View>
    )
}

const statics={
    list:new Array(20).fill().map((_,i)=>`do something N°${i+1}`),
}
