import React from "react";
import {Platform,UIManager} from "react-native";
import {NativeRouter} from "react-router-native";
import {registerRootComponent} from "expo";
import {store} from "./Store";
import {Provider} from "react-redux";
import App from "./App";
import {useCustomFonts} from "./index.style";


if(Platform.OS==="android"&&UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

registerRootComponent(()=>{
    const fontsloaded=useCustomFonts();
    return (fontsloaded&&
        <Provider store={store}>
            <NativeRouter>
                <App/>
            </NativeRouter>
        </Provider>
    )
});