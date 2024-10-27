import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom';

// Crear el punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

