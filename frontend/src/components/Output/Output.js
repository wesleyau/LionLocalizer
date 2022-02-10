import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from './Map1';
import Table from './Table';
import Input from './Input';

const useStyles = makeStyles({ 
    print: {
        display: 'inline',
        overflowY: 'scroll',
    },
    disclaimer: {
        marginTop: 5, 
        marginLeft: 5,   
    },
    abbreviation: {
        marginTop:5, 
        marginLeft: 5,
        
    }
    
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
            <Grid item xs={12}>
                <Typography variant="caption" display="block" className={classes.abbreviation}>Abbreviations: FR: Forest Reserve GR: Game Reserve, NP: National Park, WS: Wildlife Sanctuary</Typography>
            </Grid>  
            <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome or Safari browsers are recommended, the printout may not be formatted as well by Firefox </Typography>
            </Grid> 
        </Grid>
    );
};


export default Output;