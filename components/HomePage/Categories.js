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
import axios from 'axios';


export default function Categories() {
    const [clothing, setClothing] = useState([])
    const [routerQuery, setRouterQuery] = useState([])
    const [showClothes, setShowClothes] = useState([])
    const [dummyData, setDummyData] = useState([])

    const [checkedTshirt, setCheckedTshirt] = useState(false);
    const [checkedPants, setCheckedPants] = useState(false);
    const [checkedShoe, setCheckedShoe] = useState(false);

    const router = useRouter()

    const handleOpen = (item) => {
        router.push({ pathname: `/textil-hugo/product/[id]`, query: { id: item.id } })
    }
    const handleChange = (e) => {
        const { checked, value } = e.target

        const filterClothes = (description) => {
            const newClothing = clothing.filter((cloth) => cloth.description === description);
            setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
        }

        switch (value) {
            case 'Remeras':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedPants) filterClothes('Pantalones');
                    if (checkedShoe) filterClothes('Zapatillas');
                } else {
                    if (!checkedPants && !checkedShoe) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedPants) filterClothes('Pantalones');
                        if (checkedShoe) filterClothes('Zapatillas');
                    }
                }
                setCheckedTshirt(checked);
                break;
            case 'Pantalones':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedTshirt) filterClothes('Remeras');
                    if (checkedShoe) filterClothes('Zapatillas');
                } else {
                    if (!checkedTshirt && !checkedShoe) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedTshirt) filterClothes('Remeras');
                        if (checkedShoe) filterClothes('Zapatillas');
                    }
                }
                setCheckedPants(checked);
                break;
            case 'Zapatillas':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedTshirt) filterClothes('Remeras');
                    if (checkedPants) filterClothes('Pantalones');
                } else {
                    if (!checkedTshirt && !checkedPants) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedTshirt) filterClothes('Remeras');
                        if (checkedPants) filterClothes('Pantalones');
                    }
                }
                setCheckedShoe(checked);
                break;
            default:
                return;
        }

    };


    const fetchData = async () => {
        const res = await axios.get('/api/dummyData')
        let queries = router.query.id
        const result = res?.data
            ?.filter((item) => item.title === queries || item.description === queries)
            ?.map((item) => {
                if (item.title === queries) {
                    return { ...item, matchedOn: 'title' }
                } else if (item.description === queries) {
                    return { ...item, matchedOn: 'description' }
                }
            });

        setRouterQuery(queries)
        setClothing(result)
        setDummyData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [routerQuery])

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
                            clothing?.map((item) => (
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
                            showClothes?.map((item) => (
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


