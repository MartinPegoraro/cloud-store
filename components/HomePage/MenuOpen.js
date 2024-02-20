import React from 'react'
import {
    Grid,
    Paper,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    ImageList,
    ImageListItem,
    Button,
    Box,
    ImageListItemBar,
} from '@mui/material'
import WomanIcon from '@mui/icons-material/Woman';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ManIcon from '@mui/icons-material/Man';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useRouter } from 'next/router';


export default function MenuOpen() {

    const router = useRouter()

    const selectionCategories = (selection) => {
        router.push({
            pathname: `/textil-hugo/categories/${selection}`,
        })
    }

    const handleAbout = () => {
        router.push('/textil-hugo/about')
    }

    const handleContact = () => {
        router.push('/textil-hugo/contact')

    }
    return (
        <>
            <Paper sx={{ width: '100%', maxWidth: '100%' }}>
                <MenuList>
                    <Typography sx={{ textAlign: 'center' }}>Categorias</Typography>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <ManIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Hombre')}>Hombre</ListItemText>

                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <WomanIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Mujer')}>Mujer</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ChildCareIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Niños')}>Niños</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <SportsBaseballIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Deportivo')}>Deportivo</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <LoyaltyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Sale')}>SALE</ListItemText>
                    </MenuItem>
                    <Divider />
                    <Typography sx={{ textAlign: 'center' }}>Indumentaria</Typography>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <KeyboardCommandKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Remeras')}>Remeras</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <KeyboardCommandKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Pantalones')}>Pantalones</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <KeyboardCommandKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Calzados')}>Calzados</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <KeyboardCommandKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('Abrigos')}>Abrigos</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <KeyboardCommandKeyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={() => selectionCategories('RopaInterior')}>Ropa interior</ListItemText>
                    </MenuItem>
                    <Divider />
                    <Typography sx={{ textAlign: 'center' }}>Información</Typography>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon >
                            <InfoIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={handleAbout}>Sobre Nosotros</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContactsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText onClick={handleContact}>Contactanos</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
        </>
    )
}
