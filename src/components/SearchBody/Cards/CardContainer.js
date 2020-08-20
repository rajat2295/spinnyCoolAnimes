import React, { memo } from 'react'
import './Cards.css'
import Card from './Card'

// Component containing all the cards==>
const CardContainer = ({cardList=[]}) => {
    return (
        <div className="cards" >
            
            {/* iterating the reult list and rendering them into individual cards ==> */}
            {cardList.map(card=>(
                <Card url={card.url} imageUrl={card.image_url} name={card.title} />
            ))
}
    </div>
    )
}
export default memo(CardContainer);