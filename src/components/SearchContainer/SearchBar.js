import React, { Fragment } from 'react'
import './SearchBarContainer.css'
import Button from '../Genric/Button/Button';

// SearchBar Component with input and reused SearchButton component ==>
const SearchBar = ({onChangeHandler,performSearch}) => {

    return (
        <Fragment>
            <input id="search_query" onChange={(e) => onChangeHandler(e.target.value)} type="text" name="query" placeholder="search for an anime, e.g Naruto" />
            <Button onClickHandler={performSearch()} customClass={'searchButton'} label="Go"/>
        </Fragment>
    )
}
export default SearchBar;