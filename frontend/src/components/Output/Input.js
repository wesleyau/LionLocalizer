import React from "react";
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 360,
        

    },
})


const Input = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.typography}>Legend, sequence input, and other informational components will go here.</Typography>
            </Grid>    
        </Grid>
    );
};

export default Input;