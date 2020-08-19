import React, { useState } from 'react'
import './SearchBarContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../../actions/actions';
import DebugInfo from './DebugInfo/DebugInfo';
import SearchBar from './SearchBar';



const SearchBarContainer = () => {
    const dispatch = useDispatch();
    const {
        debugData={},
    } = useSelector(state=>state);
    const [queryString, setQueryString] = useState('');

    const onChangeHandler = (value) => {

        setQueryString(value)
    }

    const performSearch = () => {
        dispatch(getSearchData({query:queryString}))
    }

    return (
        <div className='search'>
            <SearchBar onChangeHandler ={onChangeHandler} performSearch ={performSearch} />
            {Object.keys(debugData).length >0 && 
                <DebugInfo data={debugData} />
            }

        </div>
    )
}
export default SearchBarContainer;