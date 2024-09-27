import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES={
     counter:0,
}

const counterSlice=createSlice({
    name: 'counter',
  initialState: INITIAL_VALUES,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counter -= Number(action.payload);
    }
  }
})

export const counterAction=counterSlice.actions;

export  default counterSlice;

