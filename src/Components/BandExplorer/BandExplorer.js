import React,{useState,useRef} from "react";
import {View,ImageBackground,Animated} from "react-native";
import css from "./BandExplorer.style";
import BandView from "./BandView/BandView";
import {revue,diewoord0,worldsaxophone0,yearsnadyears0,tension,sos,houseofzef,palosanto,communion,ashiftinmoods,kitsunereal,metamorphosis,dancesandballads} from "assets";


export default function BandExplorer(props){
    const [dimensions,setDimensions]=useState();
    const scrollX=useRef(new Animated.Value(0)).current;
    const refs=useRef({
        bandslist:useRef(),
    }).current;
    return (
        <View 
            style={[css.bandexplorer,props.style]}
            onLayout={({nativeEvent:{layout:{width,height}}})=>{
                setDimensions({width:width-css.bandexplorer.borderWidth*2,height});
            }}
        >
            {dimensions?bands.map((band,i)=>
                <Animated.Image 
                    key={band.name}
                    style={[css.background,{opacity:scrollX.interpolate({
                        inputRange:[(i-1)*dimensions.width,i*dimensions.width,(i+1)*dimensions.width],
                        outputRange:[0,1,0],
                    })}]}
                    source={band.cover} 
                    blurRadius={5}
                />):
                <ImageBackground
                    style={css.background}
                    source={bands[0].cover}
                    blurRadius={5}
                />
            }
            {dimensions&&
                <Animated.FlatList 
                    contentContainerStyle={css.bandslist}
                    ref={refs.bandslist}
                    horizontal pagingEnabled
                    onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:true})}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({name})=>name}
                    data={bands}
                    renderItem={({item})=>
                        <BandView 
                            band={item} 
                            listRef={refs.bandslist}
                            containerDimensions={dimensions}
                        />
                    }
                />
            }
        </View>
    )
}

const bands=[
    {
        name:"world saxophone quartet",
        cover:worldsaxophone0,
        populars:[
            {title:"in a sentimental mood",duration:322},
            {title:"song for camille",duration:464},
            {title:"come sunday",duration:462},
        ],
        albums:[
            {name:"metamorphosis",cover:metamorphosis},
            {name:"dances and ballads",cover:dancesandballads},
            {name:"revue",cover:revue},
        ],
    },
    {
        name:"years & years",
        cover:yearsnadyears0,
        populars:[
            {title:"shine",duration:265},
            {title:"worship",duration:290},
            {title:"take shelter",duration:263},
        ],
        albums:[
            {name:"palo santo",cover:palosanto},
            {name:"kitsuné | real",cover:kitsunereal},
            {name:"a shift in moods",cover:ashiftinmoods},
        ],
    },
    {
        name:"die antwoord",
        cover:diewoord0,
        populars:[
            {title:"ugly boy",duration:213},
            {title:"baby's on fire",duration:288},
            {title:"i fink u freeky",duration:236},
        ],
        albums:[
            {name:"ten$ion",cover:tension},
            {name:"$O$",cover:sos},
            {name:"house of zef",cover:houseofzef},
        ],
    },
];