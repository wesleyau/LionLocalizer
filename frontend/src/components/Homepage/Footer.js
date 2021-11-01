import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, Button } from "@material-ui/core";
import { createGenerateClassName, makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from './Home'
import uLogo from '../../../static/images/uLogo.png';
import uLogoOrange from '../../../static/images/uLogoOrange.png';
import ILogo from '../../../static/images/1.png';
import USAID from '../../../static/images/Horizontal_RGB_294.png';
import USAIDSEAL from '../../../static/images/Seal_RGB_294.png';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginTop: 10, 
        marginLeft: 5,   
        marginBottom: 10
    },
    image: {
        height: '12%',
        width: '12%'
    },
    ILogo: {
        height: '2.75%',
        width: '2.75%',
        marginLeft: 20
    },
    USDAIDImage: {
        height: '15%',
        width: '15%',
        marginLeft: 0
    },
    sealImage: {
        height: '6.4%',
        width: '6.4%',
        marginLeft: 20
    },
    
})

const Footer = () => {
    
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <img className={classes.ILogo} src={ILogo} />
                        <img className={classes.sealImage} src={USAIDSEAL} />

                    </Toolbar>
                </AppBar>
            </Grid>    
        </Grid>
    );
};

export default Footer;