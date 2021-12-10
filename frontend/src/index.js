import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import shortSequenceReducer from './redux/State/shortSequenceState'
import shortSequenceSaga from "./redux/Saga/shortSequenceSaga";

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        shortSeqs: shortSequenceReducer
    },
    middleware: [saga]
});
saga.run(shortSequenceSaga);

const appElement = document.getElementById("app");
ReactDOM.render(
    <React.StrictMode>
        <Router>
        <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>, 
    appElement
);