import React, { useState } from 'react'
import { Grid, Box, Button, ImageList, ImageListItem } from '@mui/material';
import style from './Login.module.css'
import ModalLogin from './ModalLogin';
import images from './img'
import ModalRegistration from './ModalRegistration';
import { Router, useRouter } from 'next/router';
function Login() {
    const [open, setOpen] = useState(false);
    const [openRegistration, setOpenRegistration] = useState(false);

    const router = useRouter()

    const handleOpenRegistration = () => {
        console.log('asdasd');
        setOpenRegistration(true);
    }
    const handleCloseRegistration = () => setOpenRegistration(false);

    const handleOpen = () => {
        router.push('/textil-hugo')
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalLogin handleClose={handleClose}
                open={open}
            />
            <ModalRegistration handleClose={handleCloseRegistration}
                open={openRegistration} />
            <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" sx={{ m: 2 }} onClick={() => handleOpenRegistration()}>Registration</Button>

                <Button variant="contained" sx={{ m: 2 }} onClick={() => handleOpen()}>login</Button>
            </Box>
            <Grid container className={style.gridContainer}>
                <Grid item xs={4} sx={{ lineHeight: 3.5, p: 2 }}>
                    <p>
                        ¿Qué es Lorem Ipsum?
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </Grid>
                <Grid item xs={8}>
                    <Grid container >

                        <ImageList sx={{ width: '99%', height: '99%' }} variant="woven" cols={3} gap={8}>
                            {images.map((item) => (
                                <ImageListItem key={item.url}>
                                    <img
                                        srcSet={`${item.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.url}?w=161&fit=crop&auto=format`}
                                        alt='img'
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default Login