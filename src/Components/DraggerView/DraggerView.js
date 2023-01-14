import React from "react";
import {View} from "react-native";
import css from "./DraggerView.style";
import Animated from "react-native-reanimated";
import {PanGestureHandler,GestureHandlerRootView} from "react-native-gesture-handler";
import * as H from "./Hooks";


export default function DraggerView(props){
    const {handler,style}=H.useDrag();
    return (
        <GestureHandlerRootView>
            <View style={css.draggerview}>
                <PanGestureHandler onGestureEvent={handler}>
                    <Animated.View style={[css.dragger,style]}/>
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    )
}

