import React from "react";
import Home from "./Homepage/Home"
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory, BrowserRouter } from "react-router-dom";
import Output from "./Output/Output";

const App = () => {

    return (
        <Switch>
            <Redirect exact from="/" to="/query" />
            <Route exact path="/:page?" render={props => <Home {...props} />} />
            {/* <Route path="/mapping/sequence-detail/:id" children={<Output />} /> */}

        </Switch>
    );
};

export default App;