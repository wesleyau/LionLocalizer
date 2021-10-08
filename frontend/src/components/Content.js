import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles, mergeClasses } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

const Content = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography>
                    Enter Your Lion Sequence
                </Typography>
            </Grid>    
            <Grid item xs={12}>
                <form noValidate autoComplete="off">
                    <TextField 
                    className={mergeClasses.field}
                    label="Lion Sequence"
                    variant="outlined" />
                </form>
            </Grid>
            <Grid item>
                <Button
                onClick={() => console.log('Sequence submit was clicked')}
                Type="Submit Query"
                color="secondary"
                variant="contained"
                fullWidth
                required
                />
            </Grid>    
        </Grid>
    );
};

export default Content; 