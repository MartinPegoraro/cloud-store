import React, { use, useState } from 'react'
import { Typography, Box, Modal, TextField, Button, Select, MenuItem, Alert } from '@mui/material';
import style from './AdminPage.module.css'
import { productApi } from '@/pages/api/allApi';

const ModalAddSize = ({ open, handleCloseAddSize, idProduct }) => {
    const [fieldSize, setFieldSize] = useState({ product_id: '', size: '', color: '', amount: '' })
    const [correct, setCorrect] = useState(false)
    const onInputChange = async (e) => {
        const { value, name } = e.target
        setFieldSize({ ...fieldSize, [name]: value })
    }

    const handleSubmit = async () => {
        const data = {
            product_id: idProduct,
            size: fieldSize.size,
            color: fieldSize.color,
            amount: fieldSize.amount
        }

        const result = await productApi.createOneSize(data)
        if (result?.status === 200) {
            setFieldSize({
                size: '',
                color: '',
                amount: ''
            })
            setCorrect(true)
            setTimeout(() => {
                setCorrect(false)

            }, 4000);
        }
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleCloseAddSize}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={style.loginModalContainer}
            >
                <Box
                    className={style.loginModalCard}
                >
                    <Box>
                        <Typography variant='h6' sx={{ mb: 1, width: '70%', display: 'inline-block', color: 'black' }} >Cargar un talle al producto</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Talle del producto</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={fieldSize.size}
                            name="size"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Color del producto</Typography>
                        <TextField
                            onChange={onInputChange}
                            value={fieldSize.color}
                            name="color"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='caption' sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, width: 200 }} >Cantidad de este talle y color </Typography>
                        <TextField
                            onChange={onInputChange}
                            value={fieldSize.amount}
                            name="amount"
                            size='small'
                            sx={{ flexGrow: 1, mb: 2 }}
                            required
                            id="outlined-required"
                            type="number"
                        />
                    </Box>
                    <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mb: 1 }}>
                        Cargar talle
                    </Button>
                    {
                        correct &&
                        <Alert severity="success">Se cargo el talle correctamente, desea cargar mas?.</Alert>
                    }
                </Box>
            </Modal>
        </>
    )
}

export default ModalAddSize