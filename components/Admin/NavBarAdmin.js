import React from 'react'
import { AppBar, TextField, Box, Toolbar, Autocomplete, InputAdornment, Avatar } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBarAdmin() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="static"  >
                <Toolbar>
                    <Box sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', m: 2, }}>
                        <Avatar alt="TH" src="textil-hugo.png" />
                    </Box>
                    <TextField

                        error
                        sx={{ width: '50%' }}
                        id="input-with-icon-textfield"
                        label="Buscar"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    {/* <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search input"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    /> */}

                </Toolbar>
            </AppBar>
        </Box>
    )
}
