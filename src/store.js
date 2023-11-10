// src/store.js
import { createStore } from 'redux';
import { loadFromLocalStorage } from './utils/saveToLocalStorage';  
// Your root reducer
import rootReducer from './reducers';

const persistedState = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    persistedState,
    // Apply any middleware or enhancers here
);

export default store;
