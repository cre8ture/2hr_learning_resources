// src/reducers/index.js
import { combineReducers } from 'redux';
import currentReducer from './currentReducer';
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
  current: currentReducer,
  archive: archiveReducer
});

export default rootReducer;

