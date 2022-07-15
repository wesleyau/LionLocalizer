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

const Conclusion = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Citation</Typography>
            </Grid>    
            <Grid item xs={12}>
                <Typography className={classes.text}>The citation for this software is pending.</Typography>
            </Grid>    
            <Grid item xs={12}>
                
            </Grid>  
            <Grid item xs={12}>
                
            </Grid>  
        </Grid>
    );
};

export default Conclusion;