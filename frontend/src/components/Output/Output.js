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
    textError: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 5,
        fontWeight: 'bold',
        color: '#E51414'
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

var first
var seqLength
var redirect

const Output = () => {
    const classes = useStyles()
    const printClasses = styles()
    const dispatch = useDispatch();

    const alignList = useSelector(state => state.align.align.array)
    const queryInfo = useSelector(state => state.align)
    const [loading, setLoading] = useState(false)
    
    const count = 0;

   

    var zero = []
    const [checked, setChecked] = useState([])

        useEffect(() => {
            console.log("output1")
            //window.location.href = "/query";
            
        }
        , [redirect])

        //useEffect is used when you need to run something based on a change of a variable, in this case it's queryInfo.isLoading
        useEffect(() => {
            if(queryInfo.isLoading == false){
            var mismatch = alignList.filter(row => row.mismatch==0);
            first = $(alignList).get(0).mismatch
            seqLength = $(queryInfo.align.query).get(0).Detail.length
            var zeroList = mismatch.map(row => row.id);
            zero = alignList.filter(item => zeroList.includes(item.id))
            setChecked(zero)
            
        }
        }, [queryInfo.isLoading])

        
        //console.log(checked, zero)
   
       

    return (
        
        <Grid container>
           
            <Grid item container >
                
                <Grid className={printClasses.mapContain} xs = {12} md = {5}>
                    {queryInfo.isLoading == true && (
                        <div>Loading...</div>
                    )} 
                    {queryInfo.isLoading == false && ((seqLength = 1140 && first < 10) || (seqLength = 350 && first < 15)) &&(
                        <Map checked={checked}/>
                    )}
                    {queryInfo.isLoading == false && ((seqLength = 1140 && first > 10) || (seqLength = 350 && first > 15)) &&(
                                <Typography className={classes.textError}>
                                Error: The lowest mismatch comparison to your query sequence is {first} which is too many <br></br>
                                Please check for the following errors in your query sequence<br></br>
                                1. Make sure to enter your sequence 5'-3'<br></br>
                                2. The sequence is not a lion sequence <br></br>
                            </Typography>
                            )}
                    
                </Grid>
                
                
                
                <Grid item container className={printClasses.print} xs={12} md = {7}>
                    
                    <Grid item container xs={12}>
                        
                        <Grid xs = {12}>
                            {queryInfo.isLoading == true && (

                                <div>Loading...</div>
                            )}
                            {queryInfo.isLoading == false && ((seqLength = 1140 && first < 10) || (seqLength = 350 && first < 15)) &&(
                                <Input />
                            )}
                            
                         </Grid>

                        

                        <Grid xs = {12}>
                            {queryInfo.isLoading == true && (
                                <div>Loading...</div>
                            )}

                            {queryInfo.isLoading == false && queryInfo.error == null && ((seqLength = 1140 && first < 10) || (seqLength = 350 && first < 15)) &&
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
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome browser is recommended, the printout may not be formatted as well by Safari or Firefox </Typography>
                </Grid> 
        </Grid>
    );
};


export default Output;