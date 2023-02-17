import { createSlice } from "@reduxjs/toolkit";

const initialState={
  count:100
}

export const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      state.count++
    },
    decrement:(state)=>{
      state.count--;
    },
    reset:(state)=>{
      state.count=initialState;
    }
  }
})

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;