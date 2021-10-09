import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect } from "react-router-dom";
//import uiucLogo from "../../../static/images/uLogo.png"

const Footer = () => {
    

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
                        
                    </Toolbar>
                </AppBar>
            </Grid>    
        </Grid>
    );
};

export default Footer;