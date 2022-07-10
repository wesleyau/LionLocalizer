import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Conclusion from "./Conclusion";
import Introduction from "./Introduction";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from '../../Sequences/Sequences.actions';
import { addSequence } from '../../Sequences/Align.actions';

const useStyles = makeStyles({ 
    field: {
        marginTop: 5,
        marginBottom: 10,
        display: 'block'
    },
    text: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        display: 'block'
    },
    textTopMargin: {
        marginTop: 13,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        display: 'block'
    },
    textError: {
        marginTop: 13,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        color: '#E51414'
    },
    button: {
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 10,
    },
    formControl: {
        minWidth: 200,
        marginBottom: 5,
        display: 'block'
    },
    formControl1: {
        minWidth: 200,
        marginTop: 5,
        marginBottom: 5,
        overflow: 'visible'
    },
    typography: {
        marginRight: 10,
        fontWeight: 'bold',
        display: 'block'
    },
    textNotBold: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
        display: 'block'
    },
    hyperLink: {
        fontWeight: 'bold',
        color: '#0000EE'
    },
    disclaimer: {
        marginLeft: 5,   
        marginBottom: 10,
        marginTop: 10,
    },
})


const Content = () => {
    const classes = useStyles()

    const test = useSelector(state => state.sequences.sequences)
    const seqList = useSelector(state => state.sequences.sequences)
    const alignList = useSelector(state => state.align.align.array)
    const queryInfo = useSelector(state => state.align.align)

    //new content
    const dispatch = useDispatch();
    const [ID, setID] = useState('');
    const [Detail, setDetail] = useState('');
    const [seqPlacerID, setSeqPlacerID] = useState('');
    const [shortSeq1, setShortSeq1] = useState('');
    const [shortSeq2, setShortSeq2] = useState('');
    const [shortSeq3, setShortSeq3] = useState('');

    const [error, setError] = useState(false);
    const [errorWarning, setErrorWarning] = useState(false);

    


    useEffect(() => {
        dispatch(getSequences());
    }, [dispatch]);

    //states to see if textboxes are filled or not
    //const [id, setId] = useState('')
    //const [sequence, setSequence] = useState('')
    //const [idError, setIdError] = useState(false)
    const [sequenceError, setSequenceError] = useState(false)

    //For the dropdown selects
    const [select, setSelect] = useState('0')

    const [existing, setExisting] = useState('')
    const [explore, setExplore] = useState('')
    const [selectError, setSelectError] = useState(false)

    

    

    const handleSubmit = (e) => {
        e.preventDefault()
        setSequenceError(false)
        setSequenceError(false)

        if (id == '') {
            setIdError(true)
        }
        if (sequence == '') {
            setSequenceError(true)
        }
        if (id && sequence) {
            //console.log(id, sequence)
        }
        if (select == '') {
            setSelectError(true)
        }

    }
    
    //console.log(queryInfo)
    
    return (
        <Grid container>
                
                <Grid item xs={12} >
                    <Introduction />
                </Grid>
                
                <Grid item xs={12} >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid item xs={12}>
                            <Typography className={classes.textTopMargin}>
                                1. Choose the type of cytB sequence that you will enter or choose a demo option
                            </Typography>
                        </Grid>     
                        <FormControl className={classes.formControl}>
                            <Select value={select} onChange={(e) => {setSelect(e.target.value);
                            setID('');
                            setDetail('');
                            setSeqPlacerID('');
                            setShortSeq2('');
                            setErrorWarning(false)
                            }}>
                                <MenuItem value='0'>Enter one long 1140bp cytB sequence</MenuItem>
                                <MenuItem value='1'>Enter one short 350bp cytB sequence</MenuItem>
                                <MenuItem value='2'>Demo: Select one long 1140bp cytB lion sequence in the database</MenuItem>
                                <MenuItem value='3'>Demo: Select one short 350bp cytB lion sequence in the database</MenuItem>
                            </Select>
                        </FormControl>
                        
                        {select == 2 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Select an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select onChange={(e) => {setSeqPlacerID(seqList[e.target.value]);
                                setID(seqList[e.target.value].id);
                                setDetail(seqList[e.target.value].cytB)}} >
                                    <MenuItem value='0'>LEO0001</MenuItem>
                                    <MenuItem value='1'>LEO0002</MenuItem>
                                    <MenuItem value='2'>LEO0003</MenuItem>
                                    <MenuItem value='3'>LEO0004</MenuItem>
                                    <MenuItem value='4'>LEO0005</MenuItem>
                                    <MenuItem value='5'>LEO0006</MenuItem>
                                    <MenuItem value='6'>LEO0007</MenuItem>
                                    <MenuItem value='7'>LEO0008</MenuItem>
                                    <MenuItem value='8'>LEO0009</MenuItem>
                                    <MenuItem value='9'>LEO0010</MenuItem>
                                    <MenuItem value='10'>LEO0011</MenuItem>
                                    <MenuItem value='11'>LEO0012</MenuItem>
                                    <MenuItem value='12'>LEO0013</MenuItem>
                                    <MenuItem value='13'>LEO0014</MenuItem>
                                    <MenuItem value='14'>LEO0015</MenuItem>
                                    <MenuItem value='15'>LEO0016</MenuItem>
                                    <MenuItem value='16'>LEO0017</MenuItem>
                                    <MenuItem value='17'>LEO0018</MenuItem>
                                    <MenuItem value='18'>LEO0019</MenuItem>
                                    <MenuItem value='19'>LEO0020</MenuItem>
                                    <MenuItem value='20'>LEO0021</MenuItem>
                                    <MenuItem value='21'>LEO0022</MenuItem>
                                </Select>
                        </FormControl>
                            )}
                        {select == 3 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Choose an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select 
                                label="Sequence ID"
                                onChange={(e) => {setSeqPlacerID(seqList[e.target.value]);
                                setShortSeq1(seqList[e.target.value].cytB.substring(0,429));
                                setShortSeq2(seqList[e.target.value].cytB.substring(430,780));
                                setShortSeq3(seqList[e.target.value].cytB.substring(780,1140));
                                setID(seqList[e.target.value].id);
                                setDetail(seqList[e.target.value].cytB.substring(430,780))}} >
                                    <MenuItem value='0'>LEO0001</MenuItem>
                                    <MenuItem value='1'>LEO0002</MenuItem>
                                    <MenuItem value='2'>LEO0003</MenuItem>
                                    <MenuItem value='3'>LEO0004</MenuItem>
                                    <MenuItem value='4'>LEO0005</MenuItem>
                                    <MenuItem value='5'>LEO0006</MenuItem>
                                    <MenuItem value='6'>LEO0007</MenuItem>
                                    <MenuItem value='7'>LEO0008</MenuItem>
                                    <MenuItem value='8'>LEO0009</MenuItem>
                                    <MenuItem value='9'>LEO0010</MenuItem>
                                    <MenuItem value='10'>LEO0011</MenuItem>
                                    <MenuItem value='11'>LEO0012</MenuItem>
                                    <MenuItem value='12'>LEO0013</MenuItem>
                                    <MenuItem value='13'>LEO0014</MenuItem>
                                    <MenuItem value='14'>LEO0015</MenuItem>
                                    <MenuItem value='15'>LEO0016</MenuItem>
                                    <MenuItem value='16'>LEO0017</MenuItem>
                                    <MenuItem value='17'>LEO0018</MenuItem>
                                    <MenuItem value='18'>LEO0019</MenuItem>
                                    <MenuItem value='19'>LEO0020</MenuItem>
                                    <MenuItem value='20'>LEO0021</MenuItem>
                                    <MenuItem value='21'>LEO0022</MenuItem>
                                </Select>
                        </FormControl>
                            )}
                        
                        <Grid item xs={12}>
                        <Typography className={classes.text}>
                            2. Enter an ID and/or information on the lion sample that you are querying (optional), this will show up on the output page
                        </Typography>
                        </Grid>   
                        
                        {select == 0 && (
                        <TextField 
                            value={ID}
                            onChange={(e) => setID(e.target.value)}
                            label="Enter a description of your lion sample - Ex: LEO0001"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                            
                        />
                        )}
                        {select == 1 && (
                        <TextField 
                            value={ID}
                            onChange={(e) => setID(e.target.value)}
                            label="Enter a description of your lion sample - Ex: LEO0001"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                            
                        />
                        )}

                        {select == 2 && (
                        <TextField 
                            disabled
                            value={"Demo: "+seqPlacerID.id}
                            onChange={(e) => setID(e.target.value)}
                            placeholder={seqPlacerID.id}
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                        />
                        )}

                        {select == 3 && (
                        <TextField 
                            disabled
                            value={"Demo: "+seqPlacerID.id}
                            onChange={(e) => setID(e.target.value)}
                            placeholder={seqPlacerID.id}
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                            
                        />
                        )}
                        
                        <Grid item xs={12}>
                            <Typography className={classes.textTopMargin}>
                                3. Enter your lion DNA and then click the submit query, this will show up on the output page. Instructions to generate these sequence(s) can be found <Typography className={classes.hyperLink} to="/protocol" component={Link}>here</Typography>
                            </Typography>
                        </Grid>   

                        

                        {select == 0 && (
                        <TextField 
                            value={Detail}
                            onChange={(e) => {setDetail(e.target.value.toUpperCase().replace(/\s/g, '').replace(/\t/g, ''));
                            setErrorWarning(false)}}
                            label="Enter lion long DNA sequence"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            multiline
                            rows={5}
                            fullWidth
                            error={sequenceError}
                        />
                        )}

                        {select == 1 && (
                        <Grid container item justifyContent="center" alignItems="center" >
                        
                            <Grid xs={12}>
                            <TextField 
                                value={Detail}
                                onChange={(e) => {setDetail(e.target.value.toUpperCase().replace(/\s/g, '').replace(/\t/g, ''));
                                setErrorWarning(false)}}
                                label="Enter lion short DNA sequence"
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            </Grid>
                            
                        </Grid>
                        )}
                        {select == 2 && (
                        <TextField 
                            disabled
                            value={seqPlacerID.cytB}
                            onRender={(e) => setDetail(e.target.value)}
                            placeholder={seqPlacerID.cytB}
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            multiline
                            rows={5}
                            fullWidth
                            error={sequenceError}
                            />
                        )
                        }
                        {select == 3 && (
                        <Grid container item justifyContent="center" alignItems="center" >
                            
                            <Grid xs={12}>
                            <TextField 
                                disabled
                                value={shortSeq2}
                                onChange={(e) => setDetail(shortSeq2)}
                                placeholder={shortSeq2}
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            
                            </Grid>
                        </Grid>
                        )}
                        
                        {(errorWarning == true) && (
                        <Grid item xs={12}>
                            <Typography className={classes.textError}>
                                Error: please check for the following errors in your query sequence<br></br>
                                1. Sequence can only contain these characters: AGCT <br></br>
                                2. Make sure you are choosing the correct seqeunce option<br></br>
                                3. Long sequence must be 1140 bp<br></br>
                                4. Short sequence must be 350 bp
                            </Typography>
                        </Grid>   
                        )}
                        
                        {(select == 0 || select == 2) && (Detail.length != 1140 || /^[AGCTagct]+$/.test(Detail)==false) && (
                            <Button
                            onClick={() => {
                                setErrorWarning(true)
                              }}
                            Type="Submit Query"
                            color="red"
                            variant="contained"
                            >
                            Submit Query
                            </Button>            
                        )}

                        {(select == 1 || select == 3) && (Detail.length != 350 || /^[AGCTagct]+$/.test(Detail)==false) && (
                            <Button
                            onClick={() => {
                                setErrorWarning(true)
                              }}
                            Type="Submit Query"
                            color="red"
                            variant="contained"
                            >
                            Submit Query
                            </Button> 
                        )}
                        
                        {(select == 0 || select == 2) && (Detail.length == 1140) && (/^[AGCTagct]+$/.test(Detail)==true) && (
                           <Button
                           onClick={() => {
                               dispatch(addSequence({ ID, Detail }));
                             }}
                           Type="Submit Query"
                           color="primary"
                           variant="contained"
                           to="/output" component={Link}
                           >
                           Submit Query
                            </Button>
                        )}

                        {(select == 1 || select == 3) &&  (Detail.length == 350) && (/^[AGCTagct]+$/.test(Detail)==true) && (
                           <Button
                           onClick={() => {
                               dispatch(addSequence({ ID, Detail }));
                             }}
                           Type="Submit Query"
                           color="primary"
                           variant="contained"
                           to="/output" component={Link}
                           >
                           Submit Query
                            </Button>
                        )}

                        

                    </form>
                <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome browser is recommended, the printout may not be formatted as well by Safari or Firefox </Typography>
                </Grid>  
                </Grid>     
                <Grid item xs={12} >
                    <Conclusion />
                </Grid>
    
        </Grid>
    );
};

export default Content;