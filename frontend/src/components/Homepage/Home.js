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

const useStyles = makeStyles({ 
    tabsQuery: {
        minWidth: 140,
        width: 140,
    },
    tabsInstruction: {
        minWidth: 185,
        width: 185,
    },
    tabsProtocol: {
        minWidth: 280,
        width: 280,
    },
    tabsFaq: {
        minWidth: 105,
        width: 105,
    },
    tabsReference: {
        minWidth: 188,
        width: 188,
    },
    tabsAdmin: {
        minWidth: 170,
        width: 170,
    },
})

const Home = props => {
    const classes = useStyles()

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
            

            {selectedTab != 10 && ( 
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
                                        <Tab className={classes.tabsQuery} label="Query" />
                                        <Tab className={classes.tabsInstruction} label="Instructions" />
                                        <Tab className={classes.tabsProtocol} label="Laboratory Protocols" />
                                        <Tab className={classes.tabsFaq} label="FAQ" />
                                        <Tab className={classes.tabsReference} label="References" />
                                        <Tab className={classes.tabsAdmin} label="Admin Login" />
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
            )}
            {selectedTab == 10 && ( 
            <Grid container direction="column">
                <Grid item container>
                   
                        <Grid xs = {12} >
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h2">Lion Localizer</Typography> 
                                </Toolbar>
                            </AppBar>
                        </Grid>
                   
                </Grid>

                <Grid item container>
                    
                        <Grid xs = {12}>
                            <>
                                <AppBar color="secondary" position="static">
                                    <Tabs value={selectedTab} onChange={handleChange}>
                                        <Tab className={classes.tabsQuery} label="Query" />
                                        <Tab className={classes.tabsInstruction} label="Instructions" />
                                        <Tab className={classes.tabsProtocol} label="Laboratory Protocols" />
                                        <Tab className={classes.tabsFaq} label="FAQ" />
                                        <Tab className={classes.tabsReference} label="References" />
                                        <Tab className={classes.tabsAdmin} label="Admin Login" />
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
                    
                </Grid> 

                <Grid item container>
                   
                        <Grid xs = {12}>
                            <Footer />
                        </Grid>
                    
                </Grid>  
            </Grid>
                )} 
                 
                
                


                
            
        </ThemeProvider>
    );
};

export default Home;