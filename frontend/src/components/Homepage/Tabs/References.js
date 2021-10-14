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
                <Typography className={classes.typography}><p>We thank our colleagues who have published mtDNA sequences and made them publicly available in Genbank. 
                    The sequences used by the Lion Localizer were obtained from GenBank entries deposited for the following papers:</p>
                </Typography>
            </Grid>  
            <Grid item xs={12}>
                <Typography className={classes.typography}>
                Bagatharia, S. B., M. N. Joshi, R. V. Pandya, A. S. Pandit, R. P. Patel et al., 2013 Complete
                mitogenome of asiatic lion resolves phylogenetic status within Panthera. BMC Genomics
                14: 572.
                
                <p>Barnett, R., 2009 Phylogeography of lions (Panthera leo ssp.) reveals three distinct taxa and a
                late Pleistocene reduction in genetic diversity. Mol. Ecol. 18: 1668-1677.</p>
                
                Barnett, R., 2014 Revealing the maternal demographic history of Panthera leo using ancient
                DNA and a spatially explicit genealogical analysis. BMC Evol. Biol. 14.
                
                <p>Barnett, R., N. Yamaguchi, I. Barnes and A. Cooper, 2006a Lost populations and preserving
                genetic diversity in the lion Panthera leo: Implications for its ex situ conservation.
                Conserv. Genet. 7: 507–514.</p>
                
                Barnett, R., N. Yamaguchi, I. Barnes and A. Cooper, 2006b The origin, current diversity and
                future conservation of the modern lion (Panthera leo). Proc. R. Soc. B Biol. Sci. 273:
                2119–2125.
               
                <p>Bertola, L. D., H. Jongbloed, K. J. van der Gaag, P. de Knijff, N. Yamaguchi et al., 2016
                Phylogeographic patterns in Africa and high resolution delineation of genetic clades in
                the lion (Panthera leo). Scientific Reports 6: 30807.</p>
                
                Bertola, L. D., L. Tensen, P. van Hooft, P. A. White, C. A. Driscoll et al., 2015 Autosomal and
                mtDNA markers affirm the distinctiveness of lions in West and Central Africa. PLOS
                ONE 10: e0137975.
                
                <p>Bertola, L. D., W. F. van Hooft, K. Vrieling, D. R. Uit de Weerd, D. S. York et al., 2011 Genetic
                diversity, evolutionary history and implications for conservation of the lion (Panthera
                leo) in West and Central Africa. Journal of Biogeography 38: 1356-1367.</p>
                
                Burger, J., 2004 Molecular phylogeny of the extinct cave lion Panthera leo spelaea. Mol.
                Phylogenet. Evol. 30: 841-849.
               
                <p>Kitpipit, T., and A. M. T. Linacre, 2011 The complete mitochondrial genome analysis of the
                tiger (Panthera tigris). Molecular Biology Reports 39: 5745-5754.</p>
                
                Wei, L., X. Wu, Z. Lixin and Z. Jiang, 2011 Mitogenomic analysis of the genus Panthera.
                Science China Life Sciences 54: 917-930.
                
                <p>Wu, X., T. Zheng, Z. Jiang and L. Wei, 2007 The mitochondrial genome structure of the clouded
                leopard (Neofelis nebulosa). Genome 50: 252-257.</p>
                </Typography>
            </Grid> 

        </Grid>
        
    );
};

export default References;

