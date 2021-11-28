import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import inputOneReducer from './InputOneSlice'
import inputThreeReducer from './InputThreeSlice'

export default configureStore({
    reducer: {
        inputOne: inputOneReducer,
        inputThree: inputThreeReducer
    }
});