import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect } from "react-router-dom";
import Copyright from "./Tabs/Copyright"

const Footer = () => {
    const [ selectedTab, setSelectedTab ] = React.useState(0);
    
    const handleChange = (event, newValue ) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </Grid>    


            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4">Illinois logo and USAID logo here</Typography> 
                    </Toolbar>
                </AppBar>
            </Grid>    
        </Grid>
    );
};

export default Footer;