import React, { useState, useEffect } from 'react';
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

import { useSelector, useDispatch, shallowEqual } from 'react-redux';



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
    tabsContact: {
        minWidth: 135,
        width: 135,
    },
    tabsCopyright: {
        minWidth: 210,
        width: 210,
    },
    tabsPrivacy: {
        minWidth: 160,
        width: 160,
    },
    tabsTerms: {
        minWidth: 285,
        width: 285,
    },
    disclaimer: {
        fontWeight: 'bold',
        marginTop: 10, 
        marginLeft: 5,   
        marginBottom: 10
    },
    queryLink: {
        textDecoration: 'none',
        color: '#FFFFFF',
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
        5: "contact",
        6: "copyright",
        7: "privacy",
        8: "terms",
        9: "output",
      };

      const indexToTabName = {
        query: 0,
        instructions: 1,
        protocol: 2,
        faq: 3,
        references: 4,
        contact: 5,
        copyright: 6,
        privacy: 7,
        terms: 8,
        output: 9,
      };
    

    const handleChange = (event, newValue ) => {
        history.push(`/${tabNameToIndex[newValue]}`);
    };

    const selectedTab = indexToTabName[page];

    return (
        <ThemeProvider theme={Theme}>
            
            
            <Grid container direction="column">
                <Grid item container>
                    <Grid xs = {12} >
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h2" className={classes.queryLink} to="/query" component={Link} >Lion Localizer</Typography> 
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>

                <Grid item container>
                        <Grid xs = {12}>
                            <>
                                <AppBar color="secondary" position="static">
                                    <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary">
                                        <Tab className={classes.tabsQuery} label="Query" />
                                        <Tab className={classes.tabsInstruction} label="Instructions" />
                                        <Tab className={classes.tabsProtocol} label="Laboratory Protocols" />
                                        <Tab className={classes.tabsFaq} label="FAQ" />
                                        <Tab className={classes.tabsReference} label="References" />
                                    </Tabs>
                                </AppBar>
                                {selectedTab != 9 && (
                                    <Grid item container>
                                        <Grid item xs={1} />
                                            <Grid xs = {10}>
                                                { selectedTab === 0 && <Query /> }
                                                { selectedTab === 1 && <Instructions /> }
                                                { selectedTab === 2 && <Extraction /> }
                                                { selectedTab === 3 && <Faq /> }
                                                { selectedTab === 4 && <References /> }
                                                { selectedTab === 5 && <Contact /> }
                                                { selectedTab === 6 && <Copyright /> }
                                                { selectedTab === 7 && <Privacy /> }
                                                { selectedTab === 8 && <Terms /> }
                                                { selectedTab === 9 && <Output /> }
                                            </Grid>
                                        <Grid item xs={1} />
                                             
                                        <Grid item xs={1} />
                                            <Grid item xs={10}>
                                                <Typography variant="caption" display="block" className={classes.disclaimer}>
                                                    The Lion Localizer was made possible by the support of the American people through United States Agency for International Development (USAID). 
                                                    The views represented on this website do not necessarily reflect the views of the University of Illinois at Urbana-Champaign, USAID, or the United States government.
                                                </Typography>
                                            </Grid>
                                        <Grid item xs={1} />
                                
                                    </Grid>
                                )}
                                {selectedTab == 9 && (
                                    <Grid item container>
                                            <Grid xs = {12}>
                                                { selectedTab === 0 && <Query /> }
                                                { selectedTab === 1 && <Instructions /> }
                                                { selectedTab === 2 && <Extraction /> }
                                                { selectedTab === 3 && <Faq /> }
                                                { selectedTab === 4 && <References /> }
                                                { selectedTab === 5 && <Contact /> }
                                                { selectedTab === 6 && <Copyright /> }
                                                { selectedTab === 7 && <Privacy /> }
                                                { selectedTab === 8 && <Terms /> }
                                                { selectedTab === 9 && <Output /> }
                                            </Grid>
                                             
                                                <Grid item xs={12}>
                                                    <Typography variant="caption" display="block" className={classes.disclaimer}>
                                                        The Lion Localizer was made possible by the support of the American people through United States Agency for International Development (USAID). 
                                                        The views represented on this website do not necessarily reflect the views of the University of Illinois at Urbana-Champaign, USAID, or the United States government.
                                                    </Typography>
                                                </Grid>
                                        
                                    </Grid>
                                )}
                                
                            </>
                        </Grid>
                </Grid> 

                <Grid item container>
                    <Grid item xs={12}>
                    <>
                        <AppBar color="secondary" position="static">
                            <Toolbar>
                                <Tabs value={selectedTab} onChange={handleChange} indicatorColor="primary">
                                    <Tab className={classes.tabsContact} value="5" label="Contact Us" />
                                    <Tab className={classes.tabsCopyright} value="6" label="copyright" />
                                    <Tab className={classes.tabsPrivacy} value="7" label="Privacy Policy" />
                                    <Tab className={classes.tabsTerms} value="8" label="Terms & Conditions" />
                                </Tabs>
                            </Toolbar>
                        </AppBar>
                    </>
                    </Grid>         
                    <Grid xs = {12}>
                        <Footer />
                    </Grid>
                </Grid>  
            </Grid>
        </ThemeProvider>
    );
};

export default Home;