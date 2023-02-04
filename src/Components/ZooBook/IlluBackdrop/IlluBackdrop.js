import React,{useState} from "react";
import {View,Animated,Image,ImageBackground} from "react-native";
import css from "./IlluBackdrop.style";


export default function IlluBackdrop(props){
    const {images,animation}=props;
    const [width,setWidth]=useState(null);
    return (
        <View 
            style={css.illubackdrop}
            onLayout={({nativeEvent:{layout:{width}}})=>{setWidth(width)}}
        >
            {width?images.map((image,i)=>
                <Animated.View style={[css.backdrop,,animation(i),{zIndex:images.length-i}]} key={`image${i}`}>
                    <Image 
                        style={[css.image,{width}]} 
                        source={image} 
                        blurRadius={3}
                    />
                </Animated.View>
            ):
                <ImageBackground
                    style={css.image}
                    source={images[0]} 
                    blurRadius={3}
                />
            }
        </View>
    )
}
