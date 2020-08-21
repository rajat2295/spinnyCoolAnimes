const initState = {
    page: 1,
}
// Root Reducer for the application ==>
const rootReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_SEARCH_RESULT_DATA':
            return { ...state, searchData: payload };
        case 'SET_SEARCH_DEBUG_DATA':
            return { ...state, debugData: payload };
        case 'SET_SEARCH_PAGE':
            return { ...state, page: payload };
        case 'SET_SEARCH_QUERY':
            return { ...state, query: payload };
        case 'TOGGLE_PAGINATION':
            return { ...state, disablePagination: payload };
        default:
            return state;
    }
}
export default rootReducer