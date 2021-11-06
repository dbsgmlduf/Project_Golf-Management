import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from "./_reducers/user_reducer";
import axios from 'axios';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import THEME from './theme';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)



axios.defaults.baseURL = 'http://localhost:7000';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
      <MuiThemeProvider theme={THEME}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
