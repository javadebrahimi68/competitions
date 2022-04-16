import { Button, Grid, IconButton, Stack } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NorthEastIcon from '@mui/icons-material/NorthEast';
export const ProductHover = ({ title = 'Cat' }) => {
    const bs = {textTransform:'none', margin: '10px',padding:'3px !important', color: 'black', backgroundColor: 'white', fontWeight: '700', borderRadius: '30px' };
    return (
        <Stack direction='column' width='235px' sx={{opacity:'0.3', backgroundColor: 'gray', height: '300px', justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <Button sx={{ margin: '10px', color: 'white', fontWeight: '700', justifyContent: 'space-between', alignItems: 'center' }}>{title}<KeyboardArrowDownIcon /></Button>
                <Button variant='contained' color='error' sx={{ margin: '10px', borderRadius: '20px !important', textTransform: 'none' }}>Save</Button>
            </Stack>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <Button startIcon={<NorthEastIcon />} sx={bs} >
                 
                    {title}</Button>
                <Stack direction='row' >
                    <IconButton sx={bs}><FileUploadIcon /></IconButton>
                    <IconButton sx={bs}><FileUploadIcon /></IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
