import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoginProvider } from './LoginContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById('root')
);
