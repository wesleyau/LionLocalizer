import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import i1 from '../../../../static/images/instruction1.png';
import i2 from '../../../../static/images/instruction2.png';
import i3 from '../../../../static/images/instruction3.png';
import i4 from '../../../../static/images/instruction4.png';
import i5 from '../../../../static/images/instruction5.png';
import i6 from '../../../../static/images/instruction6.png';
import i7 from '../../../../static/images/instruction7.png';
import i8 from '../../../../static/images/instruction8.png';
import i9 from '../../../../static/images/instruction9.png';
import i10 from '../../../../static/images/instruction10.png';

const useStyles = makeStyles({ 
    margin: {
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 15,
        fontWeight: 'bold',
        
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        display: 'block'
    },
    typographyMargin: {
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
    },
    typography: {
        marginLeft: 5,
        marginTop: 5,
    },
    typographyBold: {
        marginLeft: 5,
        marginTop: 5,
        fontWeight: 'bold',
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
        display: 'block'
    },
    textIntroLink: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    textContent: {
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 5,
        fontWeight: 'bold',
        display: 'block'
    },
    u1: {
        height: '20%',
        width: '20%',
    },
    u2: {
        height: '40%',
        width: '40%',
    },
    u3: {
        height: '20%',
        width: '20%',
    },
    u4: {
        height: '20%',
        width: '20%',
    },
    u5: {
        height: '25%',
        width: '25%',
    },
    u6: {
        height: '30%',
        width: '30%',
    },
})

const Instructions = () => {
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Instruction</Typography>
        </Grid>    
        <Grid className={classes.margin}>
    
        <a href='https://drive.google.com/file/d/1f-ZkdE3g0bQeS-SahgpcvIOs6hBUT-8y/view?usp=sharing' target="_blank"> Download Instructions </a>

        <Typography className={classes.typography}>1. <br/>Instruction on how to generate your own cytochrome B (cytB) sequence of an appropriate length (trimming is very important) can be found at <a href='/protocol'>https://lionlocalizer.org/protocol</a>. Here you will find the following protocols:
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. DNA Extraction, PCR, and Sanger-sequencing protocols
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Trimming Protocols (1140 bp or 350 bp)
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Additional Infomation
        <br/>
        <br/>2. <br/> In order to query a cytB sequence, go to <a href='/query'>https://lionlocalizer.org/query</a>
        <br/>
        <br/>Click on the dropdown menu under the "Input Query Sequences" section. This will bring up four options to select from:
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. The first option queries a user <b>generated</b> 1140 bp cytB sequence
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. The second option queries a user <b>generated</b> 350 bp cytB sequence
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. The third option queries a <b>demo</b> 1140 bp cytB sequence (using a sequence already in the database)
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. The fourth option queries a <b>demo</b> 350 bp cytB sequence (using a sequence already in the database)
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className={classes.u1} src={i1} />
        <br/>
        <br/>2.1.1. If either of the first two options is selected, you will be prompted to enter any
            relevant information (such as your sample identification number and description) in
            section 2 (optional), and your query cytB sequence in section 3. <b>Important</b>: Make sure to
            select the correct option for the length of your sequence (1140 bp or 350 bp).
        <br/><img className={classes.u2} src={i2} />
        <br/>
        <br/>2.1.2. After the proper information has been entered, click the "submit query" button. If
            there are any errors in your sequence, an error message will appear. Make any necessary
            changes, and click the "submit query" button again.
        <br/><img className={classes.u3} src={i3} />
        <br/><img className={classes.u4} src={i4} />
        <br/>
        <br/>2.2.1. If either the third or the fourth option is selected, you will be prompted to select a
            demo sequence in the second dropdown menu that pops up. There are various demo
            sequences to choose from.
        <br/><img className={classes.u5} src={i5} />
        <br/>
        <br/>2.2.2. Once a demo sequence is selected, the ID and DNA sequence will be populated in
            the textboxes. Click the “submit query” button.
        <br/>
        <br/><img  className={classes.u6}src={i6} />
        <br/>
        <br/>3.
        <br/>Once the sequence is submitted, you will be taken to the output page, which will display
            three sections:
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Query information
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Table
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Map
        <br/>
        <br/>3.1. The query information section will show you the ID (or other information) and the
            DNA sequence that you entered.
        <br/><img src={i7} />
        <br/>
        <br/>3.2. The table section displays the listing of all the reported haplotype locations in Africa,
            sorted in order of how closely they match to the query sequence, with associated
            information on the numbers of mismatches and matches to your sequence, the country
            and locality from which lions with a sequence have been reported, and the publication
            and GenBank numbers for the previously reported sequences.
        <br/><img src={i8} />
        <br/>
        <br/>3.3. The map section will display the listing on a map. Listings with 0 mismatches will
            show up as a lion icon, while listings that have 1 or more mismatches will show up as a
            red pin icon. If only country (but not locality) information was available for a lion
            sequence, a black pin is used. If a box next to a haplotype on the above listing is selected,
            a larger icon will appear on the map.
        <br/><img src={i9} />
        <br/>
        <br/>3.4. Clicking on any of the icons on the map will show a window with further information about that listing.
        <br/><img src={i10} />
        </Typography>
        </Grid>
        </Grid>
    );
};

export default Instructions;

