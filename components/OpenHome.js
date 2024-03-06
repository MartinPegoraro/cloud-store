import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

export default function OpenHome() {
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
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                    <Typography variant="h3">La mejor tienda de todos los</Typography>
                </Box>
            </Box>
        </>
    );
}