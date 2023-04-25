const productsReducer = (state, action) => {

    if (action.type === 'FETCH') {
        return [...state, ...action.payload]
    }

    if (action.type === 'ADD') {
        return [...state, action.payload]
    }

    if (action.type === 'UPDATE') {
        const index = state.findIndex(p => p.id === action.payload.id);
        let arr = [...state]
        arr[index] = action.payload;
        return arr;
    }

    if (action.type === 'DELETE') {
        const index = state.findIndex(p => p.id === action.payload);
        let arr = [...state]
        arr.splice(index, 1);
        return arr;
    }

    return state
}

export default productsReducer;

const addProduct = data => ({ type: 'ADD', payload: data })
export { addProduct }