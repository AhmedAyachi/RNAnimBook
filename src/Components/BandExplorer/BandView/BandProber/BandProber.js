import React from "react";
import {Text,Animated,TouchableOpacity as TO} from "react-native";
import css from "./BandProber.style";
import {AntDesign} from "@expo/vector-icons";
import SongSection from "./SongSection/SongSection";
import AlbumSection from "./AlbumSection/AlbumSection";
import * as H from "./Hooks";


export default function BandProber(props){
    const {band,height,containerHeight,flexDirection,onClose,probed}=props;
    const [y]=H.usePopUpAnimation(probed);
    return (
        <Animated.View style={[css.bandprober,styles.bandprober(height,containerHeight)]} remove>
            <Animated.View style={[css.row0,{flexDirection}]}>
                <Text style={[css.label,css.overview]}>overview</Text>
                <Text style={[css.label,css.about]}>about</Text>
                <Text style={[css.label,css.events]}>events</Text>          
            </Animated.View>
            <Animated.View style={[css.row1,styles.row1(height,containerHeight)]}>
            {probed&&<>
                <Animated.View style={[css.row2,styles.row2(y)]}>
                    <SongSection songs={band.populars}/>
                </Animated.View>
                <Animated.View style={[css.row3,styles.row3(y)]}>
                    <AlbumSection albums={band.albums}/>
                    <TO activeOpacity={0.1}>
                        <AntDesign {...css.closebtn} name="arrowdown" onTouchEnd={onClose}/>
                    </TO>
                </Animated.View>
            </>}
            </Animated.View>
        </Animated.View>
    )
}

const styles={
    bandprober:(height,containerHeight)=>({
        height:height.interpolate({
            inputRange:[containerHeight*0.6,containerHeight],
            outputRange:[css.bandprober.height,containerHeight*0.97],
            extrapolate:"clamp",
        }),
    }),
    row1:(height,containerHeight)=>({
        opacity:height.interpolate({
            inputRange:[containerHeight*0.6,containerHeight],
            outputRange:[0,1],
            extrapolate:"clamp",
        }),
    }),
    row2:(y)=>({
        opacity:y.interpolate({
            inputRange:[y.to,y.from],
            outputRange:[1,0],
            extrapolate:"clamp",
        }),
        transform:[{translateY:y}],
    }),
    row3:(y)=>({
        opacity:y.interpolate({
            inputRange:[y.to,y.from],
            outputRange:[1,0],
            extrapolate:"clamp",
        }),
        transform:["X","Y"].flatMap(side=>{
            const translate={},scale={};
            translate[`translate${side}`]=y;
            scale[`scale${side}`]=y.interpolate({
                inputRange:[y.to,y.from],
                outputRange:[1,1.5],
            });
            return [scale,translate];
        }),
    }),
}