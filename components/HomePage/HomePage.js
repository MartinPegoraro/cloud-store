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
import { productApi } from '../../src/pages/api/allApi'


function HomePage() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const [dummyData, setDummyData] = useState([])
    const [realData, setRealData] = useState([])

    const openMenu = useSelector(selectMenuVisibility)
    const router = useRouter()

    // const fetchData = async () => {
    //     const res = await axios.get('api/dummyData')
    //     setDummyData(res.data)
    // }
    const fetchData = async () => {
        try {
            // const res = await axios.get('api/dummyData')
            // setDummyData(res.data)
            const resAllSize = await productApi.getAllProduct();
            setRealData(resAllSize?.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };



    useEffect(() => {
        fetchData();
    }, [])
    console.error(realData);

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
                            {realData
                                ?.sort((a, b) => new Date(b.product_upload_date) - new Date(a.product_upload_date))
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
                            {realData
                                ?.sort((a, b) => new Date(b.product_upload_date) - new Date(a.product_upload_date))
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
                            {realData?.map((item) => (
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

                            <ImageList sx={{ width: '100%', }} cols={5}>
                                {realData
                                    ?.sort((a, b) => new Date(b.product_upload_date) - new Date(a.product_upload_date))
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
                            <ImageList sx={{ width: '100%' }} cols={5}>
                                {realData
                                    ?.sort((a, b) => new Date(b.product_upload_date) - new Date(a.product_upload_date))
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
