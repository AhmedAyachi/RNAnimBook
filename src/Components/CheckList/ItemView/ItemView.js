import React from "react";
import {Text} from "react-native";
import css from "./ItemView.style";
import Animated from "react-native-reanimated";
import {SvgXml} from "react-native-svg";
import {PanGestureHandler} from "react-native-gesture-handler";
import {check0,trash0} from "assets";
import * as H from "./Hooks";


export default function ItemView(props){
    const {}=props;
    const {mounted,setMinDistance,itemStyle,containerStyle,confirmIconStyle,deleteIconStyle,panHandler}=H.useUnMountAnim();
    return (mounted&&
        <Animated.View 
            style={[css.itemview,itemStyle]} 
            onLayout={({nativeEvent:{layout:{width}}})=>{setMinDistance(0.35*width)}}
        >
            <PanGestureHandler 
                activeOffsetX={[-5,5]}
                failOffsetY={[-5,5]}
                onGestureEvent={panHandler}
            >
                <Animated.View style={[css.container,containerStyle]}>
                    <Text style={css.text}>{props.item}</Text>
                </Animated.View>
            </PanGestureHandler>
            <Animated.View style={[css.checkbtn,confirmIconStyle]}>
                <SvgXml {...css.icon} xml={check0("white")}/>
            </Animated.View>
            <Animated.View style={[css.deletebtn,deleteIconStyle]}>
                <SvgXml {...css.icon} xml={trash0("white")}/>
            </Animated.View>
        </Animated.View>
    )
}
