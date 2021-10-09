import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, ThemeProvider } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from './Map';
import Table from './Table';
import Input from './Input';

const Output = () => {
    return (
        <Grid container>
            <Grid item container>
                <Grid xs = {6}>
                    <Map />
                </Grid>
                <Grid item container xs={4}>
                    <Grid item container xs={6}>
                        <Grid xs = {12}>
                            <Input />
                        </Grid>
                        <Grid xs = {12}>
                            <Table />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 

        </Grid>
    );
};


export default Output;