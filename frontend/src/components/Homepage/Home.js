import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Copyright from './Tabs/Copyright';
import Faq from './Tabs/Faq';
import References from './Tabs/References';
import Extraction from './Tabs/Extraction';
import Contact from './Tabs/Contact';
import Admin from './Tabs/Admin';
import Privacy from './Tabs/Privacy';
import Instructions from './Tabs/Instructions';
import Query from './Query';
import Footer from "./Footer";
import Terms from "./Tabs/Terms";
import Theme from "../Theme";
import Output from '../Output/Output';

const Home = props => {
    
    const { match, history } = props;
    const { params } = match;
    const { page } = params;

    const tabNameToIndex = {
        0: "query",
        1: "instructions",
        2: "protocol",
        3: "faq",
        4: "references",
        5: "admin",
        6: "contact",
        7: "copyright",
        8: "privacy",
        9: "terms",
        10: "output",
      };

      const indexToTabName = {
        query: 0,
        instructions: 1,
        protocol: 2,
        faq: 3,
        references: 4,
        admin: 5,
        contact: 6,
        copyright: 7,
        privacy: 8,
        terms: 9,
        output: 10,
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
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                        <Grid xs = {12} lg = {10}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h2">Lion Localizer</Typography> 
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                </Grid>


                <Grid item container>
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                        <Grid xs = {12} lg = {10}>
                            <>
                                <AppBar color="secondary" position="static">
                                    <Tabs value={selectedTab} onChange={handleChange}>
                                        <Tab label="Query" />
                                        <Tab label="Instructions" />
                                        <Tab label="Laboratory Protocols" />
                                        <Tab label="FAQ" />
                                        <Tab label="References" />
                                        <Tab label="Admin Login" />
                                    </Tabs>
                                </AppBar>
                                { selectedTab === 0 && <Query /> }
                                { selectedTab === 1 && <Instructions /> }
                                { selectedTab === 2 && <Extraction /> }
                                { selectedTab === 3 && <Faq /> }
                                { selectedTab === 4 && <References /> }
                                { selectedTab === 5 && <Admin /> }
                                { selectedTab === 6 && <Contact /> }
                                { selectedTab === 7 && <Copyright /> }
                                { selectedTab === 8 && <Privacy /> }
                                { selectedTab === 9 && <Terms /> }
                                { selectedTab === 10 && <Output /> }
                            </>
                        </Grid>
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                </Grid>    


                <Grid item container>
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                        <Grid xs = {12} lg = {10}>
                            <Footer />
                        </Grid>
                    <Grid md= {0} lg = {1} style={{background: "#F8FAFC"}}/>
                </Grid>  
            </Grid>
        </ThemeProvider>
    );
};

export default Home;