import React, { memo } from 'react'
import './Cards.css'

// Individual card component  with image name and url ==>
const Card = ({url='',imageUrl='',name=''}) => {
    
    return (
            <div onClick ={(e)=>{e.stopPropagation();window.open(url,'_blank')}} className="card">
                        <div className="card__image">
                            <img style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/tenor.gif)`}} loading="lazy" src={imageUrl} alt={name} />
                        </div>
                        <div className="card__name">
                            <div><span>{name}</span></div> 
                        </div>
                    </div>
    )
}
export default memo(Card);