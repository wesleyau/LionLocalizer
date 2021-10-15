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
    tabsContact: {
        minWidth: 135,
        width: 135,
    },
    tabsCopyright: {
        minWidth: 210,
        width: 210,
    },
    tabsPrivacy: {
        minWidth: 160,
        width: 160,
    },
    tabsTerms: {
        minWidth: 285,
        width: 285,
    },
})

const Footer = () => {
    
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="caption" display="block" className={classes.typography}>
                    The Lion Localizer was made possible by the support of the American people through the United States Agency for International Development (USAID). 
                    The views represented on this website do not necessarily reflect the views of The University of Illinois at Urbana-Champaign, the USAID, or the United States government.
                    
                </Typography>
            </Grid>
            
            <Grid item xs={12}>
                <>
                    <AppBar color="secondary" position="static">
                        <Toolbar>
                            <Tabs>
                                <Tab className={classes.tabsContact} value='contact' to="/contactus" component={Link} label="Contact Us" />
                                <Tab className={classes.tabsCopyright} value='copyright' to="/copy" component={Link} label="copyright" />
                                <Tab className={classes.tabsPrivacy} value='privacy' to="/priv" component={Link} label="Privacy Policy" />
                                <Tab className={classes.tabsTerms} value='terms' to="/tos" component={Link} label="Terms & Conditions" />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </>
            </Grid>    


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