import React from "react";
import {View} from "react-native";
import css from "./PrisonerView.style";
import Animated from "react-native-reanimated";
import {PanGestureHandler,GestureHandlerRootView} from "react-native-gesture-handler";
import * as H from "./Hooks";


export default function PrisonerView(props){
    const {handler,style}=H.useDragGesture();
    return (
        <GestureHandlerRootView>
            <View style={[css.prisonerview,props.style]}>
                <PanGestureHandler onGestureEvent={handler}>
                    <Animated.View style={[css.prisoner,style]}/>
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    )
}

