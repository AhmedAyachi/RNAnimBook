import React from "react";
import {View,Text,FlatList} from "react-native";
import css from "./SongSection.style";
import SongView from "./SongView/SongView";


export default function SongSection(props){
    const {songs}=props;
    return (
        <View style={css.songsection}>
            <Text style={css.title}>Popular</Text>
            <FlatList
                style={css.songslist}
                showsVerticalScrollIndicator={false}
                keyExtractor={({title})=>title}
                data={songs}
                renderItem={({item})=>
                    <SongView key={item.title} song={item}/> 
                }
            />
        </View>
    )
}

SongSection.defaultProps={
    songs:[],
}