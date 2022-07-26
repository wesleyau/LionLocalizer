import React, { useState, useEffect, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { Route, Redirect } from 'react-router'
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
        
        "@media print": {
            height: "5350px", //works for safari and firefox for lengthing the table
            [theme.breakpoints.down('md')]: {
                marginBottom: 1125, //margin below the table for firefox so that the footer isn't interrupting the table
                
            }
        },
    },
    printTable: {
        [theme.breakpoints.down('lg')]: {
            //zoom: '67%', //to make the whole table fit in the screen - but it messes with the printing format in chrome and safari
        },
        "@media print": {
            
        },
    },
    mapContain: {
        width: "100vw",
        "@media print": {
            [theme.breakpoints.down('md')]: {
                width: "100vw",
                marginBottom: 0, //margin under map for chrome
              },
        },
    },
    gridContainer: {
        "@media print": {
            width: "200vw", //works for all browsers to make the who container fit the print page important
            display: 'block', //safari solution to the components overlapping during print
           // zoom: "80%"
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
    const seqList = useSelector(state => state.sequences.sequences)
    const [loading, setLoading] = useState(false)


    var zero = []
    const [checked, setChecked] = useState([])

        //useEffect is used when you need to run something based on a change of a variable, in this case it's queryInfo.isLoading
        useEffect(() => {
            //redirects /output to /query if the user directly goes to /output which would originally cause an error
            if(seqList.length==0){
                window.location.href = "/query";
            }
            if(queryInfo.isLoading == false){
            var mismatch = alignList.filter(row => row.mismatch==0);
            first = $(alignList).get(0).mismatch
            seqLength = $(queryInfo.align.query).get(0).Detail.length
            var zeroList = mismatch.map(row => row.id);
            zero = alignList.filter(item => zeroList.includes(item.id))
            setChecked(zero)
            
        }
        }, [queryInfo.isLoading])
       

    return (
        
        <Grid container>
           
            <Grid item container className={printClasses.gridContainer}>
            
                <Grid className={printClasses.mapContain} xs = {12} md = {5}>
                    {queryInfo.isLoading == true && (
                        <div>Loading...</div>
                    )} 
                    {queryInfo.isLoading == false && ((seqLength = 1140 && first < 10) || (seqLength = 350 && first < 15)) &&(
                        <Map checked={checked}/>
                    )}
                    {queryInfo.isLoading == false && ((seqLength = 1140 && first > 10) || (seqLength = 350 && first > 15)) &&(
                                <Typography className={classes.textError}>
                                Error: The lowest mismatch comparison to your query sequence is {first} which is too many. <br></br>
                                Please check for the following errors in your query sequence:<br></br>
                                1. Make sure to enter your sequence 5'-3'<br></br>
                                2. Make sure to trim your sequence appropriately<br></br>
                                3. Make sure to submit the cytochrome B region<br></br>
                                4. The sequence may not be a lion sequence <br></br>
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

                        

                        <Grid className={printClasses.printTable} xs = {12}>
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
            <Grid item container >
            <Grid item xs={12}>
                <Typography variant="caption" className={classes.abbreviation}>Abbreviations: CAR: Central African Republic DRC: Democratic Republic of the Congo FR: Forest Reserve  GR: Game Reserve NP: National Park RSA: Republic of South Africa SA: South Africa WS: Wildlife Sanctuary </Typography>
            </Grid>  
            <Grid item xs={12} direction="row" >
                    <Typography variant="caption" className={classes.disclaimer}> For printing purposes, the use of Chrome or Firefox are recommended, the printout may not be formatted as well by Safari or other browsers. </Typography>
            </Grid> 
            </Grid>
        </Grid>
    );
};


export default Output;