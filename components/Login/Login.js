import React, { useState } from 'react'
import { Grid, Box, Button } from '@mui/material';
import style from './Login.module.css'
import ModalLogin from './ModalLogin';
function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalLogin handleClose={handleClose}
                open={open}
            />
            <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" sx={{ m: 2 }} onClick={() => handleOpen()}>login</Button>
            </Box>
            <Grid container>
                <Grid item xs={4} sx={{ lineHeight: 3.5, p: 2 }}>
                    <p>
                        ¿Qué es Lorem Ipsum?
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Grid item xs={6} sx={{ height: '50vh', p: 1 }}>
                            <img
                                className={style.imgLogin}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5cTs9sAes73wjQLQthh8fTI4nTIOtdXPUw&usqp=CAU'
                                alt='img'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ height: '50vh', p: 1 }}>
                            <img
                                className={style.imgLogin}
                                src='https://cdn1.hendyla.com/archivos/imagenes/2015/10/12/publicacion-grupo-1503112696631497_1779541642321933-0-792b8e2d30d37f582439f0b29ed76394-830_A.jpg'
                                alt='img'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ height: '50vh', p: 1 }}>
                            <img
                                className={style.imgLogin}
                                src='https://www.digitalsport.com.ar/files/products/594d6b7eb853a-435243-500x500.jpg'
                                alt='img'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ height: '50vh', p: 1 }}>
                            <img
                                className={style.imgLogin}
                                src='https://http2.mlstatic.com/D_NQ_NP_724050-MLA42682514389_072020-V.jpg'
                                alt='img'
                            />
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default Login