import React,{useState,useEffect,useMemo} from "react";
import {TouchableWithoutFeedback} from "react-native";
import History from "./History";


export default function Router(props){
    const {children,index}=props;
    const [key,setKey]=useState(index);
    useEffect(()=>{setKey(index)},[index]);
    const routes=useMemo(()=>Array.isArray(children)?children:[children],[props.children]);
    const target=routes.find(route=>route.key===key);
    const history=useMemo(()=>getHistory(new History(setKey,routes,target)),[]);
    return (
        <TouchableWithoutFeedback style={{width:"100%"}}>
            {target?<target.type {...target.props} history={history}></target.type>:<></>}
        </TouchableWithoutFeedback>
    )
}

Router.defaultProps={
    index:"",
    children:[],
};

const getHistory=(history)=>({
    replace:history.replace.bind(history),
    push:history.push.bind(history),
    go:history.go.bind(history),
    back:history.back.bind(history),
    forward:history.forward.bind(history),
    length:history.length,
    size:history.size,
});
