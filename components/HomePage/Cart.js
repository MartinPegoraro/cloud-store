import React from 'react'
import { verifyShoppingCart, productsShoppingCart, toggleShoppingCart } from '../Redux/ShoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia
} from '@mui/material'

export default function Cart() {

    const dispatch = useDispatch()
    const productCart = useSelector(productsShoppingCart)
    const verifyCart = useSelector(verifyShoppingCart)

    console.log(verifyCart);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ width: '80%', p: 6 }}>
                    <Grid item xs={7} sx={{ p: 1, border: '1px solid black', borderRadius: 5 }}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}> TEXTIL HUGO    ///    CARRO DE COMPRAS</Typography>
                        <hr />
                        {
                            verifyCart ?
                                productCart.map((product) => {
                                    return (
                                        <Grid container key={product?.id}>
                                            <Grid item xs={3}>
                                                <Card sx={{ m: 2 }}>
                                                    <CardMedia
                                                        component="img"
                                                        alt={product?.description}
                                                        image={product?.miniature}
                                                        title={product?.price}
                                                        sx={{ width: '100%', height: '100%' }}
                                                    />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography>sdgsdfhdfgj</Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                                :
                                <Typography>No hay productos en el carrito de compras</Typography>
                        }
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                        <Typography>aca va la informacion del monto total de los productos junto con el envio</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
