const numReducer = (state, action) => {

    if (action.type === 'PLUS') {
        if (state >= 35) {
            return state
        }
        return state + 1;
    }

    if (action.type === 'MINUS') {
        if (state === 1) {
            return state
        }
        return state - 1;
    }

    if (action.type === 'RESET') {
        return 0;
    }

    return state;
}
export default numReducer;
