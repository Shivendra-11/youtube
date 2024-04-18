import { createSlice } from "@reduxjs/toolkit";

const searcSlice=createSlice({  
    name:"search",
    initialState:{
        
    },
    reducers:{
        cacheResult:(state,action)=>{
        state=Object.assign(state,action.payload);
        },
    },      
})


export const {cacheResult}=searcSlice.actions;
export default searcSlice.reducer;

