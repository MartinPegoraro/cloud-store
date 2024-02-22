import {
    Box,
    Card,
    Grid,
    Typography,
    CardMedia,
    Button,
    Alert
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { toggleVerifyShoppingCart, toggleShoppingCart, productsShoppingCart } from '../Redux/ShoppingCart';
function Product() {

    const [idProduct, setIdProduct] = useState()
    const [product, setProduct] = useState()
    const [imgIndex, setImgIndex] = useState(0)
    const [alertAddCart, setAlertAddCart] = useState(false)
    const router = useRouter()
    const productsRedux = useSelector(productsShoppingCart);
    const dispatch = useDispatch();

    const goBack = () => {
        setImgIndex(oldIndex => (oldIndex > 0 ? oldIndex - 1 : oldIndex));
    };

    const goForward = () => {
        setImgIndex(oldIndex => (oldIndex >= product?.img?.length - 1 ? oldIndex : oldIndex + 1));
    };

    const handleAddCart = (product) => {
        console.log(product.miniature);
        dispatch(toggleShoppingCart({ products: { price: product?.price, description: product?.description, miniature: product?.miniature, id: product.id } }))
        dispatch(toggleVerifyShoppingCart({ isTrue: true }))
        setAlertAddCart(true)
        setTimeout(() => {
            setAlertAddCart(false)
        }, 3000);
    }

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
                        <Button variant="contained" sx={{ m: 1, width: '50%' }}>Comprar ahora</Button>
                        <br />
                        <Button variant="contained" sx={{ m: 1, width: '50%' }} onClick={() => handleAddCart(product)}>Agregar al carrito</Button>
                        {
                            alertAddCart &&
                            <Alert sx={{ p: 0, ml: 1, width: '50%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography fontSize={'small'} sx={{ textAlign: 'center' }}>Se agrego correctamente</Typography>
                            </Alert>
                        }
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default Product