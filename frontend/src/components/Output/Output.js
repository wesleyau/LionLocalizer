import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

import Footer from "../Homepage/Footer"

const Output = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h3">Lion Localizer</Typography> 
                    </Toolbar>
                </AppBar>
            </Grid>


            <Grid item container>
                <Footer />
            </Grid>  
        </Grid>
    );
};


export default Output;