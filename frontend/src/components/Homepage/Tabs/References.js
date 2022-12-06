import React from "react";
import { AppBar, Toolbar, Typography, Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel, FormControlLabel } from "@material-ui/core";
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

const useStyles = makeStyles({ 
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
        marginLeft: 5,
        fontWeight: 'bold',
        display: 'block'
    },
})

const References = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>References in the Scientific Literature</Typography>
            </Grid>      
            <Grid item xs={12}>
                <a className={classes.textIntro} href='https://drive.google.com/file/d/1TjvmQ7BlmgtFkfVkKIHQgONjlZHo6FFC/view?usp=sharing' target="_blank">Download Reference List</a>
                <Typography className={classes.typography}><p>We thank our colleagues who have published mtDNA sequences and made them publicly available in Genbank. 
                    The sequences used by the Lion Localizer were obtained from GenBank entries deposited for the following papers:</p>
                </Typography>
                
            </Grid>  
            <Grid item xs={12}>
                <Typography className={classes.typography}>
               
                <p>Barnett, R., M. H. S Sinding, F. G. Vieira, M. L. Z. Mendoza, M. Bonnet, A. Araldi, I. Kienast, A. Zambarda, N. Yamaguchi, P. Henschel, & M. T. P. Gilbert, 2018 No longer locally extinct? Tracing the origins of a lion (Panthera leo) living in Gabon. Conservation Genetics, 19(3), 611-618.</p>
                
                Bertola, L. D., H. Jongbloed, K. J. van der Gaag, P. de Knijff, N. Yamaguchi, H. Hooghiemstra, H. Bauer, P. Henschel, P.A. White, C. A. Driscoll, T. Tende, U. Ottosson, Y. Saidu, K. Vrieling & H. H. de Iongh, 2016 Phylogeographic patterns in Africa and high resolution delineation of genetic clades in the lion (Panthera leo). Scientific Reports 6:30807.

                <p>Bertola, L. D., L. Tensen, P. van Hooft, P. A. White, C. A. Driscoll, P. Henschel, A. Caragiulo, I. Dias-Freedman, E. A. Sogbohossou, P. N. Tumenta, T. H. Jrimo, G. R. de Snoo, H. H. de longh, & K. Vrieling, 2015 Autosomal and mtDNA markers affirm the distinctiveness of lions in West and Central Africa. PLOS ONE 10:e0137975.</p>
                
                Bertola, L. D., W. F. van Hooft, K. Vrieling, D. R. Uit de Weerd, D. S. York, H. Bauer, H. H. Y. Prins, P. J. Funston, H. A. Udo de Haes, H. Leirs, W. A. van Haeringen, E. Sogbohossou, P. N. Tumenta, & H. H. de longh, 2011 Genetic diversity, evolutionary history and implications for conservation of the lion (Panthera leo) in West and Central Africa. Journal of Biogeography 38:1356-1367.
                
                <p>Dubach, J. M., M. B. Briggs, P. A. White, B. A. Ament, & B. D. Patterson, 2013 Genetic perspectives on "Lion Conservation Units" in Eastern and Southern Africa. Conservation Genetics, 14(4), 741-755.</p>

                Dubach, J., B. D. Patterson, M. B. Briggs, K. Venzke, J. Flamand, P. Stander, L. Scheepers, & R. W. Kays, 2005 Molecular genetic variation acrossthe southern and eastern geographic ranges of the African lion,Panthera. Conservation Genetics, 6(1), 15-24.
                <br></br>
                </Typography>

            </Grid> 

        </Grid>
        
    );
};

export default References;

