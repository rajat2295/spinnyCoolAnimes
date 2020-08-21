import React, { Fragment } from 'react'
import './SearchBarContainer.css'
import Button from '../Genric/Button/Button';

// SearchBar Component with input and reused SearchButton component ==>
const SearchBar = ({disabled,onChangeHandler,performSearch}) => {

    return (
        <Fragment>
            <form autoComplete="off" onSubmit={(e)=>{e.preventDefault();performSearch()}} >
            <input id="search_query" spellCheck="false" onChange={(e) => onChangeHandler(e.target.value)} type="text" name="query" placeholder="search for an anime, e.g Naruto" />
            <Button disabled={disabled} onClickHandler={()=>null} customClass={'searchButton'} label="Go"/>
            </form>
        </Fragment>
    )
}
export default SearchBar;