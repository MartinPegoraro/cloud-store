import { Button, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import React from 'react'

const ButtonImgList = ({ item }) => {
    const router = useRouter()

    const handleOpen = (item) => {
        router.push({ pathname: `/textil-hugo/product/[id]`, query: { id: item.id } })
    }

    return (
        <Button key={item.id} onClick={() => handleOpen(item)} >
            <ImageListItem sx={{ width: '100%', height: '100%' }}>
                <img
                    srcSet={`${item.miniature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.miniature}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.description}
                    subtitle={<Typography>$ {item.price}</Typography>}

                />
            </ImageListItem>
        </Button>
    )
}

export default ButtonImgList