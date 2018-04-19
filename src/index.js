import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { App } from './containers/app';

// Routes
// import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
