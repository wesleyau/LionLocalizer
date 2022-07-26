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
})

const Faq = () => {
    const classes = useStyles()
    return (
        
        <Grid container>
            <Grid item xs={12} style={{background: "#84aeff"}}>
                <Typography variant="h5" className={classes.textIntro}>Lion Localizer: Frequently Asked Questions and Additional Information</Typography>
            </Grid>      
            <Grid item xs={12}>
                <a className={classes.textIntro} href='https://drive.google.com/file/d/1uFhU_SlFcqnKCaSplHkQrMSUg2Bzdmph/view?usp=sharing' target="_blank">Download FAQ</a>

                <Typography className={classes.typography}><p>Please use the "<a href='/contact'>Contact Us</a>" link on the webpage to send additional questions or comments. It is also possible to email directly comments to: <b>roca@illinois.edu</b>, using the email subject “Lion Localizer”.</p>
                <p>Important note: Some haplotypes (sequences) show a limited geographic distribution among lions and will be informative for establishing the provenance of lions or their products. However, some haplotypes are less informative due to the widespread distribution of lions carrying them, though these would be useful for establishing or excluding the regions of origin.</p></Typography>
                
                <Typography className={classes.typography}><b>There is no storage of the information or sequences that are used as queries to the Lion Localizer, nor is the user recorded.</b><br/></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.typography}>
                    <p><i>Summary of Frequently Asked Questions (FAQs)</i></p>
                    
                    <p>
                    • What happens to information or sequences entered as queries against the Lion Localizer?<br/>
                    • Reasons that published sequences may not be in the Lion Localizer<br/>
                    • How to print the map and output listing from the Lion Localizer<br/>
                    • List of abbreviations used in the Lion Localizer<br/>
                    • How are unprovenanced or unpublished sequences handled?<br/>
                    • How to handle heteroplasmy, indels or ambiguous sites in a sequence used as a query</p>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.textContent}><u>Frequently Asked Questions (FAQs)</u></Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><i> What happens to information or sequences entered as queries against the LL? Are the sequences saved or stored, and is the user recorded? </i></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.typography}>
                <p>The information and sequences input into LL are neither saved nor stored, nor is the user recorded.</p></Typography>
            </Grid> 

            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><i> Are there sequences in GenBank or in published sources that are not listed in the Lion Localizer? </i></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.typography}>
                <p>Published sequences may not be present in the Lion Localizer for the following reasons:<br />
                • The sequence may have been excluded if it contained ambiguous sites, i.e., character states other than A, C, G or T <br />
                • The sequence may not completely overlap the required length for inclusion in the database <br />
                • The sequence may have been published too recently to be included in the Lion Localizer</p></Typography>
            </Grid> 
            <Grid item xs={12}>
                <Typography className={classes.typography}>However, should missing sequences or any other omissions or errors be discovered, please inform us by using the "<a href='/contact'>Contact Us</a>" link on the webpage, or by sending an email to <b>roca@illinois.edu.</b></Typography>
            </Grid> 

            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><p><i> Can one print the Lion Localizer query results (map and output listing)? </i></p></Typography>
            </Grid> 
            <Grid item xs={12}>
                <Typography className={classes.typography}>The results can be printed using the print command on a web browser. This will allow results to be printed or to be saved as a pdf, including any changes made to the display of the page by the user. The output map will be shown as it appears on the webpage after which will appear the timestamp (Greenwich mean time), the query information and sequence, and a listing of all haplotypes beginning with the one(s) that most closely match the query sequence, listing all the haplotypes by the degree to which they match the query. The use of Chrome, Firefox, or Safari browsers are recommended for printing results; the printout may not be formatted as well in other browsers.</Typography>
            </Grid> 

            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><p><i>List of abbreviations</i></p></Typography>
            </Grid> 
            <Grid item xs={12}>
                <Typography className={classes.typography}>

                CAR: Central African Republic<br />
                DRC: Democratic Republic of the Congo<br />
                FR: Forest Reserve<br />
                GR: Game Reserve<br />
                NP: National Park<br />
                RSA: Republic of South Africa<br />
                SA: South Africa<br />
                WS: Wildlife Sanctuary
                </Typography>
            </Grid> 
            
            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><p><i>Are unprovenanced or unpublished sequences included in the Lion Localizer database?</i></p></Typography>
            </Grid> 
            <Grid item xs={12}>
                <Typography className={classes.typography}>Some mtDNA sequences may be present in the lion localizer database for lion samples for which there is no information on geographic provenance, or sequences may not yet have an associated GenBank accession number, or may not yet be associated with a peer-reviewed journal article. Such sequences are likely to comprise only a small proportion of the haplotypes in the Lion Localizer:

                <p><u>Unprovenanced samples</u> are those from which sequence information is obtained, but for which no information is available on the geographic origins of the samples. The Lion Localizer database may include sequences that are not georeferenced, and these will show up on the output page as "uncertain."</p>
                
                <u>Haplotypes lacking a GenBank accession number</u> may be sequences for which an accession does not yet exist in the GenBank database. The GenBank accession number would be left blank for such sequences.

                <p><u>Haplotypes without a linked peer-reviewed journal article.</u> Some sequences may not yet be reported in a peer-reviewed journal, in which case the reference would be listed as “unpublished.”</p>

                A subsequent scientific paper may report on a haplotype sequence identical to one already listed in the Lion Localizer database, but without provenance, associated GenBank number, and/or a link to a peer-reviewed journal article. In such cases, information from the newly published paper would be used to fill in the incomplete information for the haplotype in the Lion Localizer, with a link established to the new information.
                </Typography>
            </Grid> 

            <Grid item xs={12}>
                <Typography className={classes.typographyBold}><br /><p><i>How should sequences with heteroplasmy, indels or ambiguous sites be handled?</i></p></Typography>
            </Grid> 
            <Grid item xs={12}>
                <Typography className={classes.typography}>The Lion Localizer is designed to handle mitochondrial DNA sequences with unambiguous character states (i.e., only A, C, G or T).
                <p>A very small proportion of published sequences in Genbank include one or more nucleotide sites with “N” as the character state (unknown nucleotide), within the region examined by the Lion Localizer. Because these can represent low quality or low coverage of reads, we excluded this small proportion of GenBank entries from the Lion Localizer database, to minimize the use of sequence data that is sometimes not as reliable as published sequences with only unambiguous character states.</p>
                
                <b>Heteroplasmy</b> is defined as the presence, within a cell or individual, of more than one distinct sequence among organellar genomes. This leads to polymorphisms among DNA reads, producing ambiguous character states in sequence data that is otherwise of high quality.

                <p><b>Indels</b> are insertion-deletion variants that show up as gaps or additional bases in the sequence when it is aligned to similar sequences. (These would not be expected for protein-coding regions such as cytochrome B.)</p>

                For those using the Lion Localizer, we provide the following guidelines should indels or heteroplasmy be putatively detected at a site within the region of mtDNA used as input by the software:

                <p>• If there is a large batch of samples, and the sample with the indel or heteroplasmy is not critical, then consider removing the sample from further consideration.</p>

                • If the sample is critical, or the extraction and/or sequencing are being repeated, then verify that the indel or heteroplasmy is real and not an artifact due to a technical issue. For example, the DNA can be re-extracted if contamination during or after extraction is suspected. If Sanger sequencing is being conducted, it would be important to verify the indel or heteroplasmy by sequencing the mtDNA in both directions, and/or conducting the sequencing reactions several times, and also verifying that surrounding sequences in the same read can be identified unambiguously with high confidence.
                
                <p>• If the sample is critical, and the sequence is confirmed as containing a single heteroplasmic site, then both nucleotides present at the site can be coded and entered separately as queries against the Lion Localizer. For example, if the sequence contains:</p>

                …ACTGA<b>R</b>GTCAA… where R indicates that some reads contain A and other reads contain G at a nucleotide position. 

                <p>Then each variant of the sequence can be queried using the Lion Localizer:<br />
                …ACTGA<b>A</b>GTCAA… <br />
                …ACTGA<b>G</b>GTCAA…</p>

                And the geographic localities can be recorded for both sequences.

                <p>• For a sequence that has an indel compared to the cytochrome B sequences in the Lion Localizer database, it may be preferable for the sequence with an indel to be excluded from further consideration.</p>

                • If the sequence contains more than one variable nucleotide, we strongly suggest excluding it, though potentially the variants could be cloned and sequenced separately.
                <br/></Typography>
            </Grid> 

        

        </Grid>
        
    );
};

export default Faq;

