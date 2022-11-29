import { createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import React from 'react';

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    BG = "#f6f7e4",
    AZ = "#1b7cd6",
    ER = "#d32f2f",
    SF = "#66bb6a",
}

export const theme = createTheme({
    palette: {
        mode: "light",
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.AZ,
        },
        error: {
            main: themePalette.ER,
        },
        success: {
            main: themePalette.SF
        },
    },
    typography: {
        h1:{
            fontSize: 60,
            marginTop: 24,
            textAlign: 'center',
            '@media (max-width:600px)': {
                fontSize: 42,
                margin: 16,
            },
        },
        h2: {
            fontSize: 36,
            marginTop: 6,
            textAlign: 'center',
            '@media (max-width:600px)': {
                fontSize: 28,
                margin: 4,
            },
        },
        subtitle1: {
            fontSize: 28,
            marginTop: 6,
            textAlign: 'center',
            '@media (max-width:600px)': {
                fontSize: 20,
                margin: 4,
            },
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};