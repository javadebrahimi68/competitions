import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NorthEastIcon from '@mui/icons-material/NorthEast';
export const ProductHover = ({ item }) => {
    const bs = { textTransform: 'none', margin: '10px', padding: '3px !important', color: 'black', backgroundColor: 'white', fontWeight: '700', borderRadius: '30px' };
    return (
        <Stack direction='column' width='100%'
            sx={{
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '0px',
                // opacity: '0.3',
                backgroundColor: '#00000075',
                height: '100%',
                justifyContent: 'space-between', alignItems: 'center'
            }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <Button sx={{ margin: '10px', color: 'white', fontWeight: '700', justifyContent: 'space-between', alignItems: 'center' }}><KeyboardArrowDownIcon /></Button>
                <Button variant='contained' color='error' sx={{ margin: '10px', borderRadius: '20px !important', textTransform: 'none' }}>Save</Button>
            </Stack>
            <Stack><Button variant='contained' color='success'> {item.price}</Button></Stack>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <a  href={item.url} style={{ textDecoration: 'none' }} >
                <Button variant='contained' color='error' sx={{ margin: '10px', borderRadius: '20px !important',
                 textTransform: 'none' }}>Details</Button>
</a>
                <Stack direction='row' >
                    {/* <IconButton sx={bs}><FileUploadIcon /></IconButton>
                    <IconButton sx={bs}><FileUploadIcon /></IconButton> */}
                </Stack>
            </Stack>
        </Stack>
    )
}
