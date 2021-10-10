import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Conclusion from "./Conclusion";
import Introduction from "./Introduction"


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
    Button: {
        marginLeft: 10,
    },
    formControl: {
        minWidth: 200,
        marginLeft: 10,
        marginBottom: 5,
    },
    formControl1: {
        minWidth: 200,
        marginLeft: 15,
        marginBottom: 10,
    },
    typography: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    textNotBold: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
        display: 'block'
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

    return (
        <Grid container>
            <Grid item xs={12} >
                <Introduction />
            </Grid>
            <Grid item xs={12} >
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>
                            1. Choose the type of cytB sequence that you will enter
                        </Typography>
                    </Grid>   
                    <FormControl className={classes.formControl}>
                        
                        <Select value={select} onChange={(e) => setSelect(e.target.value)} error={selectError}>
                            <MenuItem value='0'>One short cytB sequence</MenuItem>
                            <MenuItem value='1'>Three Short cytB sequences</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid item xs={12}>
                        <Typography className={classes.text}>
                            2. Enter Your Lion Sequence
                        </Typography>
                        <Typography className={classes.textNotBold}>
                        Enter a text description of your lion sample (optional). The description and sequence will be populated to the output page, but <Typography to="/faqs" component={Link}>neither are saved</Typography> by the lion localizer software.
                        </Typography>
                    </Grid>   
                    <TextField 
                        onChange={(e) => setId(e.target.value)}
                        label="Enter Lion Id"
                        variant="outlined"
                        color="secondary"
                        className={classes.field}
                        fullWidth
                        error={idError}
                    />
                    {select == 0 &&
                    <TextField 
                        onChange={(e) => setSequence(e.target.value)}
                        label="Enter Lion Sequence"
                        variant="outlined"
                        color="secondary"
                        className={classes.field}
                        multiline
                        rows={5}
                        fullWidth
                        error={sequenceError}
                    />
                    }
                    {select == 1 &&
                    <Grid container item justifyContent="center" alignItems="center" >
                        <Grid xs={3}>
                        <TextField 
                            onChange={(e) => setSequence(e.target.value)}
                            label="Enter Lion Sequence 1"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            multiline
                            rows={5}
                            fullWidth
                            error={sequenceError}
                        />
                        </Grid>

                        <Grid xs={1}/>

                        <Grid xs={3}>
                        <TextField 
                            onChange={(e) => setSequence(e.target.value)}
                            label="Enter Lion Sequence 2"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            multiline
                            rows={5}
                            fullWidth
                            error={sequenceError}
                        />
                        </Grid>
                        <Grid xs={1}/>
                        <Grid xs={3}>
                        <TextField 
                            onChange={(e) => setSequence(e.target.value)}
                            label="Enter Lion Sequence 3"
                            variant="outlined"
                            color="secondary"
                            className={classes.field}
                            multiline
                            rows={5}
                            fullWidth
                            error={sequenceError}
                        />
                        </Grid>
                    </Grid>
                    }
                    <Button
                        onClick={() => console.log('Query Button Clicked')}
                        Type="Submit Query"
                        color="primary"
                        variant="contained"
                        to="/out" component={Link}
                        >
                        Submit Query
                    </Button>
                    <FormControl className={classes.formControl1}>
                        <Typography className={classes.typography}>Or select an existing lion sequence for demonstration: </Typography> 
                            <Select onChange={(e) => setExisting(e.target.value)} error={selectError}>
                                <MenuItem value=''>None</MenuItem>
                                <MenuItem value='LL0001'>LL0001</MenuItem>
                                <MenuItem value='LL0002'>LL0002</MenuItem>
                                <MenuItem value='LL0003'>LL0003</MenuItem>
                                <MenuItem value='LL0004'>LL0004</MenuItem>
                                <MenuItem value='LL0005'>LL0005</MenuItem>
                                <MenuItem value='LL0006'>LL0006</MenuItem>
                            </Select>
                    </FormControl>
                </form>
            </Grid>     
            <Grid item xs={12} >
                <Conclusion />
            </Grid>
        </Grid>
    );
};

export default Content;