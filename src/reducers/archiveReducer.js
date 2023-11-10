// src/reducers/archiveReducer.js
const initialArchiveState = []; // Define the initial state

const archiveReducer = (state = initialArchiveState, action) => {
    console.log("state", state, "action", action)

    switch (action.type) {
        case 'ADD_TO_ARCHIVE':
            return [...state, action.payload];
        case 'REMOVE_FROM_ARCHIVE':
            return state.filter(item => item.link !== action.payload.link);
        case 'UPDATE_ARCHIVE':
            return state.map(item => item.link === action.payload.link ? action.payload : item);

        default:
            return state;
    }
};

export default archiveReducer;
