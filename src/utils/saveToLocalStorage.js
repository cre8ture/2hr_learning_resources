export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(e) {
        console.error('Save state to local storage failed: ', e);
    }
};


export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined; // No state in localStorage
        return JSON.parse(serializedState);
    } catch(e) {
        console.error('Load state from local storage failed: ', e);
        return undefined;
    }
};
