import { createSlice } from '@reduxjs/toolkit';

export const shortSequenceSlice = createSlice({
    name: 'shortSeqs',
    initialState: {
        shortSeqs: [],
        isLoading: false
    },
    reducers: {
        getShortSequenceFetch: (state) => { 
            state.isLoading = true;
        },
        getShortSequenceSuccess: (state, action) => { 
            state.shortSeqs = action.payload;
            state.isLoading = false;
        },
        getShortSequenceFailure: (state) => {
            state.isLoading = false;
        },
    }
});

export const { getShortSequenceFetch, getShortSequenceSuccess, getShortSequenceFailure } = shortSequenceSlice.actions;

export default shortSequenceSlice.reducer;