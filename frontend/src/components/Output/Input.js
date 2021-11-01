import React from "react";
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import Time from './Time';

const useStyles = makeStyles({ 
    typography: {

        marginLeft: 10,
        marginBottom: 60,
    },
    typographyMargin: {
        marginLeft: 10,
        marginTop: 5,
    },
})


const Input = () => {
    const classes = useStyles()
    return (
        <Grid container>  
            <Grid item xs={12}>
                <Typography className={classes.typographyMargin}><Time /></Typography>
            </Grid>     
            <Grid item xs={12}>
                <Typography className={classes.typography}><p>Description and sequence provided:</p>
                 </Typography>
            </Grid>    
            <Grid item xs={12}>
                <div className={classes.typographyMargin}> Locations may be shown or removed as pins on the map by clicking on the box next to each location name. 
                    However, this is enabled only for the closest-matching haplotype at each geographic location. Location and closest-haplotype information may also be shown by clicking on an icon or pin on the map itself.
                    </div>
            </Grid> 
        </Grid>
    );
};

export default Input;