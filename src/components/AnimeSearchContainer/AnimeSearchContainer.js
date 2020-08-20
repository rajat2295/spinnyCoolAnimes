import React from 'react'
import './AnimeSearchContainer.css'
import SearchBarContainer from '../SearchContainer/SearchBarContainer'
import SearchBodyContainer from '../SearchBody/SearchBodyContainer'

// Container component that containes Search bar and Body==>

// kept body container within searchBar calls so that it stays intct in that width==>

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