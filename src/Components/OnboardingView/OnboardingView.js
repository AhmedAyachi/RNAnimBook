import React,{useState,useMemo, useRef} from "react";
import {View,ScrollView} from "react-native";
import css from "./OnboardingView.style";
import HeaderView from "./HeaderView/HeaderView";
import TopicView from "./TopicView/TopicView";
import GenieButton from "./GenieButton/GenieButton";
import Animated,{useAnimatedScrollHandler,useAnimatedStyle,useSharedValue,interpolateColor} from "react-native-reanimated";
import {perrot0,eagle0} from "assets";
import { vw } from "stylesheet";


export default function OnboardingView(props){
    const {}=props;
    const [index,setIndex]=useState(0);
    const scrollLeft=useSharedValue(0);
    const scrollHandler=useAnimatedScrollHandler(event=>{
        scrollLeft.value=event.contentOffset.x;
    });
    const btnStyle=useAnimatedStyle(()=>{
        const {topics}=statics,width=100*vw;
        return {
            backgroundColor:interpolateColor(
                scrollLeft.value,
                topics.map((_,i)=>width*i),
                topics.map((_,i)=>topics[topics.length-i-1].color),
            ),
        };
    });
    const scrollRef=useRef();
    return (
        <View style={[css.onboardingview,props.style]}>
            <HeaderView/>
            <Animated.ScrollView 
                ref={scrollRef} style={css.topics}  
                horizontal scrollEnabled={true}
                onScroll={scrollHandler}
                showsHorizontalScrollIndicator={false}
            >
                {statics.topics.map(topic=>(
                    <TopicView key={topic.description} {...topic}/>
                ))}
            </Animated.ScrollView>
            <GenieButton 
                scrollLeft={scrollLeft}
                from={"red"/* statics.topics[index].color */}
                to={statics.topics[statics.topics.length-index-1].color}
                /* onMidReached={()=>{
                    console.log("onMidReached called");
                    const topicsEl=scrollRef.current;
                    topicsEl?.scrollTo({x:(index+1)*100*vw});
                }} */
                //style={btnStyle}
                /* onClick={()=>{
                    const topicsEl=scrollRef.current;
                    topicsEl.scrollTo({x:100*vw});
                }} */
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
    ],
}
