import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        searchMovies: null,
        movieNames: null
    },
    reducers: {
        toogleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, searchMovies } = action.payload;
            state.movieNames = movieNames;
            state.searchMovies = searchMovies;
        }
    }
});

export const { toogleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;