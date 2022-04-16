import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import logo from '../logo.svg';
export const TopContent = () => {
  return (
    <div align='center' style={{ justifyContent:'center',       maxWidth: '488px' , }}>
        <Typography variant='h3'>
            Handsbags
            <MoreHorizIcon style={{padding:'5px' ,marginLeft:'5px'}} className='moreIcon'/>
        </Typography>
       <IconButton>
<img src={logo} alt='logo' width='30px' />
       </IconButton>
       <Typography variant='body1'>
           <strong> cabi Clothing</strong>
          ·The perfect handbags from totes, cross-body bags, satchels to clutches to complement your wardrobe (and beyond).
       </Typography>
     
       <Button sx={{color:'black',textTransform: 'none',fontWeight:'750'}}>34.56k followers</Button> 
       <br/>
    <Button className='moreIcon' sx={{ borderRadius: '24px', padding:'22px !important',fontWeight:'800'}} >Share</Button>
        </div>
  )
}
