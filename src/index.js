import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './containers/Layout';


render((
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
), document.getElementById('root'));
