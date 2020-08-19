import React from 'react'
import './AnimeSearchContainer.css'
import SearchBarContainer from '../SearchContainer/SearchBarContainer'
import SearchBodyContainer from '../SearchBody/SearchBodyContainer'

const AnimeSearchContainer = () => {

    return (
        <div className='container'>
            <div className='searchBar'>
                <SearchBarContainer />
                <SearchBodyContainer />

            </div>
        </div>
    )
}
export default AnimeSearchContainer;