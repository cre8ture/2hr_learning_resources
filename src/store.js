// src/store.js
import { createStore } from 'redux';

// Your root reducer
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
