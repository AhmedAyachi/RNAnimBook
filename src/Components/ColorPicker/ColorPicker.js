import React,{useRef} from "react";
import {View} from "react-native";
import css from "./ColorPicker.style";
import ColorSlider from "./ColorSlider/ColorSlider";
import Animated from "react-native-reanimated";


export default function ColorPicker(props){
    const {}=props;
    const colorviewref=useRef();
    return (
        <View style={[css.colorpicker,props.style]}>
            <Animated.View ref={colorviewref} style={css.colorview}/>
            <ColorSlider
                onColorChange={(color)=>{
                    colorviewref.current.setNativeProps({style:{backgroundColor:color}});
                }}
            />
        </View>
    )
}
