import { Box, Card, Grid, Typography, CardMedia, Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Product() {

    const [idProduct, setIdProduct] = useState()
    const [product, setProduct] = useState()
    const [imgIndex, setImgIndex] = useState(0)
    const router = useRouter()

    const goBack = () => {
        setImgIndex(oldIndex => (oldIndex > 0 ? oldIndex - 1 : oldIndex));
    };

    const goForward = () => {
        setImgIndex(oldIndex => (oldIndex >= product?.img?.length - 1 ? oldIndex : oldIndex + 1));
    };

    const fetchData = async () => {
        const queries = Number(router.query.id)
        const res = await axios.get('/api/dummyData')
        const garment = res?.data?.find(prod => prod.id === queries)
        setIdProduct(queries)
        setProduct(garment)
    }
    useEffect(() => {
        fetchData()
    }, [idProduct])


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ width: '80%', p: 6 }}>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={0.5} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Button onClick={goBack}>
                                    <ArrowBackIosIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={10}>
                                <Card sx={{ m: 2 }}>
                                    <CardMedia
                                        component="img"
                                        alt={product?.title}
                                        image={product?.img[imgIndex]?.img}
                                        title={product?.title}
                                        sx={{
                                            transition: 'transform 0.9s',
                                            '&:hover': {
                                                transform: 'scale(1.2)',
                                            },
                                        }}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={0.5} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Button onClick={goForward}>
                                    <ArrowForwardIosIcon />
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} sx={{ p: 2 }}>
                        <Typography sx={{ fontSize: 44 }}>{product?.description}{product?.description}</Typography>
                        <Typography sx={{ fontSize: 44 }}>{product?.title}</Typography>
                        <Typography sx={{ fontSize: 50, color: 'red' }}> $ {product?.price.toLocaleString('es-AR')}</Typography>
                        <Button variant="contained">Agregar al carrito</Button>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default Product