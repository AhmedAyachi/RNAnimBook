import React,{useRef} from "react";
import {View,Animated} from "react-native";
import css from "./ZooBook.style";
import {perrot0,snake0,cat0,bovid0,eagle0,horse0,owl0} from "assets";
import IlluCard from "./IlluCard/IlluCard";
import IlluBackdrop from "./IlluBackdrop/IlluBackdrop";
import {vw} from "css";


export default function ZooBook(){
    const scrollX=useRef(new Animated.Value(0)).current;
    return (
        <View style={css.zoobook}>
            <IlluBackdrop 
                animation={(index)=>styles.illbackdrop(scrollX,index)}
                images={illucards.map(illucard=>illucard.image)} 
            />
            <Animated.FlatList
                contentContainerStyle={[css.cardslist,{paddingHorizontal:sharedState.spacerwidth}]}
                showsHorizontalScrollIndicator={false}
                horizontal
                snapToInterval={sharedState.illucardoffsetwidth}
                decelerationRate="fast"
                snapToAlignment="center"
                disableIntervalMomentum={true}
                bounces={false}
                onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
                keyExtractor={({title})=>title}
                data={illucards}
                renderItem={({item,index})=>
                    <IlluCard style={[css.illucard,styles.illucard(scrollX,index)]} card={item}/>
                }
            />
        </View>
    )
}

const styles={
    illbackdrop:(scrollX,i)=>({
        width:scrollX.interpolate({
            inputRange:[
                (i-1)*sharedState.illucardoffsetwidth,
                i*sharedState.illucardoffsetwidth,
                (i+1)*sharedState.illucardoffsetwidth,
            ],
            outputRange:["100%","100%","0%"],
            extrapolate:"clamp",
        }),
    }),
    illucard:(scrollX,i)=>({
        transform:[{translateY:scrollX.interpolate({
            inputRange:[
                (i-1)*sharedState.illucardoffsetwidth,
                i*sharedState.illucardoffsetwidth,
                (i+1)*sharedState.illucardoffsetwidth,
            ],
            outputRange:[0,-70,0],
            extrapolate:"clamp",
        })}],
    }),
}

const sharedState=new function(){
    this.illucardwidth=css.illucard.width;
    this.illucardoffsetwidth=(this.illucardwidth+css.illucard.marginHorizontal*2)-0.07*vw;
    this.spacerwidth=(100*vw-this.illucardoffsetwidth)/2;
    return this;
};

const illucards=[
    {title:"Parrot",image:perrot0},
    {title:"Snake",image:snake0},
    {title:"Cat",image:cat0},
    {title:"Bovid",image:bovid0},
    {title:"Eagle",image:eagle0},
    {title:"Horse",image:horse0},
    {title:"Owl",image:owl0},
];