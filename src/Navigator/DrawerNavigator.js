import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {AboutScreen,ComponentScreen,HomeScreen} from "screens";
import * as components from "components";
import {backgroundColor} from "css";


export default function DrawerNavigator(props){
    return (
        <Navigator screenOptions={getOptions}  initialRouteName="home">
            <Screen name="home" component={HomeScreen}/>
            {Object.keys(components).map(key=>(
                <Screen 
                    key={key} name={key} 
                    children={()=><ComponentScreen name={key.toLowerCase()} component={components[key]}/>}
                />
            ))}
            <Screen name="about" component={AboutScreen}/>
        </Navigator>
    )
}

const {Navigator,Screen}=createDrawerNavigator();
const getOptions=({route:{name}})=>{
    const title=`${name[0].toUpperCase()}${name.substring(1)}`;
    return {
        title,
        headerTitle:title,
        headerStyle:{
            backgroundColor,
        },
    };
};
