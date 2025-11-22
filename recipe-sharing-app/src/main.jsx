import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This is MANDATORY for React Router checks to pass */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);