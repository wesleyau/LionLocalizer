import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles } from '@material-ui/styles';
import { Route, Switch, Redirect } from "react-router-dom";
import uLogo from '../../../static/images/uLogo.png';
import USAID from '../../../static/images/Horizontal_RGB_294.png';
import USAIDSEAL from '../../../static/images/Seal_RGB_294.png';

const useStyles = makeStyles({ 
    typography: {
        fontWeight: 'bold',
        marginLeft: 5,   
    },
    image: {
        height: '14%',
        width: '14%'
    },
    sealImage: {
        height: '17%',
        width: '17%'
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="caption" display="block" className={classes.typography}>
                    Disclaimer: The Lion Localizer was made possible by the support of the American people through the United States Agency for International Development (USAID). The views represented on this website do not necessarily reflect the views of USAID or the United States government.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </Grid>    


            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        <img className={classes.image} src={uLogo} />
                        <img className={classes.sealImage} src={USAID} />

                    </Toolbar>
                </AppBar>
            </Grid>    
        </Grid>
    );
};

export default Footer;