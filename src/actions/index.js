// src/actions/index.js
export const addToCurrent = (item) => ({
    type: 'ADD_TO_CURRENT',
    payload: item
  });
  
//   export const removeFromCurrent = (name) => ({
//     type: 'REMOVE_FROM_CURRENT',
//     payload: { name }
//   });
export const removeFromCurrent = (link) => {
    console.log("REMOVE ACTION", link)
    return ({
    type: 'REMOVE_FROM_CURRENT',
    payload: { link } // Changed from name to link
})};


  
  export const addToArchive = (item) => ({
    type: 'ADD_TO_ARCHIVE',
    payload: item
  });
  
//   export const removeFromArchive = (name) => ({
//     type: 'REMOVE_FROM_ARCHIVE',
//     payload: { name }
//   });
  

export const removeFromArchive = (link) => ({
    type: 'REMOVE_FROM_ARCHIVE',
    payload: { link } // Changed from name to link
});

  export const updateCurrent = (item) => ({
    type: 'UPDATE_CURRENT',
    payload: item
});

export const updateArchive = (item) => ({
    type: 'UPDATE_ARCHIVE',
    payload: item
});
