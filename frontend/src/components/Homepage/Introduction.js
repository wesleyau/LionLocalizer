import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect } from "react-router-dom"

const useStyles = makeStyles({ 
    field: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        display: 'block'
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        fontWeight: 'bold',
        display: 'block'
    },
    text: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        display: 'block'
    },
})

const Introduction = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Introduction</Typography>
            </Grid>    
            <Grid item xs={12}>
                <Typography className={classes.text}>• Lion Localizer maps the localities from which mitochondrial DNA sequences have been reported for African lions, Panthera leo, using the dataset described in Bertola et al., 2016, updated with additional sequences.</Typography>
            </Grid>    
            <Grid item xs={12}>
                <Typography className={classes.text}>• Choose between one long cytB region or three short cytB regions.</Typography>
            </Grid>  
            <Grid item xs={12}>
                <Typography className={classes.text}>• Enter the corresponding mitochondrial Cytochrome b region sequence(s) from an African lion sample to display the localities from which lion samples with similar sequences have been reported.</Typography>
            </Grid>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Input Sequences</Typography>
            </Grid>       
        </Grid>
    );
};

export default Introduction;