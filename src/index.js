import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Rendu du composant App dans le conteneur racine.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
