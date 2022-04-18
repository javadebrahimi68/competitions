import React from 'react'
import './man.css'
export const Masonry = ({ item, ind }) => {

    const itemCss = {
        gridRow: '2/5'
    }
    return (

        <div className={`item-${ind}`} >
        < img  src = { item.image_url } alt = "" />
            </div >
        
        
    )
}
