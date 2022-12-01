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
               
                <p>Barnett, R., Sinding, M. H. S., Vieira, F. G., Mendoza, M. L. Z., Bonnet, M., Araldi, A., ... & Gilbert, M. T. P. (2018). No longer locally extinct? Tracing the origins of a lion (Panthera leo) living in Gabon. Conservation Genetics, 19(3), 611-618.</p>
                
                Bertola, L. D., Jongbloed, H., Van Der Gaag, K. J., De Knijff, P., Yamaguchi, N., Hooghiemstra, H., ... & De Iongh, H. H. (2016). Phylogeographic patterns in Africa and high resolution delineation of genetic clades in the lion (Panthera leo). Scientific Reports, 6(1), 1-11.

                <p>Bertola, L. D., Tensen, L., Van Hooft, P., White, P. A., Driscoll, C. A., Henschel, P., ... & Vrieling, K. (2015). Autosomal and mtDNA markers affirm the distinctiveness of lions in West and Central Africa. PLoS One, 10(10), e0137975.</p>
                
                Bertola, L. D., Van Hooft, W. F., Vrieling, K., Uit de Weerd, D. R., York, D. S., Bauer, H., ... & De Iongh, H. H. (2011). Genetic diversity, evolutionary history and implications for conservation of the lion (Panthera leo) in West and Central Africa. Journal of Biogeography, 38(7), 1356-1367.
                
                <p>Dubach, J. M., Briggs, M. B., White, P. A., Ament, B. A., & Patterson, B. D. (2013). Genetic perspectives on “lion conservation units” in Eastern and Southern Africa. Conservation Genetics, 14(4), 741-755.</p>

                Dubach, J., Patterson, B. D., Briggs, M. B., Venzke, K., Flamand, J., Stander, P., ... & Kays, R. W. (2005). Molecular genetic variation across the southern and eastern geographic ranges of the African lion, Panthera leo. Conservation Genetics, 6(1), 15-24.

                </Typography>

            </Grid> 

        </Grid>
        
    );
};

export default References;

