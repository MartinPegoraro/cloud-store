import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Grid,
    Typography,
    ImageList,
} from '@mui/material'
import { toggleMenuVisibility, selectMenuVisibility } from '../Redux/MenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ButtonImgList from './ButtonImgList';
import MenuOpen from './MenuOpen';


function HomePage() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const [dummyData, setDummyData] = useState([])
    const openMenu = useSelector(selectMenuVisibility)
    const router = useRouter()

    const fetchData = async () => {
        const res = await axios.get('api/dummyData')
        setDummyData(res.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {openMenu ?
                <Grid container>
                    <Grid item xs={3}>
                        <MenuOpen />
                    </Grid>
                    <Grid item xs={9} sx={{ p: 1 }}>
                        <Typography sx={{ textAlign: 'center', color: 'white', background: 'red', width: '25%', margin: 'auto' }}>Nuevos ingresos</Typography>
                        <ImageList sx={{ width: '100%', }} cols={5}>
                            {dummyData
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 5)
                                .map((item) => (
                                    <ButtonImgList
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </ImageList>
                        <Typography sx={{ textAlign: 'center', color: 'white', background: 'red', width: '25%', margin: 'auto' }}>LO MAS VENDIDO</Typography>
                        <ImageList sx={{ width: '100%' }} cols={5}>
                            {dummyData
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 5)
                                .map((item) => (
                                    <ButtonImgList
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </ImageList>
                        <Typography sx={{ textAlign: 'center', color: 'white', background: 'red', width: '25%', margin: 'auto' }}>TODOS LOS PRODUCTOS</Typography>
                        <ImageList sx={{ width: '100%' }} cols={5}>
                            {dummyData.map((item) => (
                                <ButtonImgList
                                    key={item.id}
                                    item={item}
                                />
                            ))
                            }
                        </ImageList>

                    </Grid>
                </Grid>
                :
                <>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography sx={{ textAlign: 'center', color: 'white', background: 'red', width: '25%', margin: 'auto' }}>Nuevos ingresos</Typography>

                            <ImageList sx={{ width: '100%', }} cols={4}>
                                {dummyData
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 5)
                                    .map((item) => (
                                        <ButtonImgList
                                            key={item.id}
                                            item={item}
                                        />
                                    ))
                                }
                            </ImageList>

                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Typography sx={{ textAlign: 'center', color: 'white', background: 'red', width: '25%', margin: 'auto' }}>LO MAS VENDIDO</Typography>
                            <ImageList sx={{ width: '100%', }} cols={4}>
                                {dummyData
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 5)
                                    .map((item) => (
                                        <ButtonImgList
                                            key={item.id}
                                            item={item}
                                        />
                                    ))
                                }
                            </ImageList>

                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                </>

            }
        </>
    )
}

export default HomePage
