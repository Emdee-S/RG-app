import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+
import './index.css';  // Global styles
import './app.css';    // App-specific styles
import App from './app';  // Import your App component (app.jsx)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);