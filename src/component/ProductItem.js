import { Grid, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProductHover } from './ProductHover';

export const ProductItem = ({ item,ind }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
      >
      
        <ImageListItem key={item.id}
         className='product-item-image' >
          <img style={{ borderRadius: '20px' }}
            src={`${item.image_url}`}//?w=248&fit=crop&auto=format`}
            srcSet={`${item.image_url}`}//?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
             loading="lazy"


          />
          
          {mouseHover ? <ProductHover item={item}/> : ""}
        </ImageListItem>
        <Typography sx={{padding:'10px'}}>{item.name}</Typography> 
      </div>
    </>

  )
}
