import React, { Fragment } from 'react'
import './SearchBarContainer.css'

const SearchBar = ({onChangeHandler,performSearch}) => {

    return (
        <Fragment>
            <input id="search_query" onChange={(e) => onChangeHandler(e.target.value)} type="text" name="query" placeholder="search for an anime, e.g Naruto" />
            <button onClick={() => performSearch()} id="search">Go</button>
        </Fragment>
    )
}
export default SearchBar;