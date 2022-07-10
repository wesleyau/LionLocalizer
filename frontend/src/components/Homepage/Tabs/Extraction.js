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
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        display: 'block'
    },
})


const Extraction = () => {
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Laboratory Protocols</Typography>
        </Grid>    
        <Grid className={classes.margin}>
    
        <a href='https://drive.google.com/file/d/1YhmDh_8eGXbZSfnKf67hO8DOT4_uypZh/view?usp=sharing' target="_blank"> Extraction, PCR, and Sequencing Protocols </a>
        <br></br>
        <br></br>
        <a href='https://drive.google.com/file/d/1WX7Fo0-K-PIaNHc0Ofsl-MIXvSaOs60G/view?usp=sharing' target="_blank"> Trimming Protocols </a>
        <br></br>
        <br></br>
        <a href='https://drive.google.com/file/d/1Ps0frrA5xLXIf0J51Ooz19OJCXeT7KsB/view?usp=sharing' target="_blank"> Additional Information </a>
        </Grid>
        </Grid>
    );
};

export default Extraction;