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
               
                <p>Barnett, R., N. Yamaguchi, B. Shapire, S. Y. W. Ho, I. Barnes, R. Sabin, L. Werdelin, J. Cuisin, & G. Larson, 2014 Revealing the maternal demographic history of <i>Panthera leo</i> using ancient DNA and a spatially explicit genealogical analysis. BMC Evol. Biol. 14.</p>
                
                Barnett, R., N. Yamaguchi, I. Barnes & A. Cooper, 2006 Lost populations and preserving genetic diversity in the lion <i>Panthera leo</i>: Implications for its ex situ conservation. Conserv. Genet. 7:507–514.

                <p>Barnett, R., N. Yamaguchi, I. Barnes & A. Cooper, 2006 The origin, current diversity and future conservation of the modern lion (<i>Panthera leo</i>). Proc. R. Soc. B Biol. Sci. 273:2119–2125.</p>
                
                Bertola, L. D., H. Jongbloed, K. J. van der Gaag, P. de Knijff, N. Yamaguchi, H. Hooghiemstra, H. Bauer, P. Henschel, P. A. White, C. A. Driscoll, T. Tende, U. Ottosson, Y. Saidu, K. Vrieling & H. H. de Iongh, 
                2016 Phylogeographic patterns in Africa and high resolution delineation of genetic clades in the lion (<i>Panthera leo</i>). Scientific Reports 6:30807.
                
                <p>Bertola, L. D., L. Tensen, P. van Hooft, P. A. White, C. A. Driscoll, P. Henschel, A. Caragiulo, I. Dias-Freedman, E. A. Sogbohossou, P. N. Tumenta, T. H. Jrimo, G. R. de Snoo, H. H. de longh, and K. Vrieling, 2015 Autosomal and mtDNA markers affirm the distinctiveness of lions in West and Central Africa. PLOS ONE 10:e0137975.</p>

                Bertola, L. D., W. F. van Hooft, K. Vrieling, D. R. Uit de Weerd, D. S. York, H. Bauer, H. H. Y. Prins, P. J. Funston, H. A. Udo de Haes, H. Leirs, W. A. van Haeringen, E. Sogbohossou, P. N. Tumenta, and H. H. de longh, 2011 Genetic diversity, evolutionary history and implications for conservation of the lion (<i>Panthera leo</i>) in West and Central Africa. Journal of Biogeography 38:1356-1367.
               
                <p>Burger, J., W. Rosendahl, O. Loreille, H. Hemmer, T. Eriksson, A. Götherström, J. Hiller, M. J. Collins, T. Wess, & K. W. Alt, 2004 Molecular phylogeny of the extinct cave lion <i>Panthera leo spelaea</i>. Mol. Phylogenet. Evol. 30:841-849.</p>

                Dubach, J. M., M. B. Briggs, P. A. White, B. A. Ament, & B. D. Patterson, 2013 Genetic perspectives on "Lion Conservation Units" in Eastern and Southern Africa. Conservation Genetics, 14(4), 741-755.
                
                <p>Dubach, J., B. D. Patterson, M. B. Briggs, K. Venzke, J. Flamand, P. Stander, L. Scheepers, & R. W. Kays, 2005 Molecular genetic variation across the southern and eastern geographic ranges of the African lion, <i>Panthera</i>. Conservation Genetics, 6(1), 15-24.</p>

                </Typography>

            </Grid> 

        </Grid>
        
    );
};

export default References;

