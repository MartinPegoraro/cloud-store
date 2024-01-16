import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTrue: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenuVisibility: (state, { payload }) => {
            const { isTrue, message } = payload;
            state.isTrue = isTrue;
            state.message = message;
        },
    },
})

export const { toggleMenuVisibility } = menuSlice.actions;

export default menuSlice.reducer;

export const selectMenuVisibility = (state) => state.menu.isTrue;
