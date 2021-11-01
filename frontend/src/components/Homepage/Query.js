import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Conclusion from "./Conclusion";
import Introduction from "./Introduction";
import axios from "axios";



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
        fontWeight: 'bold',
        marginLeft: 5,   
        marginBottom: 10
    },
})

const Content = () => {
    const classes = useStyles()

    //states to see if textboxes are filled or not
    const [id, setId] = useState('')
    const [sequence, setSequence] = useState('')
    const [idError, setIdError] = useState(false)
    const [sequenceError, setSequenceError] = useState(false)

    //For the dropdown selects
    const [select, setSelect] = useState('0')
    const [existing, setExisting] = useState('')
    const [explore, setExplore] = useState('')
    const [selectError, setSelectError] = useState(false)


    const [textFill, setTextFill] = useState();

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

    {/* const handleTextFill = (e) => {
        if (existing != '') {
            useEffect(() => {
                axios
                  .get(`http://127.0.0.1:8000/mapping/sequence-detail/${existing}`)
                  .then((res) => {
                    const seqData = res.data;
                    setTextFill(seqData);
                  });
              }, []);
            const { id: seqId, seq } = seqData || {};
            setId = 'seqId';
            setSequence = 'seq';
        }
    } */}

    return (
        <Grid container>
        
                
                <Grid item xs={12} >
                    <Introduction />
                </Grid>
                
                <Grid item xs={12} >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid item xs={12}>
                            <Typography className={classes.text}>
                                1. Enter an ID of the lion sample that you will query (optional), this will show up on the output page
                            </Typography>
                        </Grid>   
                        <TextField 
                            onChange={(e) => setId(e.target.value)}
                            label="Enter a description of your lion sample - Ex: LL0001"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            fullWidth
                            error={idError}
                        />
                        <Grid item xs={12}>
                            <Typography className={classes.text}>
                                2. Choose the type of cytB sequence that you will enter
                            </Typography>
                        </Grid>     
                        <FormControl className={classes.formControl}>
                            
                            <Select value={select} onChange={(e) => setSelect(e.target.value)} error={selectError}>
                                <MenuItem value='0'>Enter one short cytB sequence</MenuItem>
                                <MenuItem value='1'>Enter three short cytB sequences</MenuItem>
                                <MenuItem value='2'>Demo: Select one short ctyB lion sequence in the database</MenuItem>
                                <MenuItem value='3'>Demo: Select three short ctyB lion sequences in the database</MenuItem>
                            </Select>
                        </FormControl>
                        {select == 2 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Select an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select onChange={(e) => setExisting(e.target.value)} error={selectError}>
                                    <MenuItem value=''>None</MenuItem>
                                    <MenuItem value='LL0001'>LL0001</MenuItem>
                                    <MenuItem value='LL0002'>LL0002</MenuItem>
                                    <MenuItem value='LL0003'>LL0003</MenuItem>
                                    <MenuItem value='LL0004'>LL0004</MenuItem>
                                    <MenuItem value='LL0005'>LL0005</MenuItem>
                                    <MenuItem value='LL0006'>LL0006</MenuItem>
                                    <MenuItem value='LL0007'>LL0007</MenuItem>
                                    <MenuItem value='LL0008'>LL0008</MenuItem>
                                    <MenuItem value='LL0009'>LL0009</MenuItem>
                                    <MenuItem value='LL0010'>LL0010</MenuItem>
                                    <MenuItem value='LL0011'>LL0011</MenuItem>
                                    <MenuItem value='LL0012'>LL0012</MenuItem>
                                    <MenuItem value='LL0013'>LL0013</MenuItem>
                                    <MenuItem value='LL0014'>LL0014</MenuItem>
                                    <MenuItem value='LL0015'>LL0015</MenuItem>
                                    <MenuItem value='LL0016'>LL0016</MenuItem>
                                    <MenuItem value='LL0017'>LL0017</MenuItem>
                                    <MenuItem value='LL0018'>LL0018</MenuItem>
                                    <MenuItem value='LL0019'>LL0019</MenuItem>
                                    <MenuItem value='LL0020'>LL0020</MenuItem>
                                    <MenuItem value='LL0021'>LL0021</MenuItem>
                                    <MenuItem value='LL0022'>LL0022</MenuItem>
                                    <MenuItem value='LL0023'>LL0023</MenuItem>
                                    <MenuItem value='LL0024'>LL0024</MenuItem>
                                    <MenuItem value='LL0025'>LL0025</MenuItem>
                                    <MenuItem value='LL0026'>LL0026</MenuItem>
                                    <MenuItem value='LL0027'>LL0027</MenuItem>
                                    <MenuItem value='LL0028'>LL0028</MenuItem>
                                    <MenuItem value='LL0029'>LL0029</MenuItem>
                                    <MenuItem value='LL1001'>LL1001</MenuItem>
                                    <MenuItem value='LL1002'>LL1002</MenuItem>
                                    <MenuItem value='LL1003'>LL1003</MenuItem>
                                    <MenuItem value='LL1004'>LL1004</MenuItem>
                                    <MenuItem value='LL1005'>LL1005</MenuItem>
                                    <MenuItem value='LL1006'>LL1006</MenuItem>
                                    <MenuItem value='LL2001'>LL2001</MenuItem>
                                </Select>
                        </FormControl>
                            )}

                        {select == 3 && (
                            <FormControl className={classes.formControl1}>
                            <Typography className={classes.typography}>Choose an existing sequence in the Lion Localizer (LL) database: </Typography> 
                                <Select onChange={(e) => setExisting(e.target.value)} error={selectError}>
                                    <MenuItem value=''>None</MenuItem>
                                    <MenuItem value='LL0001'>LL0001</MenuItem>
                                    <MenuItem value='LL0002'>LL0002</MenuItem>
                                    <MenuItem value='LL0003'>LL0003</MenuItem>
                                    <MenuItem value='LL0004'>LL0004</MenuItem>
                                    <MenuItem value='LL0005'>LL0005</MenuItem>
                                    <MenuItem value='LL0006'>LL0006</MenuItem>
                                    <MenuItem value='LL0007'>LL0007</MenuItem>
                                    <MenuItem value='LL0008'>LL0008</MenuItem>
                                    <MenuItem value='LL0009'>LL0009</MenuItem>
                                    <MenuItem value='LL0010'>LL0010</MenuItem>
                                    <MenuItem value='LL0011'>LL0011</MenuItem>
                                    <MenuItem value='LL0012'>LL0012</MenuItem>
                                    <MenuItem value='LL0013'>LL0013</MenuItem>
                                    <MenuItem value='LL0014'>LL0014</MenuItem>
                                    <MenuItem value='LL0015'>LL0015</MenuItem>
                                    <MenuItem value='LL0016'>LL0016</MenuItem>
                                    <MenuItem value='LL0017'>LL0017</MenuItem>
                                    <MenuItem value='LL0018'>LL0018</MenuItem>
                                    <MenuItem value='LL0019'>LL0019</MenuItem>
                                    <MenuItem value='LL0020'>LL0020</MenuItem>
                                    <MenuItem value='LL0021'>LL0021</MenuItem>
                                    <MenuItem value='LL0022'>LL0022</MenuItem>
                                    <MenuItem value='LL0023'>LL0023</MenuItem>
                                    <MenuItem value='LL0024'>LL0024</MenuItem>
                                    <MenuItem value='LL0025'>LL0025</MenuItem>
                                    <MenuItem value='LL0026'>LL0026</MenuItem>
                                    <MenuItem value='LL0027'>LL0027</MenuItem>
                                    <MenuItem value='LL0028'>LL0028</MenuItem>
                                    <MenuItem value='LL0029'>LL0029</MenuItem>
                                    <MenuItem value='LL1001'>LL1001</MenuItem>
                                    <MenuItem value='LL1002'>LL1002</MenuItem>
                                    <MenuItem value='LL1003'>LL1003</MenuItem>
                                    <MenuItem value='LL1004'>LL1004</MenuItem>
                                    <MenuItem value='LL1005'>LL1005</MenuItem>
                                    <MenuItem value='LL1006'>LL1006</MenuItem>
                                    <MenuItem value='LL2001'>LL2001</MenuItem>
                                </Select>
                        </FormControl>
                            )}

                        <Grid item xs={12}>
                            <Typography className={classes.text}>
                                3. Enter your lion DNA and then click to submit query. Instructions to generate these sequence(s) can we found <Typography className={classes.hyperLink} to="/instructions" component={Link}>here</Typography>
                            </Typography>
                        </Grid>   
                        {select == 0 && (
                        <TextField 
                            onChange={(e) => setSequence(e.target.value)}
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
                                onChange={(e) => setSequence(e.target.value)}
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
                                onChange={(e) => setSequence(e.target.value)}
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
                                onChange={(e) => setSequence(e.target.value)}
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
                            onChange={(e) => setSequence(e.target.value)}
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
                        {select == 3 && (
                        <Grid container item justifyContent="center" alignItems="center" >
                            <Grid xs={12}>
                            <TextField 
                                onChange={(e) => setSequence(e.target.value)}
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
                                onChange={(e) => setSequence(e.target.value)}
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
                                onChange={(e) => setSequence(e.target.value)}
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
                        <Button
                            onClick={() => console.log('Query Button Clicked')}
                            Type="Submit Query"
                            color="primary"
                            variant="contained"
                            to="/output" component={Link}
                            >
                            Submit Query
                        </Button>
                    </form>
                <Grid item xs={12} direction="row">
                    <Typography variant="caption" display="block" className={classes.disclaimer}> For printing purposes, the Chrome or Safari browsers is recommended, the printout may not be formmatted as well by Firefox </Typography>
                </Grid>  
                </Grid>     
                <Grid item xs={12} >
                    <Conclusion />
                </Grid>
    
        </Grid>
    );
};

export default Content;