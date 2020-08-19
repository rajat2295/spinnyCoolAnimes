import React from 'react'
import './Cards.css'

const Card = ({url='',imageUrl='',name=''}) => {
    
    return (
            <div href={url} class="card">
                        <div class="card__image">
                            <img loading="lazy" src={imageUrl} alt={name} />
                        </div>
                        <div class="card__name">
                            <div><span>{name}</span></div> 
                        </div>
                    </div>
    )
}
export default Card;