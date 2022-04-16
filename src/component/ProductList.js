import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { ProductItem } from './ProductItem'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useWindowDimensions from './dimentions'
export const ProductList = ({ data }) => {
   
    
    const {width,cols}=useWindowDimensions();
  
    const getCols=()=>{
       
        return Math.floor(width/235);
        
    }

    console.log(width);
    return (
      
        <Box 
        ml={10} mr={10}
        sx={{ 
            // width: 500, height: 450, 
        // overflowY: 'scroll' 
        
        }}>
            <ImageList variant="masonry" 
            cols={cols }
            gap={8}
            >
                {data.map((item) => (
                  <ProductItem item={item}/>
                ))}
            </ImageList>
        </Box>
    )
}
