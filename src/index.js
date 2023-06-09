import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './shared-components/ScrollToTop';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = configureStore({reducer: allReducers});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>
);