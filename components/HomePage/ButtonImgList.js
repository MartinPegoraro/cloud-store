import { Button, Box, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import React from 'react'

const ButtonImgList = ({ item }) => {
    console.log(item.price);
    const router = useRouter()

    const handleOpen = (item) => {
        router.push({ pathname: `/textil-hugo/product/[id]`, query: { id: item.id } })
    }

    return (
        <Button key={item.id} onClick={() => handleOpen(item)}>
            {/* <ImageListItem sx={{ width: '100%', height: '100%' }}> */}
            <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                srcSet={`${item.miniature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.miniature}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.description}
                subtitle={<Box><Typography>{item.category}</Typography><Typography>$ {Number(item.price).toLocaleString('es-AR')}</Typography></Box>}
            />
            {/* </ImageListItem> */}
        </Button>
    )
}

export default ButtonImgList