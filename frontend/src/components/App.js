import React from "react";
import Home from "./Homepage/Home"
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
import Output from "./Output/Output";

const App = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/query" />
            <Redirect exact from="/out" to="/output" />
            <Redirect exact from="/pro" to="/protocol" />
            <Redirect exact from="/faqs" to="/faq" />
            <Redirect exact from="/tos" to="/privacy" />
            <Redirect exact from="/copy" to="/copyright" />
            <Redirect exact from="/contactus" to="/contact" />
            <Route exact path="/:page?" render={props => <Home {...props} />} />

        </Switch>
    );
};

export default App;