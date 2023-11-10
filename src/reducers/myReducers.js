// src/reducers/myReducer.js
const initialState = {
    // Your initial state
    "key": "value"
  };
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MY_ACTION_TYPE':
        return {
          ...state,
          // Update state
        };
      default:
        return state;
    }
  };
  
  export default myReducer;
  