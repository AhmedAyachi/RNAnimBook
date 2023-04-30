import React, { useEffect } from "react";
import {View} from "react-native";
import css from "./OnboardingView.style";
import HeaderView from "./HeaderView/HeaderView";
import TopicView from "./TopicView/TopicView";
import GenieButton from "./GenieButton/GenieButton";
import Animated,{runOnJS,withTiming} from "react-native-reanimated";
import {perrot0,eagle0} from "assets";
import * as H from "./Hooks";


export default function OnboardingView(props){
    const {}=props;
    const {transition,index,setIndex,topicsElStyle,btnStyle}=H.useTransitionAnim(statics.topics);
    /* useEffect(()=>{
        console.log("index",index);
    },[index]); */
    return (
        <View style={[css.onboardingview,props.style]}>
            <HeaderView/>
            <Animated.View style={[css.topics,topicsElStyle]}>
                {statics.topics.map(topic=>(
                    <TopicView key={topic.description} {...topic}/>
                ))}
            </Animated.View>
            <GenieButton 
                style={btnStyle}
                onClick={()=>{
                    transition.value=withTiming(100*(index+1),{duration:2000},()=>{
                        const i=index+1;
                        runOnJS(setIndex)((i<statics.topics.length)?i:0);
                    });
                }}
            />
        </View>
    )
}

const statics={
    topics:[
        {
            image:perrot0,
            description:"local news stories",
            color:"#0139c0",
        },
        {
            image:eagle0,
            description:"choose your interests",
            color:"#f1b0d0",
        },
        {
            image:eagle0,
            description:"ready to shine",
            color:"#cc0000",
        },
    ],
}
