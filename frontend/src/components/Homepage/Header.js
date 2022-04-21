import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect } from "react-router-dom";
import Output from '../Output/Output';
import Copyright from './Tabs/Copyright';
import Faq from './Tabs/Faq';
import Publication from './Tabs/Publications';
import Extraction from './Tabs/Extraction';
import Contact from './Tabs/Contact';

const Header = () => {

    const [ selectedTab, setSelectedTab ] = React.useState(0);

    const handleChange = (event, newValue ) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static" elevation={0}>
                    <Toolbar>
                        <Typography variant="h3">Lion Localizer</Typography> 
                    </Toolbar>
                </AppBar>
            </Grid>    
            <Grid item xs={12}>
                <>
                    <AppBar color="secondary" position="static" elevation={0}>
                        <Tabs  value={selectedTab} onChange={handleChange}>
                            <Tab label="DNA Extraction Protocals" />
                            <Tab label="Publications" />
                            <Tab label="FAQ" />
                            <Tab label="Contact Us" />
                        </Tabs>
                    </AppBar>
                    {selectedTab === 0 &&  <Extraction />}
                    {selectedTab === 1 &&  <Publications />}
                    {selectedTab === 2 &&  <Faq />}
                    {selectedTab === 3 &&  <Contact />}
                </>
            </Grid>    
        </Grid>
    );
};

export default Header;