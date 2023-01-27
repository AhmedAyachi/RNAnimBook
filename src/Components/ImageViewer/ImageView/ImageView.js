import React,{useState} from "react";
import { View } from "react-native";
import {PinchGestureHandler,TapGestureHandler} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import css from "./ImageView.style";
import HeartPopup from "./HeartPopup/HeartPopup";
import * as H from "./Hooks";


export default function ImageView(props){
    const [origin,setOrigin]=useState();
    const [liked,setLiked]=useState(false);
    const refs=H.useRefs();
    const {zoomHandler,style}=H.useZoomGesture(origin);
    return (
        <TapGestureHandler 
            ref={refs.doubletap}
            numberOfTaps={2} 
            onActivated={()=>{setLiked(!liked)}}
        >
            <View style={css.imageview}>
                <PinchGestureHandler onGestureEvent={zoomHandler}>
                    <Animated.View 
                        style={css.imgwrapper} 
                        onLayout={({nativeEvent:{layout:{width,height}}})=>{setOrigin({x:width/2,y:height/2})}}
                    >
                        <HeartPopup visible={liked}/>
                        <Animated.Image style={[css.image,style]} source={props.src}/>
                    </Animated.View>
                </PinchGestureHandler>
            </View>
        </TapGestureHandler> 
    )
}
