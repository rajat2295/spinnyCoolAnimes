import React from 'react'
import './Cards.css'
import Card from './Card'
const CardContainer = ({cardList=[]}) => {
    return (
        <div className="cards" >
            
            {cardList.map(card=>(
                <Card url={card.url} imageUrl={card.image_url} name={card.title} />
            ))
}
    </div>
    )
}
export default CardContainer;