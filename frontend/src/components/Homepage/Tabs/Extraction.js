import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';


const useStyles = makeStyles({ 
    margin: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        fontWeight: 'bold',
        
    },
})

const Extraction = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.margin}>
        <a href='https://drive.google.com/file/d/1Mh27T5iwYIYEUQAx15FZaJ1jAvKxJhac/view?usp=sharing' download="Lion_Localizer_amp_and_seq_protocol.pdf"> Click This To Download The Laboratory Protocols </a>
        </Grid>
    );
};

export default Extraction;