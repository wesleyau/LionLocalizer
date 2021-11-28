//for setting the textbox to the output page

import { createSlice } from "@reduxjs/toolkit"

const inputOneSlice = createSlice({
    name: 'textOneInput',
    initialState: {
        ID: "",
        box1: ""
    },
    //Setting the textbox states 
    reducers: {
        IDReducer: (state, action) => {
            state.ID = action.payload;
        },
        box1Reducer: (state, action) => {
            state.box1 = action.payload;
        },
    }
})

//Actions creators are generated for each case reducer function
export const { IDReducer, box1Reducer } = inputOneSlice.actions;

export default inputOneSlice.reducer;