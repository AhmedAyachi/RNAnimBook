import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import {AboutScreen,HomeScreen} from "routes";
import {backgroundColor} from "css";


export default function Navigator(){
    return (
        <NavigationContainer>
            <StackNavigator initialRouteName="home" screenOptions={getOptions}>
                <Screen name="home" options={{headerShown:false}} component={HomeScreen}/>
                <Screen name="about" component={AboutScreen}/>
            </StackNavigator>
        </NavigationContainer>
    )
}

const {Navigator:StackNavigator,Screen}=createStackNavigator();
const getOptions=({route:{name}})=>({
    headerTitle:`${name[0].toUpperCase()}${name.substring(1)}`,
    headerStyle:{
        backgroundColor,
    },
});
