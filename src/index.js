// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Find the root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the app on the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
