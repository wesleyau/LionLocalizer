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
            console.log(id, sequence)
        }
        if (select == '') {
            setSelectError(true)
        }

    }
    
    console.log(queryInfo)
    
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
                            <Select value={select} onChange={(e) => setSelect(e.target.value)}>
                                <MenuItem value='0'>Enter one short cytB sequence</MenuItem>
                                <MenuItem value='1'>Enter three short cytB sequences</MenuItem>
                                <MenuItem value='2'>Demo: Select one short cytB lion sequence in the database</MenuItem>
                                <MenuItem value='3'>Demo: Select three short cytB lion sequences in the database</MenuItem>
                            </Select>
                        </FormControl>
                        
                        {select == 2 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Select an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select 
                                
                                onClick={(e) => {setSeqPlacerID(seqList[e.target.value]);
                                setID(seqList[e.target.value].id);
                                setDetail(seqList[e.target.value].cytB)}} >
                                    <MenuItem value='0'>LEO0001</MenuItem>
                                    <MenuItem value='1'>LEO0004</MenuItem>
                                    <MenuItem value='2'>LEO0005</MenuItem>
                                    <MenuItem value='3'>LEO0006</MenuItem>
                                    <MenuItem value='4'>LEO0007</MenuItem>
                                    <MenuItem value='5'>LEO0008</MenuItem>
                                    <MenuItem value='6'>LEO0009</MenuItem>
                                    <MenuItem value='7'>LEO0010</MenuItem>
                                    <MenuItem value='8'>LEO0011</MenuItem>
                                    <MenuItem value='9'>LEO0012</MenuItem>
                                    <MenuItem value='10'>LEO0013</MenuItem>
                                    <MenuItem value='11'>LEO0014</MenuItem>
                                    <MenuItem value='12'>LEO0015</MenuItem>
                                    <MenuItem value='13'>LEO0016</MenuItem>
                                    <MenuItem value='14'>LEO0017</MenuItem>
                                    <MenuItem value='15'>LEO0018</MenuItem>
                                    <MenuItem value='16'>LEO0019</MenuItem>
                                    <MenuItem value='17'>LEO0020</MenuItem>
                                    <MenuItem value='18'>LEO0021</MenuItem>
                                    <MenuItem value='19'>LEO0022</MenuItem>
                                    <MenuItem value='20'>LEO0023</MenuItem>
                                    <MenuItem value='21'>LEO0024</MenuItem>
                                    <MenuItem value='22'>LEO0026</MenuItem>
                                    <MenuItem value='23'>LEO0027</MenuItem>
                                    <MenuItem value='24'>LEO0029</MenuItem>
                                    <MenuItem value='25'>LEO1001</MenuItem>
                                    <MenuItem value='26'>LEO1002</MenuItem>
                                    <MenuItem value='27'>LEO1003</MenuItem>
                                    <MenuItem value='28'>LEO1004</MenuItem>
                                    <MenuItem value='29'>LEO1005</MenuItem>
                                    <MenuItem value='30'>LEO1006</MenuItem>
                                    <MenuItem value='31'>LEO2001</MenuItem>
                                    <MenuItem value='32'>LEO2002</MenuItem>
                                    <MenuItem value='33'>LEO2003</MenuItem>
                                    <MenuItem value='34'>LEO2004</MenuItem>
                                    <MenuItem value='35'>LEO2005</MenuItem>
                                    <MenuItem value='36'>LEO2006</MenuItem>
                                    <MenuItem value='37'>LEO2007</MenuItem>
                                    <MenuItem value='38'>LEO2008</MenuItem>
                                    <MenuItem value='39'>LEO2009</MenuItem>
                                    <MenuItem value='40'>LEO2010</MenuItem>
                                    <MenuItem value='41'>LEO2011</MenuItem>
                                </Select>
                        </FormControl>
                            )}
                        {select == 3 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Choose an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select 
                                label="Sequence ID"
                                onClick={(e) => {setSeqPlacerID(seqList[e.target.value]);
                                setID(seqList[e.target.value].id);
                                setDetail(seqList[e.target.value].cytB)}} >
                                    <MenuItem value='0'>LEO0001</MenuItem>
                                    <MenuItem value='1'>LEO0004</MenuItem>
                                    <MenuItem value='2'>LEO0005</MenuItem>
                                    <MenuItem value='3'>LEO0006</MenuItem>
                                    <MenuItem value='4'>LEO0007</MenuItem>
                                    <MenuItem value='5'>LEO0008</MenuItem>
                                    <MenuItem value='6'>LEO0009</MenuItem>
                                    <MenuItem value='7'>LEO0010</MenuItem>
                                    <MenuItem value='8'>LEO0011</MenuItem>
                                    <MenuItem value='9'>LEO0012</MenuItem>
                                    <MenuItem value='10'>LEO0013</MenuItem>
                                    <MenuItem value='11'>LEO0014</MenuItem>
                                    <MenuItem value='12'>LEO0015</MenuItem>
                                    <MenuItem value='13'>LEO0016</MenuItem>
                                    <MenuItem value='14'>LEO0017</MenuItem>
                                    <MenuItem value='15'>LEO0018</MenuItem>
                                    <MenuItem value='16'>LEO0019</MenuItem>
                                    <MenuItem value='17'>LEO0020</MenuItem>
                                    <MenuItem value='18'>LEO0021</MenuItem>
                                    <MenuItem value='19'>LEO0022</MenuItem>
                                    <MenuItem value='20'>LEO0023</MenuItem>
                                    <MenuItem value='21'>LEO0024</MenuItem>
                                    <MenuItem value='22'>LEO0026</MenuItem>
                                    <MenuItem value='23'>LEO0027</MenuItem>
                                    <MenuItem value='24'>LEO0029</MenuItem>
                                    <MenuItem value='25'>LEO1001</MenuItem>
                                    <MenuItem value='26'>LEO1002</MenuItem>
                                    <MenuItem value='27'>LEO1003</MenuItem>
                                    <MenuItem value='28'>LEO1004</MenuItem>
                                    <MenuItem value='29'>LEO1005</MenuItem>
                                    <MenuItem value='30'>LEO1006</MenuItem>
                                    <MenuItem value='31'>LEO2001</MenuItem>
                                    <MenuItem value='32'>LEO2002</MenuItem>
                                    <MenuItem value='33'>LEO2003</MenuItem>
                                    <MenuItem value='34'>LEO2004</MenuItem>
                                    <MenuItem value='35'>LEO2005</MenuItem>
                                    <MenuItem value='36'>LEO2006</MenuItem>
                                    <MenuItem value='37'>LEO2007</MenuItem>
                                    <MenuItem value='38'>LEO2008</MenuItem>
                                    <MenuItem value='39'>LEO2009</MenuItem>
                                    <MenuItem value='40'>LEO2010</MenuItem>
                                    <MenuItem value='41'>LEO2011</MenuItem>
                                </Select>
                        </FormControl>
                            )}
                        
                        
                        
                        
                        
                        <Grid item xs={12}>
                        <Typography className={classes.text}>
                            2. Enter an ID of the lion sample that you will query (optional), this will show up on the output page
                        </Typography>
                        </Grid>   
                        
                        {select == 0 && (
                        <TextField 
                            value={ID}
                            onChange={(e) => setID(e.target.value)}
                            label="Enter a description of your lion sample - Ex: LL0001"
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
                            label="Enter a description of your lion sample - Ex: LL0001"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                            
                        />
                        )}

                        {select == 2 && (
                        <TextField 
                            disabled
                            value={seqPlacerID.id}
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
                            value={seqPlacerID.id}
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
                                3. Enter your lion DNA and then click to submit query. Instructions to generate these sequence(s) can we found <Typography className={classes.hyperLink} to="/instructions" component={Link}>here</Typography>
                            </Typography>
                        </Grid>   

                        

                        {select == 0 && (
                        <TextField 
                            value={Detail}
                            onChange={(e) => setDetail(e.target.value)}
                            label="Enter lion DNA sequence"
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
                                value={seqPlacerID.id}
                                onChange={(e) => setDetail(e.target.value)}
                                label="Enter lion DNA sequence 1"
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            </Grid>
                            <Typography><p></p></Typography>

                            <Grid xs={12}>
                            <TextField 
                                value={Detail}
                                onChange={(e) => setDetail(e.target.value)}
                                label="Enter lion DNA sequence 2"
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            </Grid>
                            <Typography><p></p></Typography>
                            <Grid xs={12}>
                            <TextField 
                                value={Detail}
                                onChange={(e) => setDetail(e.target.value)}
                                label="Enter lion DNA sequence 3"
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
                                value={seqPlacerID.cytB}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder={seqPlacerID.cytB}
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            </Grid>
                            <Typography><p></p></Typography>

                            <Grid xs={12}>
                            <TextField 
                                disabled
                                value={seqPlacerID.cytB}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder={seqPlacerID.cytB}
                                variant="outlined"
                                color="secondary"
                                className={classes.field}
                                multiline
                                rows={3}
                                fullWidth
                                error={sequenceError}
                            />
                            </Grid>
                            <Typography><p></p></Typography>
                            <Grid xs={12}>
                            <TextField 
                                disabled
                                value={seqPlacerID.cytB}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder={seqPlacerID.cytB}
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
                    </form>
                <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome or Safari browsers are recommended, the printout may not be formatted as well by Firefox </Typography>
                </Grid>  
                </Grid>     
                <Grid item xs={12} >
                    <Conclusion />
                </Grid>
    
        </Grid>
    );
};

export default Content;