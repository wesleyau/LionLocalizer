import { createTheme, ThemeProvider } from "@material-ui/core";

const Theme = createTheme({
    palette: {
      primary: {
        main: '#FF552E',
      },
      secondary: {
        main: '#13294B',
      },
    },
    typography: {
        fontFamily: 'sans-serif',
        fontSize: 14.5, 
        color: '#FFFFFF'
    },
  });

export default Theme;