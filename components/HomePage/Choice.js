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
import { productApi } from '@/pages/api/allApi';


export default function Choice() {
    const [clothing, setClothing] = useState([])
    const [routerQuery, setRouterQuery] = useState([])
    const [showClothes, setShowClothes] = useState([])
    const [query, setQuery] = useState([])

    const [checkedTshirt, setCheckedTshirt] = useState(false);
    const [checkedPants, setCheckedPants] = useState(false);
    const [checkedShoe, setCheckedShoe] = useState(false);

    const router = useRouter()

    const handleOpen = (item) => {
        router.push({ pathname: `/textil-hugo/product/[id]`, query: { id: item.id } })
    }

    const handleChange = (e) => {
        const { checked, value } = e.target

        console.log(checked, value);
        const filterClothes = (name) => {
            const newClothing = clothing.filter((cloth) => cloth.name.toLowerCase() === name.toLowerCase());
            setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
        }

        switch (value) {
            case 'Remera':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedPants) filterClothes('Pantalon');
                    if (checkedShoe) filterClothes('Zapatilla');
                } else {
                    if (!checkedPants && !checkedShoe) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedPants) filterClothes('Pantalon');
                        if (checkedShoe) filterClothes('Zapatilla');
                    }
                }
                setCheckedTshirt(checked);
                break;
            case 'Pantalon':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedTshirt) filterClothes('Remera');
                    if (checkedShoe) filterClothes('Zapatilla');
                } else {
                    if (!checkedTshirt && !checkedShoe) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedTshirt) filterClothes('Remera');
                        if (checkedShoe) filterClothes('Zapatilla');
                    }
                }
                setCheckedPants(checked);
                break;
            case 'Zapatilla':
                setShowClothes([]);
                if (checked) {
                    filterClothes(value);
                    if (checkedTshirt) filterClothes('Remera');
                    if (checkedPants) filterClothes('Pantalon');
                } else {
                    if (!checkedTshirt && !checkedPants) {
                        setShowClothes(clothing);
                    } else {
                        if (checkedTshirt) filterClothes('Remera');
                        if (checkedPants) filterClothes('Pantalon');
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
        const productAll = await productApi.getAllProduct()
        let queries = router.query.id
        const [choice, select] = queries?.split('-');
        if (choice === 'category') {
            const resultProducts = productAll?.data?.filter((prod) => prod.category.toLowerCase() === select.toLowerCase())
            setClothing(resultProducts)
        } else {
            const resultProducts = productAll?.data?.filter((prod) => prod.name.toLowerCase() === select.toLowerCase())
            setClothing(resultProducts)

        }
        setRouterQuery(queries)
        setQuery(choice)
        // setDummyData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [routerQuery])

    return (
        <>
            <Grid container>

                <Grid item xs={2}>
                    <Paper sx={{ width: '100%', maxWidth: '100%' }}>
                        {
                            // clothing[0]?.matchedOn === 'title' ?
                            query === 'category' ?

                                <>
                                    <Typography sx={{ textAlign: 'center' }}>Filtros</Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography sx={{ textAlign: 'left' }}>Remeras</Typography>
                                        <Switch color="warning"
                                            checked={checkedTshirt}
                                            onChange={handleChange}
                                            value="Remera"
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography sx={{ textAlign: 'left' }}>Pantalones</Typography>
                                        <Switch color="warning"
                                            checked={checkedPants}
                                            onChange={handleChange}
                                            value="Pantalon"
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography sx={{ textAlign: 'left' }}>Zapatilllas</Typography>
                                        <Switch color="warning"
                                            checked={checkedShoe}
                                            onChange={handleChange}
                                            value="Zapatilla"
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
                                <Button key={item.id} onClick={() => handleOpen(item)} >

                                    <ImageListItem sx={{ width: '100%', height: '100%' }}>
                                        <img
                                            srcSet={`${item.miniature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.miniature}?w=248&fit=crop&auto=format`}
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
                                <Button key={item.id} onClick={() => handleOpen(item)} >

                                    <ImageListItem sx={{ width: '100%', height: '100%' }}>
                                        <img
                                            srcSet={`${item.miniature}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.miniature}?w=248&fit=crop&auto=format`}
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


