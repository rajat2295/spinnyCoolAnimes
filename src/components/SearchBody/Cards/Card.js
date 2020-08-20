import React, { memo } from 'react'
import './Cards.css'

// Individual card component  with image name and url ==>
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
export default memo(Card);