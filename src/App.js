import React from "react";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AboutScreen,ComponentScreen,HomeScreen} from "screens";
import * as components from "components";
import {backgroundColor,mainColor} from "stylesheet";


export default function App(){
    return <>
        <StatusBar translucent style="auto"/>
        <NavigationContainer>
            <DrawerNavigator screenOptions={getOptions} initialRouteName="home">
                <Screen name="home" component={HomeScreen}/>
                {Object.keys(components).map(key=>(
                    <Screen 
                        key={key} name={key} 
                        children={()=><ComponentScreen name={key.toLowerCase()} component={components[key]}/>}
                    />
                ))}
                <Screen name="about" component={AboutScreen}/>
            </DrawerNavigator>
        </NavigationContainer>
    </>
}

const {Navigator:DrawerNavigator,Screen}=createDrawerNavigator();
const getOptions=({route:{name}})=>{
    const title=`${name[0].toUpperCase()}${name.substring(1)}`;
    return {
        title,
        headerTitle:title,
        headerStyle:{
            //backgroundColor,
        },
        drawerActiveTintColor:mainColor,
    };
};
