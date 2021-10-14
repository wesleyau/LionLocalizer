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

const Terms = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Terms & Conditions</Typography>
            </Grid>   
            <Grid item xs={12}>
            <Typography className={classes.typography}><p><i>The Lion Localizer web site is provided as a service to the public. 
            We are not responsible for, and expressly disclaim all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. 
            While the information contained within the site may be periodically updated, no guarantee is given that the information provided in this web site is correct, complete, and up-to-date. 
            For any links providing direct access to other Internet resources, including Web sites, we are not responsible for the accuracy or content of information contained in those sites. 
            Links or mentions do not constitute an endorsement of the parties or their products and services.</i></p></Typography>
            </Grid>
        </Grid>
    );

};

export default Terms;