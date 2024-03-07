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
import React from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function HomeAdmin() {
    return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CreateNewFolderIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Cargar nuevo producto" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
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
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DeleteForeverIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Eliminar un Producto" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon>
                                            <AddCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Agregar stock a un producto" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={9} sx={{ border: '2px solid black' }}>

                </Grid>
            </Grid>
        </>
    )
}

export default HomeAdmin