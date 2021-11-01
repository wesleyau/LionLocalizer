import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from './Map';
import Table from './Table';
import Input from './Input';

const useStyles = makeStyles({ 
    print: {
        display: 'inline',
        overflowY: 'scroll',
    },
    disclaimer: {
        fontWeight: 'bold',
        marginTop: 0, 
        marginLeft: 5,   
    },
    
})

const Output = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item container >
                <Grid xs = {6}>
                    <Map />
                </Grid>
                <Grid item container xs={6}>
                    <Grid item container  xs={12}>
                        <Grid className={classes.print} xs = {12}>
                            <Input/>
                        </Grid>
                        <Grid className={classes.print} xs = {12}>
                            <Table />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
            <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome or Safari browsers is recommended, the printout may not be formmatted as well by Firefox </Typography>
            </Grid> 
        </Grid>
    );
};


export default Output;