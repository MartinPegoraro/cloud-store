import React, { useState } from 'react'
import { Typography, Box, Modal, TextField, Button, Select, MenuItem, Alert } from '@mui/material';
import style from './AdminPage.module.css'
import { useRouter } from 'next/router'
import ModalAddSize from './ModalAddSize';
import { productApi } from '@/pages/api/allApi';

const ModalCreateProduct = ({ open, handleClose, fetchData }) => {
    const [fieldMissing, setFieldMissing] = useState(false)
    const [openModalSize, setOpenModalSize] = useState(false)
    const [idProduct, setIdProduct] = useState(false)

    const [createProduct, setCreateProduct] = useState({
        name: "",
        brand: "",
        description: "",
        category: "",
        season: "Verano",
        material: "",
        price: "",
        gender: "Unisex",
        img: "",
        miniature: ""
    })

    const router = useRouter()
    const handleChange = (e) => {
        const { value, name } = e.target
        setCreateProduct({ ...createProduct, [name]: value })
    };
    const onInputChange = (e) => {
        const { value, name } = e.target
        if (name === 'price') {
            setCreateProduct({ ...createProduct, [name]: Number(value) })
        } else if (name === 'img') {
            setCreateProduct({ ...createProduct, [name]: value, miniature: value })
        } else {
            setCreateProduct({ ...createProduct, [name]: value })
        }

    };
    const handleSubmit = async () => {
        const areAllFieldsFilled = Object.values(createProduct).every(value => {
            if (typeof value === 'string') {
                return value.trim() !== "";
            }
            return true;
        });

        if (areAllFieldsFilled) {
            const result = await productApi.createOneProduct(createProduct)
            fetchData()
            setIdProduct(result[0]?.id)
            setOpenModalSize(true)
        } else {
            setFieldMissing(true)
            setTimeout(() => {
                setFieldMissing(false)
            }, 3000);
        }
    };

    const handleCloseAddSize = () => setOpenModalSize(false)

    return (
        <>
            <ModalAddSize
                open={openModalSize}
                handleCloseAddSize={handleCloseAddSize}
                idProduct={idProduct}
            />
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
                            onChange={onInputChange}
                            value={createProduct.name}
                            name="name"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Marca</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.brand}
                            name="brand"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Descripcion</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.description}
                            name="description"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Categoria</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.category}
                            name="category"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Genero</Typography>
                        <Select
                            sx={{ flexGrow: 1, mb: 2 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='gender'
                            value={createProduct.gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Hombre'}>Hombre</MenuItem>
                            <MenuItem value={'Mujer'}>Mujer</MenuItem>
                            <MenuItem value={'Unisex'}>Unisex</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Temporada</Typography>
                        <Select
                            sx={{ flexGrow: 1, mb: 2 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={createProduct.season}
                            name='season'
                            onChange={handleChange}
                        >
                            <MenuItem value={'Verano'}>Verano</MenuItem>
                            <MenuItem value={'Otoño'}>Otoño</MenuItem>
                            <MenuItem value={'Invierno'}>Invierno</MenuItem>
                            <MenuItem value={'Primavera'}>Primavera</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Material</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.material}
                            name="material"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Precio</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.price}
                            name="price"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                            type="number"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Imagenes</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={createProduct.img}
                            name="img"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mb: 1 }}>
                        Crear Producto
                    </Button>
                    {
                        fieldMissing &&
                        <Alert severity="error">Faltan cargar campos, complete todos los campos por favor.</Alert>
                    }
                </Box>
            </Modal>
        </>
    )
}

export default ModalCreateProduct