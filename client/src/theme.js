import { createTheme } from '@mui/material/styles';

const THEME = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b1',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#005E73',
        },
    },
    typography: {
        fontFamily: 'CookieRun Bold',
        h6: {
            fontSize: '1rem',
        },
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#2F4858',
                color: '#fff',
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
    },
    shape: {
        borderRadius: 4,
    },
});

export default THEME;
