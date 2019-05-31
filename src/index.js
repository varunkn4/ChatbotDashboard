import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registry from 'app-registry';

import store from './store';
import App from './App';

import request from './services/request';
import storage from './services/storage';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
  
registry.register('request', request);
registry.register('storage', storage);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mekbotDashboards'));