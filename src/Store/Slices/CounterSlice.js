import {createSlice} from "@reduxjs/toolkit";


export default createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        set:(state,action)=>{
            state.value=action.payload;
        },
        increase:(state)=>{
            state.value+=1;
        },
        decrease:(state)=>{
            state.value-=1;
        },
        increaseBy:(state,action)=>{
            state.value+=action.payload;
        },  
    },
});
