import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';


const saga = createSagaMiddleware();


const appElement = document.getElementById("app");
ReactDOM.render(
    <React.StrictMode>
        <Router>
        <CssBaseline />
                <App />
            
        </Router>
    </React.StrictMode>, 
    appElement
);