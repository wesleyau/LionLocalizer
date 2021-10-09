import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
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
import Output from '../Output/Output';

const Home = props => {
    
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "query",
        1: "protocal",
        2: "publications",
        3: "faq",
        4: "contact",
        5: "copyright",
        6: "privacy",
        7: "admin",
        8: "output",
      };

      const indexToTabName = {
        query: 0,
        protocal: 1,
        publications: 2,
        faq: 3,
        contact: 4,
        copyright: 5,
        privacy: 6,
        admin: 7,
        output: 8,
      };
    

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
                                    <Typography variant="h2">Lion Localizer</Typography> 
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                </Grid>


                <Grid item container>
                    <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                        <Grid sm = {12} md = {10}>
                            <>
                                <AppBar color="secondary" position="static">
                                    <Tabs value={selectedTab} onChange={handleChange}>
                                        <Tab label="Query" />
                                        <Tab label="DNA Extraction Protocals" />
                                        <Tab label="Publications" />
                                        <Tab label="FAQ" />
                                        <Tab label="Contact Us" />
                                        <Tab label="Copyright" />
                                        <Tab label="Privacy Statement and Terms of Use" />
                                        <Tab label="Admin Login" />
                                    </Tabs>
                                </AppBar>
                                { selectedTab === 0 && <Query /> }
                                { selectedTab === 1 && <Extraction /> }
                                { selectedTab === 2 && <Publications /> }
                                { selectedTab === 3 && <Faq /> }
                                { selectedTab === 4 && <Contact /> }
                                { selectedTab === 5 && <Copyright /> }
                                { selectedTab === 6 && <Privacy /> }
                                { selectedTab === 7 && <Admin /> }
                                { selectedTab === 8 && <Output /> }
                            </>
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