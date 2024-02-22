import React from 'react'
import {
    IconButton,
    Button,
    Typography,
    Grid,
    Toolbar,
    Box,
    AppBar,
    Avatar,
    Badge
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toggleMenuVisibility, selectMenuVisibility } from './Redux/MenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { verifyShoppingCart, productsShoppingCart } from './Redux/ShoppingCart';

export default function NavBar() {

    const dispatch = useDispatch()
    const openMenu = useSelector(selectMenuVisibility)
    const verifyCart = useSelector(productsShoppingCart)
    const router = useRouter()

    const amoutProductcart = verifyCart.length

    const handleGoCart = () => { router.push('/textil-hugo/cart') }

    const handleBack = () => {
        router.back()
    }
    const handleBackMenu = () => {
        router.push('/textil-hugo')
    }

    const handleMenuClick = () => {
        if (!openMenu) {
            dispatch(toggleMenuVisibility({ isTrue: true }));
        } else {
            dispatch(toggleMenuVisibility({ isTrue: false }));

        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={4}>
                            {router.pathname === '/textil-hugo' ?

                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleMenuClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                :
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleBack}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                            }
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: 'center' }}>
                            <IconButton size='small' onClick={handleBackMenu}>
                                <Avatar
                                    alt="TextilHugo"
                                    src="/textil-hugo.png"
                                    sx={{ width: 60, height: 60 }}
                                />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3.9} sx={{ textAlign: 'right' }}>
                            <Badge badgeContent={amoutProductcart} color="error"  >
                                <ShoppingCartIcon fontSize='large' onClick={handleGoCart} sx={{ cursor: 'pointer' }} />
                            </Badge>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
