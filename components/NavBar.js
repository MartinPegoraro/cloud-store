import React from 'react'
import {
    IconButton,
    Button,
    Typography,
    Grid,
    Toolbar,
    Box,
    AppBar,
    Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toggleMenuVisibility, selectMenuVisibility } from './Redux/MenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function NavBar() {

    const dispatch = useDispatch()
    const openMenu = useSelector(selectMenuVisibility)
    const router = useRouter()

    const handleBack = () => {
        router.back()
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
                            <IconButton size='small'>
                                <Avatar
                                    alt="TextilHugo"
                                    src="/textil-hugo.png"
                                    sx={{ width: 60, height: 60 }}
                                />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3.9} sx={{ textAlign: 'right' }}>

                            <ShoppingCartIcon fontSize='large' />
                        </Grid>
                        <Grid item xs={0.1} sx={{ textAlign: 'right' }}>
                            <Typography sx={{
                                position: 'absolute',
                                color: 'red',
                                bottom: '30px',
                                right: '50px',
                                fontSize: 15,
                            }}>1</Typography>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
