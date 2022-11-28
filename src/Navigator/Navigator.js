import React from "react";
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import {AboutScreen} from "routes";
import {backgroundColor} from "css";


export default function Navigator(){
    return (
        <NavigationContainer>
            <StackNavigator initialRouteName="home" screenOptions={getOptions}>
                <Screen name="home" component={DrawerNavigator}/>
                <Screen name="about" component={AboutScreen}/>
            </StackNavigator>
        </NavigationContainer>
    )
}

const {Navigator:StackNavigator,Screen}=createStackNavigator();
const getOptions=({route:{name}})=>({
    headerTitle:`${name[0].toUpperCase()}${name.substring(1)}`,
    headerShown:false,
    headerStyle:{
        backgroundColor,
    },
});
