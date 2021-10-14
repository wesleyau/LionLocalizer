import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";

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
    textItalicize: {
        fontStyle: 'italic',
    },
})

const Introduction = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Introduction</Typography>
            </Grid>    
            <Grid container xs={12} direction="row">
                <Grid item >
                    <Typography className={classes.text}>• Lion Localizer maps the localities from which mitochondrial cytochrome b (cytB) sequences have been reported for lions, <i>Panthera leo</i>, using the dataset described in Bertola et al. 2016, updated with additional sequences.</Typography>
                </Grid>   
            </Grid> 
            <Grid item xs={12} direction="row">
                <Typography className={classes.text}>• You may enter one short cytB region, or three short cytB regions, as described <Typography to="/instruction" component={Link}>here</Typography> </Typography> 
                
            </Grid>  
            <Grid item xs={12}>
                <Typography className={classes.text}>• Enter cytochrome b sequence(s) from a lion sample and click the “submit query” button</Typography>
            </Grid>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Input Sequences</Typography>
            </Grid>       
        </Grid>
    );
};

export default Introduction;