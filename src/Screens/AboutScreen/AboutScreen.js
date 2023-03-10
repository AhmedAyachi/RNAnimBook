import React from "react";
import ScreenView from "../ScreenView/ScreenView";
import {Image,View,Text} from "react-native";
import css from "./AboutScreen.style";
import {SvgFromXml} from "react-native-svg";
import {tabler,cordova,svgrepo,phone0,linkedin0,mail0,appicon} from "assets";


export default function AboutScreen(props){
    const {}=props;
    return (
        <ScreenView style={css.aboutscreen}>
            <View style={css.row0}>
                <SvgFromXml {...css.appicon} xml={appicon}/>
                <Text style={css.title}>RNAnimBook</Text>
                <Text style={css.version}>1.0.0</Text>
                <View style={css.section}>
                    <Text style={css.title}>About Author</Text>
                    <View style={css.fields}>
                        {statics.fields.map(({id,icon,value})=>(
                            <View key={id} style={css.field}>
                                <SvgFromXml {...css.icon} xml={icon("white")}/>
                                <Text style={css.value}>{value}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <View style={css.row1}>
                {[tabler,svgrepo].map((icon,i)=>(
                    <SvgFromXml key={"icon"+i} {...css.image} xml={icon}/>
                ))}
            </View>
        </ScreenView>
    )
}

const statics={
    fields:[
        {
            id:"mail",icon:mail0,
            value:"aayachi032@gmail.com",
        },
        {
            id:"linkedin",icon:linkedin0,
            value:"www.linkedin.com/in/ahmed-ayachi",
        },
        {
            id:"phone",icon:phone0,
            value:"+216 56152037",
        },
    ],
}
