import React, { useEffect, useState } from 'react'
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
    FormControlLabel,
    Switch,
    FormGroup
} from '@mui/material'
import ManIcon from '@mui/icons-material/Man';
import { useRouter } from 'next/router';

export default function Categories() {
    const [clothing, setClothing] = useState([])
    const [routerQuery, setRouterQuery] = useState([])
    const [showClothes, setShowClothes] = useState([])
    const [prevStateClothes, setPrevStateClothes] = useState([])


    const [checkedTshirt, setCheckedTshirt] = useState(false);
    const [checkedPants, setCheckedPants] = useState(false);
    const [checkedShoe, setCheckedShoe] = useState(false);

    const router = useRouter()
    console.log(prevStateClothes, 'prevStateClothes');
    // console.log(showClothes, 'showClothes');

    const handleChange = (e) => {
        const { checked, value } = e.target

        if (value === 'Remeras') {
            if (checked) {
                const newClothing = clothing.filter((cloth) => {
                    return cloth.description === value
                })
                setPrevStateClothes(showClothes)
                setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
            } else {
                setShowClothes(prevStateClothes)
            }
            setCheckedTshirt(checked)
        } else if (value === 'Pantalones') {
            if (checked) {
                const newClothing = clothing.filter((cloth) => {
                    return cloth.description === value
                })
                setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
            }
            setCheckedPants(checked)
        } else if (value === 'Zapatillas') {
            if (checked) {
                const newClothing = clothing.filter((cloth) => {
                    return cloth.description === value
                })
                setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
            }
            setCheckedShoe(checked)
        }
    };

    useEffect(() => {
        let queries = router.query.id
        const result = itemData
            .filter((item) => item.title === queries || item.description === queries)
            .map((item) => {
                if (item.title === queries) {
                    return { ...item, matchedOn: 'title' }
                } else if (item.description === queries) {
                    return { ...item, matchedOn: 'description' }
                }
            });

        setRouterQuery(queries)
        setPrevStateClothes(result)
        setClothing(result)
    }, [router.query.id])

    return (
        <>
            <Grid container>

                <Grid item xs={2}>
                    <Paper sx={{ width: '100%', maxWidth: '100%' }}>
                        {clothing[0]?.matchedOn === 'title' ?
                            <>
                                <Typography sx={{ textAlign: 'center' }}>Filtros</Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ textAlign: 'left' }}>Remeras</Typography>
                                    <Switch color="warning"
                                        checked={checkedTshirt}
                                        onChange={handleChange}
                                        value="Remeras"
                                    />
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ textAlign: 'left' }}>Pantalones</Typography>
                                    <Switch color="warning"
                                        checked={checkedPants}
                                        onChange={handleChange}
                                        value="Pantalones"
                                    />
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ textAlign: 'left' }}>Zapatilllas</Typography>
                                    <Switch color="warning"
                                        checked={checkedShoe}
                                        onChange={handleChange}
                                        value="Zapatillas"
                                    />
                                </Box>

                                {/* <Box display="flex" alignItems="flex-start" flexDirection="column">
                                    <FormControlLabel
                                        checked={checked}
                                        onChange={handleChange}
                                        value="Remeras"
                                        control={<Switch color="warning" />}
                                        label="Remeras"
                                        labelPlacement="start"
                                    />
                                </Box> */}
                            </>
                            :
                            <MenuList>
                                <Typography sx={{ textAlign: 'center' }}>Filtros</Typography>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <ManIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Hombre</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <ManIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Mujer</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <ManIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Niño</ListItemText>
                                </MenuItem>
                            </MenuList>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={10} sx={{ p: 2 }}>
                    <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                        {showClothes.length === 0 ?
                            clothing.map((item) => (
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
                            :
                            showClothes.map((item) => (
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
        </>
    )
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Hombre',
        description: 'Remeras',
        price: 100
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Mujer',
        description: 'Remeras',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Mujer',
        description: ' Calzados',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Niños',
        description: 'Calzados',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Deportivo',
        description: 'Abrigos',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Sale',
        description: 'Abrigos',
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
        description: 'Remeras',
        price: 200
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Hombre',
        description: 'Pantalones',
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
        title: 'Hombre',
        description: 'Zapatillas',
        price: 135
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Hombre',
        description: 'Invierno',
        price: 135
    },
];