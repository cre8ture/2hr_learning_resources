import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Make sure the store is configured with persisted state
import {saveToLocalStorage} from './utils/saveToLocalStorage';
import App from './App';

// // Function to save state to localStorage
// const saveToLocalStorage = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('state', serializedState);
//     } catch(e) {
//         console.error('Save state to local storage failed: ', e);
//     }
// };

// Subscribe to store updates
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

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
