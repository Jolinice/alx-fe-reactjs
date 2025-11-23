import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// MUST be imported
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* MUST wrap App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);