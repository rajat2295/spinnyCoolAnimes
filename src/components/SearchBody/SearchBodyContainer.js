import React, { Fragment } from 'react'
import CardContainer from './Cards/CardContainer'
import './SearchBodyContainer.css'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Genric/Button/Button'
import { setPageNo, getSearchData } from '../../actions/actions'
const SearchBodyContainer = () => {
    const dispatch = useDispatch();
    const cardList = useSelector(state => state.searchData);
    const { last_page = '',url } = useSelector(state => state.debugData ? state.debugData : {});
    const page = useSelector(state => state.page?state.page:1);
    const addMoreCards = () => {
        if (page !== last_page)
            dispatch(setPageNo(Number(page) + 1))
            dispatch(getSearchData({oldUrl:url}))

    }
    return (
        <Fragment>
            {cardList && cardList.length > 0 &&
                <Fragment><div className='cards'>
                    <CardContainer cardList={cardList} />
                </div>
                   {page !== last_page &&  <Button onClickHandler={addMoreCards} customClass={'transWhite'} label='View More' />
}
                </Fragment>
            }
        </Fragment>
    )
}
export default SearchBodyContainer;