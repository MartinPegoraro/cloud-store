import React, { useState } from 'react'

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

function HomePage() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const [state, setState] = useState('')
    const [resultItem, setResultItem] = useState([])
    const openMenu = useSelector(selectMenuVisibility)

    const filterState = (selection) => {
        setState(selection)
        const resultFilter = itemData.filter((item) => {
            return item.title === selection
        })

        setResultItem(resultFilter)
    }

    console.log(state);

    const handleOpen = (item) => {
        // setImage(item)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
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
                                    <ListItemText onClick={() => filterState('Hombre')}>Hombre</ListItemText>

                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <WomanIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => filterState('Mujer')}>Mujer</ListItemText>

                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <ChildCareIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => filterState('Niños')}>Niños</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <SportsBaseballIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => filterState('Deportivo')}>Deportivo</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <LoyaltyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText onClick={() => filterState('Sale')}>SALE</ListItemText>
                                </MenuItem>
                                <Divider />
                                <Typography sx={{ textAlign: 'center' }}>Indumentaria</Typography>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <KeyboardCommandKeyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Remeras</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <KeyboardCommandKeyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Pantalones</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <KeyboardCommandKeyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Calzados</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <KeyboardCommandKeyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Abrigos</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <KeyboardCommandKeyIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Ropa interior</ListItemText>
                                </MenuItem>
                                <Divider />
                                <Typography sx={{ textAlign: 'center' }}>Información</Typography>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <InfoIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Sobre Nosotros</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <ContactsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Contactanos</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid item xs={9} sx={{ p: 2 }}>
                        <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                            {state !== '' ?
                                resultItem.map((item) => (
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
                                :
                                itemData.map((item) => (
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
                                                subtitle={<Typography>$ {item.price} </Typography>}

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
                            {state !== '' ?
                                resultItem.map((item) => (
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
                                :
                                itemData.map((item) => (
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

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Hombre',
        description: 'fdghfdhjk fghdsf',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Mujer',
        description: 'fghkhglty df',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Mujer',
        description: ' fghjfgkf gjhfghj',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Niños',
        description: 'fg hjfghj fhg',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Deportivo',
        description: ' dfghjgfj jkgh',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Sale',
        description: ' asdfh sdfg ',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Sale',
        description: 'sdf asdfdfg d',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Hombre',
        description: ' asdfasd h sdfh ',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Hombre',
        description: '',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Mujer',
        description: 'asdas asdf sdfgs ',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        description: ' asdfasdg sdf hsfd h',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        description: ' sdafas hsfg hj',
        price: 135
    },
];