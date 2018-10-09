const initState = {
    test: 'this is test'
};


export default (state = initState, action ) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
            };
        default:
            return state;
    }
}