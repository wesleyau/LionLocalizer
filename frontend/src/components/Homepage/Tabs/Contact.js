import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';
import emailjs from "emailjs-com"

const useStyles = makeStyles({ 
    margin: {
        marginTop: 2.5,
    },
    marginMore: {
        marginTop: 5,
        marginLeft: 5,
    },
    textIntro: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        fontWeight: 'bold',
        display: 'block'
    },
    messageSent: {
        color: '#E51414'
    }
})

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'youtube_template', e.target, 'wlPElXk3uoEsBx3jR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    const classes = useStyles()

    const [click, setClick] = useState(false);

    return(
        <Grid container>
        <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Contact Us</Typography>
        </Grid>    
        
        <Grid item xs={12}>
            <Typography className={classes.marginMore}>Please use this email form to send any questions, suggestions or comments using “Lion Localizer” at the beginning of the email subject.</Typography>
            </Grid>
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                    
                        <div className={classes.textIntro}>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        
                        <div className={classes.textIntro}>
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                    
                        <div className={classes.textIntro}>
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                     
                        <div className={classes.textIntro}>
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        
                        <Grid>
                        <div className={classes.textIntro} >
                            <button type="submit" className="btn btn-info" onClick={() => {setClick(true);}} >Send Message</button>
                        </div>
                        </Grid>
                    </div>
                </form>

                
                {click == true && (
                        <Typography className={classes.messageSent}>Your message has been sent!</Typography>
                        )}
            </div>
        </div>
        <Grid item xs={12} >
                    <br></br>
                </Grid>
        </Grid>
    )
}
