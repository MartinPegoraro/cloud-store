import React, { useState } from 'react'
import {
    verifyShoppingCart,
    productsShoppingCart,
    toggleShoppingCartAddProduct,
    toggleShoppingCartDeleteProduct
} from '../Redux/ShoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    Button,
    Tooltip,
    TextField
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const [quantity, setQuantity] = useState('');

    const handleQuantityChange = (event) => {
        console.log(event.target.value);
        setQuantity(event.target.value);
    };

    const dispatch = useDispatch()
    const productCart = useSelector(productsShoppingCart)
    const verifyCart = useSelector(verifyShoppingCart)
    const totalPrice = productCart.reduce((total, product) => total + product.price, 0);
    const handleDelete = (product) => {
        dispatch(toggleShoppingCartDeleteProduct({ id: product.id }))
        console.log(productCart.length);
        if (productCart.length === 0) {
            console.log('asgdfgh');
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ width: '80%', p: 6 }}>
                    <Grid item xs={7} sx={{ p: 1, }}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}> TEXTIL HUGO    ///    CARRO DE COMPRAS</Typography>
                        <hr />
                        {
                            verifyCart ?
                                productCart.map((product) => {
                                    return (
                                        <>
                                            <Grid container key={product?.id} sx={{ border: '1px solid black', borderRadius: 2, mt: 1 }}>
                                                <Grid item xs={3} >
                                                    <Card sx={{ m: 2, }}>
                                                        <CardMedia
                                                            component="img"
                                                            alt={product?.description}
                                                            image={product?.miniature}
                                                            title={product?.price}
                                                            sx={{ width: '100%', height: '100%' }}
                                                        />
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={8} sx={{ mt: 2 }}>
                                                    <Typography>descripcion: {product.description}</Typography>
                                                    <Typography> precio : ${product.price}</Typography>
                                                    <Typography>id: {product.id}</Typography>
                                                    <TextField
                                                        id="standard-number"
                                                        label="Cantidad"
                                                        type="number"
                                                        size='small'
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="filled"
                                                        sx={{ mb: 1 }}
                                                        value={quantity}
                                                        onChange={handleQuantityChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={1} sx={{ mt: 2 }}>
                                                    <Tooltip title="Eliminar">
                                                        <DeleteIcon onClick={() => handleDelete(product)} sx={{ cursor: 'pointer' }} />
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>
                                        </>

                                    )
                                })
                                :
                                <Typography>No hay productos en el carrito de compras</Typography>
                        }
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4}>
                        <Box sx={{ p: 1, border: '1px solid black', borderRadius: 2 }}>
                            <Typography>Resumen de compra</Typography>
                            <hr />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Producto/s ({productCart.length})</Typography>
                                <Typography> $ {totalPrice.toLocaleString('es-AR')}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Envios</Typography>
                                <Typography> $ 15.000</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Total:</Typography>
                                <Typography> $ {(totalPrice + 15000).toLocaleString('es-AR')}</Typography>
                            </Box>
                            <br />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <Button variant='contained' sx={{ width: '80%', }}>continuar compra</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
