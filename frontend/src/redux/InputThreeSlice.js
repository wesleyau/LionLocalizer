//for setting the textbox to the output page
import { createSlice } from "@reduxjs/toolkit"

const inputThreeSlice = createSlice({
    name: 'textOneInput',
    initialState: {
        ID: "",
        box1: "",
        box2: "",
        box3: "",
    },
    reducers: {
        IDReducer: (state, action) => {
            state.ID = action.payload;
        },
        box1Reducer: (state, action) => {
            state.box1 = action.payload;
        },
        box1Reducer: (state, action) => {
            state.box2 = action.payload;
        },
        box1Reducer: (state, action) => {
            state.box3 = action.payload;
        },
    }
})

export const { IDReducer, box1Reducer, box2Reducer, box3Reducer } = inputThreeSlice.actions;

export default inputThreeSlice.reducer;