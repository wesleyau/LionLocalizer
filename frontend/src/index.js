import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./redux/configureStore"

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