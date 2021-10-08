import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import Output from '../Output/Output';
import Copyright from './Tabs/Copyright';
import Faq from './Tabs/Faq';
import Publications from './Tabs/Publications';
import Extraction from './Tabs/Extraction';
import Contact from './Tabs/Contact';
import Admin from './Tabs/Admin';
import Privacy from './Tabs/Privacy';
import Query from './Query';
import Footer from "./Footer";
import Theme from "../Theme";

const Home = () => {
    
    const [ selectedTab, setSelectedTab ] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue ) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    return (
        <ThemeProvider theme={Theme}>
            <Grid container direction="column">
                <Grid item container>
                    <Grid xs= {0} md = {1} style={{background: "#F8FAFC"}}/>
                        <Grid sm = {12} md = {10}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h3">Lion Localizer</Typography> 
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                </Grid>


                <Grid item container>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                        <Grid sm = {12} md = {10}>
                                <AppBar color="secondary" position="static">
                                        <Router>
                                                <Switch>
                                                        <Tabs>
                                                            <Route exact path="/" component={Query}>
                                                                <Tab label="Query" />
                                                            </Route>
                                                            <Route path="/extration" component={Extraction}>
                                                                <Tab label="DNA Extraction Protocals" />
                                                            </Route>
                                                            <Route path="/publications" component={Publications}>
                                                                <Tab label="Publications" />
                                                            </Route>
                                                            <Route path="/faq" component={Faq}>
                                                                <Tab label="FAQ" />
                                                            </Route>
                                                            <Route path="/contact" component={Contact}>
                                                                <Tab label="Contact Us" />
                                                            </Route>
                                                            <Route path="/copyright" component={Copyright}>
                                                                <Tab label="Copyright" />
                                                            </Route>
                                                            <Route path="/privacy" component={Privacy}>
                                                                <Tab label="Privacy Statement and Terms of Use" />
                                                            </Route>
                                                            <Route path="/admin" component={Admin}>
                                                                <Tab label="Admin Login" />
                                                            </Route>
                                                        </Tabs>
                                                </Switch>
                                        </Router>
                                </AppBar>
                        </Grid>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                </Grid>    


                <Grid item container>
                    <Grid xs= {0} md = {1} style={{background: "#F8FAFC"}}/>
                        <Grid sm = {12} md = {10}>
                            <Footer />
                        </Grid>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                </Grid>  
            </Grid>
        </ThemeProvider>
    );
};

export default Home;