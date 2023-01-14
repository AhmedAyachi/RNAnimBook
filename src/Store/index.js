import {configureStore} from "@reduxjs/toolkit";
import {} from "./Slices";



export const store=configureStore({
    reducer:()=>null,
    devTools:true,
});
