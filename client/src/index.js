import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import THEME from './theme';

axios.defaults.baseURL = 'http://localhost:7000';
axios.interceptors.request.use((config) => {
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    config.timeout = 2000;
    return config;
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
