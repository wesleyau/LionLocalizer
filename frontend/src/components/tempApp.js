import React from "react";
import { Grid } from "@material-ui/core";
import Theme from "./Theme";
import Header from "./Homepage/Header";
import Footer from "./Homepage/Footer";
import Content from "./Homepage/Content";
import Introduction from "./Homepage/Introduction";
import Conclusion from "./Homepage/Conclusion";
import { ThemeProvider } from "@material-ui/core";

const tempApp = () => {
    return (
        <switch>
            <ThemeProvider theme={Theme}>
                <Grid container direction="column">
                    <Grid item container>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                            <Grid sm = {12} md = {10}>
                                <Header />
                            </Grid>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                    </Grid>
                    <Grid item container>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                            <Grid sm = {12} md = {10}>
                                <Introduction />
                            </Grid>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                    </Grid>
                    <Grid item container>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                            <Grid sm = {12} md = {10}>
                                <Content />
                            </Grid>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                    </Grid>
                    <Grid item container>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                            <Grid sm = {12} md = {10}>
                                <Conclusion />
                            </Grid>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                    </Grid>
                    <Grid item container>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                            <Grid sm = {12} md = {10}>
                                <Footer />
                            </Grid>
                        <Grid sm = {0} md = {1} style={{background: "#F8FAFC"}}/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </switch>
    );
};

export default tempApp;