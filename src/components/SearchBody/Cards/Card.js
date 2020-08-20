import React, { memo } from 'react'
import './Cards.css'

// Individual card component  with image name and url ==>
const Card = ({url='',imageUrl='',name=''}) => {
    
    return (
            <div href={url} className="card">
                        <div className="card__image">
                            <img loading="lazy" src={imageUrl} alt={name} />
                        </div>
                        <div className="card__name">
                            <div><span>{name}</span></div> 
                        </div>
                    </div>
    )
}
export default memo(Card);