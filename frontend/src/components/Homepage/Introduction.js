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
    hyperLink: {
        fontStyle: 'italic',
        textDecoration: 'none',
        color: '#0000EE'
    }
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
                    <Typography className={classes.text}>• Lion Localizer enables users to query an unknown mitochondrial cytochrome b (cytB) against a dataset of known geographic localities from which cytB sequences have been reported for lions, <i>Panthera leo</i>, using the dataset described in Bertola et al. 2016.</Typography>
                </Grid>   
            </Grid> 
            <Grid container xs={12} direction="row">
                <Grid item >
                    <Typography className={classes.text}>• The outputs include a map showing the localities from which the cytB sequences have been reported.</Typography>
                </Grid>   
            </Grid> 
            <Grid item xs={12} direction="row">
                <Typography className={classes.text}>• In the box(es) below you may enter one short cytB sequence, or three short cytB sequences, as described <Typography to="/instructions" component={Link}>here</Typography> </Typography> 
            </Grid>  
            <Grid item xs={12} direction="row">
            <Typography className={classes.text}> • The description (optional ID) and sequence of the lion sample will be populated to the output page, but <Typography to="/faq" component={Link}>neither are saved</Typography> by the lion localizer software. </Typography>
            </Grid>  
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Input Query Sequences</Typography>
            </Grid>       
        </Grid>
    );
};

export default Introduction;