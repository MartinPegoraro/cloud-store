import React, { useEffect, useState } from 'react'
import {
    Grid,
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Card,
    CardMedia,
    Button,
    Typography
} from '@mui/material'
import MenuHomeAdmin from './MenuHomeAdmin';
import DeleteIcon from '@mui/icons-material/Delete';
import { productApi } from '@/pages/api/allApi';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';

function HomeAdmin() {
    const [product, setProduct] = useState()
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [modifyProduct, setModifyProduct] = useState(false)

    const [selectOneProduct, setSelectOneProduct] = useState(false)
    const [oneProduct, setOneProduct] = useState()

    const handleDeleteProduct = async (id) => {
        const deleteProduct = await productApi.deleteProduct(id)
        if (deleteProduct?.status === 200) {
            // console.log('se borro');
            fetchData()
        } else {
            // console.log('No se pudo borrar correctamente');
        }
    }

    const handleModifyProduct = async (prod) => {
        setSelectOneProduct(true)
        setOneProduct(prod);

    }
    const handleChangeData = (garment) => {
        setSelectOneProduct(true)
        setOneProduct(garment);
    }

    const fetchData = async () => {
        const result = await productApi.getAllProduct()
        setProduct(result?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Grid container>
                <Grid item xs={3} >
                    <MenuHomeAdmin
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                        modifyProduct={modifyProduct}
                        setModifyProduct={setModifyProduct}
                        fetchData={fetchData}
                        setSelectOneProduct={setSelectOneProduct}
                        selectOneProduct={selectOneProduct}
                    />
                </Grid>
                <Grid item xs={9} >
                    {
                        selectOneProduct ?
                            <Grid container>
                                <Grid item xs={4}>
                                    <Card sx={{ m: 2 }}>
                                        <CardMedia
                                            component="img"
                                            alt={oneProduct?.title}
                                            image={oneProduct?.img}
                                            title={oneProduct?.description}
                                            sx={{
                                                transition: 'transform 0.9s',
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                            }}
                                        />
                                    </Card>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontSize: 44 }}>{oneProduct?.name} {oneProduct?.description} {oneProduct?.category}</Typography>
                                    <Typography sx={{ fontSize: 44 }}>{oneProduct?.material}</Typography>

                                    <Typography sx={{ fontSize: 50, color: 'red' }}> $ {Number(oneProduct?.price)?.toLocaleString('es-AR')}</Typography>
                                    <Button variant="contained" sx={{ m: 1, width: '50%' }}>Modificar Producto</Button>
                                    <br />
                                    <Button variant="contained" sx={{ m: 1, width: '50%' }}>Agregar Talles y color al Producto</Button>
                                    <Button variant="contained" sx={{ m: 1, width: '50%' }}>Eliminar el Producto</Button>
                                </Grid>
                            </Grid>
                            :
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {product?.map((prod) => (
                                    <>
                                        <Grid container sx={{ borderTop: '0.5px solid rgba(0, 0, 0, 0.1)', borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)' }}>
                                            {deleteProduct ?
                                                <Grid item xs={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', '&:hover': { backgroundColor: 'rgb(245, 245, 245)', borderRadius: '100%' } }}>
                                                    <DeleteIcon sx={{ color: 'red' }} onClick={() => handleDeleteProduct(prod.id)} />
                                                </Grid>
                                                : modifyProduct ?
                                                    <Grid item xs={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', '&:hover': { backgroundColor: 'rgb(245, 245, 245)', borderRadius: '100%' } }}>
                                                        <AutoFixNormalIcon sx={{ color: 'blue' }} onClick={() => handleModifyProduct(prod)} />
                                                    </Grid>
                                                    : null
                                            }
                                            <Grid item xs={11} >
                                                <ListItemButton key={prod.id} onClick={() => handleChangeData(prod)} sx={{ borderTop: '0.5px solid rgba(0, 0, 0, 0.1)', borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)' }}>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <img
                                                                srcSet={`${prod?.miniature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                                src={`${prod?.miniature}?w=248&fit=crop&auto=format`}
                                                                alt={prod?.title}
                                                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                                loading="lazy"
                                                            />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={`descripción: ${prod?.description} ||  categoria: ${prod?.category} || material: ${prod?.material}`}
                                                        secondary={`precio: ${prod?.price} || cargado el: ${prod?.product_upload_date?.slice(0, 10)}`}
                                                    />
                                                </ListItemButton>
                                            </Grid>
                                        </Grid>

                                    </>

                                ))}
                            </List>
                    }
                </Grid>
            </Grid >
        </>
    )
}

export default HomeAdmin