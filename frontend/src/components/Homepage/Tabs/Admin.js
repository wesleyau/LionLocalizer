import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 665,   
    },
})

const Admin = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.typography}>We are currently updating admin information. Please check back again.</Typography>
    );
};

export default Admin;