import { createSlice } from "@reduxjs/toolkit";

const tvSerialsSlice = createSlice({
    name: "serials",
    initialState: {
        serialList: null,
    },
    reducers: {
        addTvSerials: (state, action) => {
            state.serialList = action.payload;
        },
    },
})

export const { addTvSerials } = tvSerialsSlice.actions;
export default tvSerialsSlice.reducer;