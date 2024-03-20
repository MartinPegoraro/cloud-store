import React, { useState } from 'react'
import { Typography, Box, Modal, TextField, Button } from '@mui/material';
import style from './AdminPage.module.css'
import { useRouter } from 'next/router'

const ModalCreateProduct = ({ open, handleClose, image }) => {
    const [form, setForm] = useState({ email: '', password: '' })
    const [state, setState] = useState(false)
    const router = useRouter()

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={style.loginModalContainer}
            >
                <Box
                    className={style.loginModalCard}
                >
                    <Box>
                        <Typography variant='h6' sx={{ mb: 1, width: '70%', display: 'inline-block', color: 'black' }} >Cargar un nuevo producto</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Nombre del producto</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Marca</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Descripcion</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Categoria</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Genero</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Temporada</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Material</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >precio</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Imagenes</Typography>
                        <TextField
                            // onChange={onInputChange}
                            // value={form.email}
                            name="email"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Button variant="contained" color="success" >
                        LOGIN
                    </Button>

                </Box>
            </Modal>
        </>
    )
}

export default ModalCreateProduct