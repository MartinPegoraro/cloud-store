import React, { useEffect, useState } from 'react'
import {
    Grid,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Typography
} from '@mui/material'
import MenuHomeAdmin from './MenuHomeAdmin';
import DeleteIcon from '@mui/icons-material/Delete';
import { productApi } from '@/pages/api/allApi';

function HomeAdmin() {
    const [product, setProduct] = useState()
    const [deleteProduct, setDeleteProduct] = useState(false)

    const handleDeleteProduct = async (id) => {
        const deleteProduct = await productApi.deleteProduct(id)
        console.log(deleteProduct);
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
                <Grid item xs={3}>
                    <MenuHomeAdmin
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                    />
                </Grid>
                <Grid item xs={9}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {product?.map((prod) => (
                            <>
                                {deleteProduct ?
                                    <Grid container >
                                        <Grid item xs={0.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <DeleteIcon onClick={() => handleDeleteProduct(prod.id)} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <ListItemButton key={prod.id}>
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
                                                    primary={`descripción: ${prod?.description} descripción: ${prod?.description}`}
                                                    secondary={prod?.product_upload_date}
                                                />
                                            </ListItemButton>
                                        </Grid>
                                    </Grid>
                                    :
                                    <ListItemButton key={prod.id}>
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
                                            primary={`descripción: ${prod?.description} descripción: ${prod?.description}`}
                                            secondary={prod?.product_upload_date}
                                        />
                                    </ListItemButton>
                                }
                            </>

                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}

export default HomeAdmin