import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, Button } from "@material-ui/core";
import { createGenerateClassName, makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from './Home'
import uLogo from '../../../static/images/uLogo.png';
import uLogoOrange from '../../../static/images/uLogoOrange.png';
import ILogo from '../../../static/images/1.png';
import USAID from '../../../static/images/Horizontal_RGB_294_White.png';
import USAIDSEAL from '../../../static/images/Seal_RGB_294.png';
import TRACE from '../../../static/images/TraceLogo.png';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginTop: 0, 
        marginLeft: 5,   
        marginBottom: 0
    },
    image: {
        height: '12%',
        width: '12%'
    },
    ILogo: {
        height: '12%',
        width: '12%',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 15,
    },
    Logo: {
        height: '100%',
        width: '100%',
        
        
    },
    TraceLogo: {
        height: '10%',
        width: '10%',
        marginLeft: 0,
        marginTop: 10,
    },
    Trace: {
        height: '100%',
        width: '100%',
        
    },
    USAIDImage: {
        height: '13.5%',
        width: '13.5%',
        marginLeft: 15,
        marginRight: 30,
        marginTop: 9,
    },
    USAID: {
        height: '100%',
        width: '100%',
        
    },
    sealImage: {
        height: '6.4%',
        width: '6.4%',
        marginLeft: 0
    },
    disclaimer: {
        fontWeight: 'bold',
        color: '#13294B',
        fontSize: 11.5,
        marginTop: 0, 
        marginLeft: 42,   
        marginBottom: 5,
        marginRight: 42,   
        
    },
    
})

const Footer = () => {
    
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <a href='https://illinois.edu/' target="_blank" className={classes.ILogo}>
                        <img className={classes.Logo} src={uLogo} />
                        </a>
                        
                        <a href='https://www.usaid.gov/' target="_blank" className={classes.USAIDImage}>
                        <img className={classes.USAID} src={USAID} />
                        </a>

                        <a href='https://www.tracenetwork.org/' target="_blank" className={classes.TraceLogo}>
                        <img className={classes.Trace} src={TRACE} />
                        </a>

                    </Toolbar>
                    <Grid item xs={12}>
                        <Typography variant="caption" display="block" className={classes.disclaimer}>
                            The Lion Localizer was made possible by the support of the American people through United States Agency for International Development (USAID). 
                            The views represented on this website do not necessarily reflect the views of the University of Illinois at Urbana-Champaign, TRACE, USAID, or the United States government.
                        </Typography>
                    </Grid>
                </AppBar>
            </Grid>    
        </Grid>
    );
};

export default Footer;