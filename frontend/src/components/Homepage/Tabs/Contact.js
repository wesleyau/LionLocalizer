import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
    typography: {
        marginLeft: 5,
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        fontWeight: 'bold',
        display: 'block'
    },
})

const Contact = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Contact Us</Typography>
            </Grid>   
            <Grid item xs={12}>
            <Typography className={classes.typography}><p>Please send any questions, suggestions or comments to Alfred Roca: <b>roca@illinois.edu</b>. using the email subject “Lion Localizer”.</p></Typography>
            </Grid>
        </Grid>
        
    );
};

export default Contact;