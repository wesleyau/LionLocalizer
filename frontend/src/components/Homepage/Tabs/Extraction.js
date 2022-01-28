import React, { useRef } from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel,  } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";

import AllPagesPDFViewer from "./all-pages";
import samplePDF from "./Lion_Localizer_ampseq_protocol.pdf";
import { useReactToPrint } from "react-to-print";


import { sizing } from '@mui/system';

const useStyles = makeStyles({ 
    pdf: {
        minWidth: 700,
        width: 700,
        marginLeft: 1000
    },
    download: {
        minWidth: 7050,
        width: 750,
        marginLeft: 1240
    },
})

const Extraction = () => {
    const classes = useStyles()
    
    const componentRef = useRef();
    
    
    return (

        <Grid item container>
            <Grid  item xs={12}>
                <Grid  item xs={4}/>
                <a className={classes.download} href={samplePDF} download="Lion_Localizer_amp_and_seq_protocol.pdf"> Download Here </a>

            </Grid >
            <Grid  item xs={12}>
            <Grid  item xs={4}/>
                <div className={classes.pdf}>
                    
                    <AllPagesPDFViewer pdf={samplePDF} />
                </div>
            </Grid >
        </Grid>
    );
};

export default Extraction;