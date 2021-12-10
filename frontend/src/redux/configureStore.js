import { configureStore, combineReducers, applyMiddleware, } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import sequenceReducer from "./ducks/sequenceSlice";

import inputOneReducer from './InputOneSlice'
import inputThreeReducer from './InputThreeSlice'

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    sequence: sequenceReducer
});

const store = configureStore({
    reducer: { shortSeq: sequenceReducer, },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)],
});

sagaMiddleware.run(watcherSaga);

export default store;

