import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from './Map';
import Table from './Table';

const Output = () => {
    return (
        <Grid container>
            <Grid item container>
                <Grid xs = {7}>
                    <Map />
                </Grid>
                <Grid item container xs={5}>
                    <Grid xs = {1}>
                        
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid xs = {12}>
                            <Table />
                        </Grid>
                        <Grid xs = {12}>
                            <div>table</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 

        </Grid>
    );
};


export default Output;