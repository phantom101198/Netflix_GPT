import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSeachView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearMovieResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
    },
})

export const { toggleGptSeachView, addGptMovieResults, clearMovieResults } = GptSlice.actions;

export default GptSlice.reducer;