const numberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - action.val
        default:
            throw new Error()
    }
}
export default numberReducer;