import { fetchSearchData } from "../utilities/api/getListingApi";

// get Search Data from api using query or existing url ==>

export const getSearchData = ({ query, oldUrl }) => async (dispatch, getState) => {
    let url = ''
    let page=1
    if (oldUrl) {
        url = oldUrl
        try {
            dispatch(disablePagination(true));
            console.log(getState())
            const oldQuery = getState().query
            page  = getState().page;
            page = page + 1;
            url = `https://api.jikan.moe/v3/search/anime?q=${oldQuery}&limit=16&page=${page}`;
            const oldData = getState().searchData;
            const searchData = await fetchSearchData(url)
            const consolidatedData = oldData.concat(searchData.results)
            dispatch(setSearchData(consolidatedData));
            dispatch(setPageNo(page));
            dispatch(disablePagination(false));
    
        } catch (e) {
            console.log('error')
        }
    } else {
        url = `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`;
        try {
            dispatch(setDebugData({url:'fetching...'}));
            dispatch(setSearchData([]));
            dispatch(disablePagination(true));
            const searchData = await fetchSearchData(url, query, page)
            const debugInfo = { ...searchData };
            delete debugInfo.results;
            debugInfo.url = url;
            dispatch(disablePagination(false));
            dispatch(setSearchData(searchData.results));
            dispatch(setDebugData(debugInfo));
            dispatch(setSearchQuery(query));
        } catch (e) {
            console.log('error')
        }
    }
}

// Action dispatcher for setting search result data =>
export const setSearchData = data => ({
    type: 'SET_SEARCH_RESULT_DATA',
    payload: [...data]
});

// Action dispatcher for setting search Debug data =>
export const setDebugData = data => ({
    type: 'SET_SEARCH_DEBUG_DATA',
    payload: { ...data }
});

// Action dispatcher for setting search Query=>
export const setSearchQuery = data => ({
    type: 'SET_SEARCH_QUERY',
    payload: data
});

// Action dispatcher for disabling Pagination Button =>
export const disablePagination = data => ({
    type: 'TOGGLE_PAGINATION',
    payload: data
});

// Action dispatcher for setting current page Number data =>
export const setPageNo = data => ({
    type: 'SET_SEARCH_PAGE',
    payload:data
});