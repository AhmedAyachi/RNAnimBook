import React from "react";
import {View,ScrollView} from "react-native";
import css from "./OnboardingView.style";
import HeaderView from "./HeaderView/HeaderView";
import TopicView from "./TopicView/TopicView";
import GenieButton from "./GenieButton/GenieButton";
import {perrot0,eagle0} from "assets";


export default function OnboardingView(props){
    const {}=props;
    return (
        <View style={[css.onboardingview,props.style]}>
            <View style={css.foreground}>
                <HeaderView/>
                <ScrollView 
                    style={css.topics} 
                    horizontal
                >
                    {statics.topics.map(topic=>(
                        <TopicView key={topic.description} {...topic}/>
                    ))}
                </ScrollView>
            </View>
            <GenieButton/>
        </View>
    )
}

const statics={
    topics:[
        {image:perrot0,description:"local news stories"},
        {image:eagle0,description:"choose your interests"},
    ],
}
