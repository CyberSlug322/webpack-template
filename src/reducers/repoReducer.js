const SET_COUNT = 'SET_COUNT'
const initialState = {
    items: [],
    isFetching: true,
    count: 0
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type:SET_COUNT, payload:count})