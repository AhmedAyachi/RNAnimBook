import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DetailScreen,HomeScreen} from "routes";


export default function DrawerNavigator(props){
    return (
        <Navigator screenOptions={getOptions}>
            <Screen name="home" options={{title:"Home"}} component={HomeScreen}/>
            <Screen name="details" options={{title:"Details"}} component={DetailScreen}/>
        </Navigator>
    )
}

const {Navigator,Screen}=createDrawerNavigator();
const getOptions=()=>({
    
});
