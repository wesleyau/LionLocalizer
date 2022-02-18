import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import Time from './Time';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles({ 
    typography: {
        marginLeft: 10,
    },
    linedUp: {
        marginLeft: 10,
        fontFamily: 'courier',
        fontSize: 13.70,
    },
    contain: {
        height: '350px',
    },
    typographyMargin: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
    },
})


const Input = () => {
    const classes = useStyles()
    
    const alignList = useSelector(state => state.align.align.array)
    const queryInfo = useSelector(state => state.align.align.query)

    const [ID, setID] = useState(queryInfo.ID);
    const [Detail, setDetail] = useState(queryInfo.Detail);

    const detailBreakUp = Detail.match(/[\s\S]{1,88}/g) || ['/n']
    console.log(detailBreakUp)

    return (
        <Grid container >  
            <Grid item xs={12}>
                <Typography className={classes.typographyMargin}><Time /></Typography>
            </Grid>     
            <Grid item xs={12}>
                <Typography className={classes.typography}>ID and Sequence Provided:
                 </Typography>
            </Grid>    
            <Grid item xs={12}>
                <Typography className={classes.typography}> {ID} 
                 </Typography>
            </Grid>    
            <Grid item xs={12}>
                 <Typography className={classes.linedUp}> {detailBreakUp.map((index) => (
                     <span>{index} {"\n"}</span>
                 ))}</Typography>
            </Grid>   
            
            <Grid item xs={12}>
                <div className={classes.typographyMargin}> 
                    Locations may be shown or removed as pins on the map by clicking on the box next to each location name. However,<br/>
                    this is enabled only for the closest-matching haplotype at each geographic location. Location and closest haplotype <br/>
                    information may also be shown by clicking on an icon or pin on the map itself.
                    </div>
            </Grid> 
        </Grid>
    );
};

export default Input;