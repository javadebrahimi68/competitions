import { Grid, ImageListItem } from '@mui/material'
import React from 'react'

export const ProductItem = ({ item }) => {
  //console.log(item.image_url);
  return (

    <ImageListItem key={item.image_url} sx={{ boxShadow: 8 }} className='product-item-image' >
      <img style={{borderRadius:'20px'}}
        src={`${item.image_url}?w=248&fit=crop&auto=format`}
        srcSet={`${item.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
    </ImageListItem>

  )
}
