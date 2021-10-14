import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
    typographyBold: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 665,   
    },
    typography: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
})

const References = () => {
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.typographyBold}>We are currently updating publication information. Please check back again. </Typography>
            </Grid>  
            <Grid item xs={12}>
                {/* <Typography className={classes.typography}>We thank our colleagues who have published mtDNA sequences and made them publicly available in Genbank. The sequences used by the Lion Localizer were obtained from GenBank entries deposited for the following papers: </Typography> */}
            </Grid>  
        </Grid>
    );
};

export default References;