import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 665,   
    },
    margin: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        fontWeight: 'bold',
        
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        display: 'block'
    },
})

const Instructions = () => {
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Instruction</Typography>
        </Grid>    
        <Grid className={classes.margin}>
    
        <a href='https://drive.google.com/file/d/1f-ZkdE3g0bQeS-SahgpcvIOs6hBUT-8y/view?usp=sharing' target="_blank"> Instructions </a>

        </Grid>
        </Grid>
    );
};

export default Instructions;

