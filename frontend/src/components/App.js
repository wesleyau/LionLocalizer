import React from "react";
import Home from "./Homepage/Home"
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
import Output from "./Output/Output";

const App = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/query" />
            <Redirect exact from="/out" to="/output" />
            <Route exact path="/:page?" render={props => <Home {...props} />} />

        </Switch>
    );
};

export default App;