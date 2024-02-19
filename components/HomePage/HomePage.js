import React, { useEffect, useState } from 'react'
import axios from 'axios';
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
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import { toggleMenuVisibility, selectMenuVisibility } from '../Redux/MenuSlice';
import ModalImg from './ModalImg';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


function HomePage() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const [dummyData, setDummyData] = useState([])
    const openMenu = useSelector(selectMenuVisibility)
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

    const handleOpen = (item) => {
        router.push({ pathname: `/textil-hugo/product/[id]`, query: { id: item.id } })
    }
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        const res = await axios.get('api/dummyData')
        setDummyData(res.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <ModalImg
                open={open}
                handleClose={handleClose}
            // image={image}
            />
            {openMenu ?

                <Grid container>

                    <Grid item xs={3}>
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
                    </Grid>
                    <Grid item xs={9} sx={{ p: 2 }}>
                        <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                            {dummyData.map((item) => (
                                <Button key={item.img} onClick={() => handleOpen(item)} >

                                    <ImageListItem sx={{ width: '100%', height: '100%' }}>
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.description}
                                            subtitle={<Typography>$ {item.price}</Typography>}

                                        />
                                    </ImageListItem>
                                </Button>
                            ))
                            }
                        </ImageList>

                    </Grid>
                </Grid>
                :
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                            {dummyData.map((item) => (
                                <Button key={item.img} onClick={() => handleOpen(item)}>
                                    <ImageListItem sx={{ width: '100%', height: '100%' }}>
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.description}
                                            subtitle={<Typography>$ {item.price}</Typography>}
                                        />
                                    </ImageListItem>
                                </Button>
                            ))
                            }
                        </ImageList>
                    </Grid>
                    <Grid item xs={1}></Grid>

                </Grid>
            }
        </>
    )
}

export default HomePage
