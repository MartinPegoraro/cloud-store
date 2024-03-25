import React, { useState } from 'react'
import {
    Grid,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ModalCreateProduct from './ModalCreateProduct';

export default function MenuHomeAdmin({ deleteProduct, setDeleteProduct, modifyProduct, setModifyProduct, fetchData, setSelectOneProduct, selectOneProduct }) {
    const [open, setOpen] = useState(false)


    const handleDelete = () => {
        if (!deleteProduct) {
            setDeleteProduct(true)
        } else {
            setDeleteProduct(false)
        }
    }

    const handleModify = () => {
        if (!modifyProduct) {
            setModifyProduct(true)
        } else {
            setModifyProduct(false)
        }
    }
    const handleClose = () => setOpen(false)

    const handleOpenModalCreate = () => {
        setOpen(true)
    }

    return (
        <>
            <ModalCreateProduct
                open={open}
                handleClose={handleClose}
                fetchData={fetchData}
            />
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectOneProduct(false)}>
                                <ListItemIcon>
                                    <AllInclusiveIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mostrar todos los productos" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleOpenModalCreate}>
                                <ListItemIcon>
                                    <CreateNewFolderIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cargar nuevo producto" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleModify} disabled={selectOneProduct}>
                                <ListItemIcon>
                                    <AutoFixHighIcon />
                                </ListItemIcon>
                                <ListItemText primary="Modificar producto" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleDelete} disabled={selectOneProduct}>
                                <ListItemIcon>
                                    <DeleteForeverIcon />
                                </ListItemIcon>
                                <ListItemText primary="Eliminar un Producto" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton disabled={selectOneProduct}>
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar stock a un producto" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </>
    )
}
