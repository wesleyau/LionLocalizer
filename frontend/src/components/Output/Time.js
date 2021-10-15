import React, { useState, useEffect, Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';


const Time = () => {
    const date = (new Date());
    const dateAsString = date.toLocaleString(undefined, { timeZone: 'GMT', timeStyle: "medium", dateStyle: "long"})
    return (

        <Typography>Timestamp: {dateAsString} Greenwich Mean Time </Typography>
            
    );
};

export default Time;