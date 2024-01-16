import React, { useState } from 'react'
import { Typography, Box, Modal } from '@mui/material';
import style from './HomePage.module.css'
import { useRouter } from 'next/router'

const ModalImg = ({ open, handleClose, image }) => {
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
                        <Typography variant='h6' sx={{ mb: 1, width: '70%', display: 'inline-block', color: 'black' }} >Inicia sesión en tu cuenta</Typography>
                    </Box>


                </Box>
            </Modal>
        </>
    )
}

export default ModalImg