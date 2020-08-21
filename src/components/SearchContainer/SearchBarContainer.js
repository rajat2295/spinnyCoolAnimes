import React, { useState } from 'react'
import './SearchBarContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../../actions/actions';
import DebugInfo from './DebugInfo/DebugInfo';
import SearchBar from './SearchBar';


// Search Bar Container Containg input field and debug info ==>

const SearchBarContainer = () => {

    const disableButton = useSelector (state=>state.disablePagination?state.disablePagination:false)
    const dispatch = useDispatch();
    // get debug dtata from store ===> 
    const {
        debugData={},
    } = useSelector(state=>state);

    const [queryString, setQueryString] = useState('');

    const onChangeHandler = (value) => {

        // set the state of user input==>
        setQueryString(value)
    }

    const performSearch = () => {

        // hit search API with user input ==>
        dispatch(getSearchData({query:queryString}))
    }
    // Debug info appears only when the API provides it ==>
    return (
        <div className='search'>
            <SearchBar disabled={disableButton} onChangeHandler ={onChangeHandler} performSearch ={performSearch} />
            {Object.keys(debugData).length >0 && 
                <DebugInfo data={debugData} />
            }

        </div>
    )
}
export default SearchBarContainer;