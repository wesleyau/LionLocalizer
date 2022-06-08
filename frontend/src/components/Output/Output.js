import React, { useState, useEffect, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { Route, Redirect } from 'react-router'
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from './Map1';
import Table from './Table1';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from '../../Sequences/Sequences.actions';
import '../../../static/CSS/style.css'


const useStyles = makeStyles({ 
    disclaimer: {
        marginTop: 5, 
        marginLeft: 5,   
    },
    abbreviation: {
        marginTop:5, 
        marginLeft: 5,
        
    },
    contain: {
        height: '775px',
        overflowY: 'scroll',
        
    },
    
})

const styles = makeStyles((theme) => ({ 
    print: {
        height: '775px',
        overflowY: 'scroll',
        [theme.breakpoints.down('md')]: {
            height: "1500px"
          },
    },
    mapContain: {
        width: "100vw",
      [theme.breakpoints.down('md')]: {
          width: "100vw",
        },
    },
    
}))

const Output = () => {
    const classes = useStyles()
    const printClasses = styles()
    const dispatch = useDispatch();

    const test = useSelector(state => state)
    const seqList = useSelector(state => state.sequences.sequences)
    const alignList = useSelector(state => state.align.align.array)
    const queryInfo = useSelector(state => state.align)
    

    

    //state for the checkmarks to what is displayed on the map
    
    const [loading, setLoading] = useState(false)

    
   const [checked, setChecked] = useState([])
    //console.log(checked)
        //not used here
        if(queryInfo.isLoading == false){
        var zeroMis = alignList.filter(row => row.mismatch==0);
        var zeroArr = zeroMis.map(row => row.id)
        }

    return (
        
        <Grid container>
           
            <Grid item container >
                
                <Grid className={printClasses.mapContain} xs = {12} md = {5}>
                    {queryInfo.isLoading == true && (
                        <div>Loading...</div>
                    )} 
                    {queryInfo.isLoading == false &&(
                        <Map checked={checked}/>
                    )}
                    
                </Grid>
                
                
                
                <Grid item container className={printClasses.print} xs={12} md = {7}>
                    
                    <Grid item container xs={12}>
                        
                        <Grid xs = {12}>
                            {queryInfo.isLoading == true && (

                                <div>Loading...</div>
                            )}
                            {queryInfo.isLoading == false &&(

                                <Input />
                            )}
                         </Grid>

                        

                        <Grid xs = {12}>
                            {queryInfo.isLoading == true && (
                                <div>Loading...</div>
                            )}

                            {queryInfo.isLoading == false && queryInfo.error == null && 
                                <Table setChecked={setChecked}/>   
                            }

                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
            
            <Grid item xs={12}>
                <Typography variant="caption" display="block" className={classes.abbreviation}>Abbreviations: FR: Forest Reserve GR: Game Reserve, NP: National Park, WS: Wildlife Sanctuary, CAR: Central African Republic, DRC: Democratic Republic of the Congo, RSA: Republic of South Africa, SA: South </Typography>
            </Grid>  
            <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome or Safari browsers are recommended, the printout may not be formatted as well by Firefox </Typography>
            </Grid> 
        </Grid>
    );
};


export default Output;