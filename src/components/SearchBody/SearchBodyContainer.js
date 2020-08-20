import React, { Fragment } from 'react'
import CardContainer from './Cards/CardContainer'
import './SearchBodyContainer.css'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Genric/Button/Button'
import { setPageNo, getSearchData } from '../../actions/actions'

// Body container Component =>
const SearchBodyContainer = () => {

    const dispatch = useDispatch();
    const cardList = useSelector(state => state.searchData);

    // get last Page of search and url from the store ==>
    const { last_page = '', url } = useSelector(state => state.debugData ? state.debugData : {});
    const page = useSelector(state => state.page ? state.page : 1);

    // function to add more cards on clicking view more if not the last page ===>
    const addMoreCards = () => {
        if (page !== last_page)
            dispatch(setPageNo(Number(page) + 1))
        dispatch(getSearchData({ oldUrl: url }))

    }
    return (
        <Fragment>
            {cardList && cardList.length > 0 &&
                <Fragment><div className='cards'>
                    <CardContainer cardList={cardList} />
                </div>

                {/* show view more button only when not the last page of the list ==> */}
                    {page !== last_page && <Button onClickHandler={addMoreCards} customClass={'transWhite'} label='View More' />
                    }
                </Fragment>
            }
        </Fragment>
    )
}
export default SearchBodyContainer;