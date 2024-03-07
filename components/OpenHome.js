import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Router, useRouter } from 'next/router';

export default function OpenHome() {
    const router = useRouter()
    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
                <img
                    srcSet={`https://www.ikea.com/images/a6/e4/a6e45cc7c0eac8506f94d9f89227f029.jpg?f=xxxl`}
                    src={`https://www.ikea.com/images/a6/e4/a6e45cc7c0eac8506f94d9f89227f029.jpg?f=xxxl`}
                    alt='img'
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 1 }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 2,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <Box sx={{
                        border: '3px solid black',
                        height: '70%',
                        width: '70%',
                        maxWidth: '80vw',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.7)',
                    }}>
                        <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', width: '100%' }}>La mejor tienda de todos los</Typography>
                        <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', width: '100%' }}>La mejor tienda de todos los</Typography>
                        <Button variant='contained' sx={{ alignSelf: 'center', width: '30%' }} onClick={() => { router.push('/textil-hugo') }}>ver los productos</Button>

                    </Box>
                </Box>
            </Box>
        </>
    );
}