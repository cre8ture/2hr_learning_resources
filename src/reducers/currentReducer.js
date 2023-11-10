// src/reducers/currentReducer.js

let initialCurrentState = []
const currentReducer = (state = initialCurrentState, action) => {
    switch (action.type) {
      case 'ADD_TO_CURRENT':
        return [...state, action.payload];
      case 'REMOVE_FROM_CURRENT':
        return state.filter(item =>{
            return item.link !== action.payload.link});
      case 'UPDATE_CURRENT':
        return state.map(item => item.link === action.payload.link ? action.payload : item);
      default:
        return state;
    }
  };
  
  export default currentReducer;