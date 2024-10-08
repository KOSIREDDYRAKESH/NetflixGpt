import { createSlice } from "@reduxjs/toolkit"
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        trailerVedio: null,
        nowPlayingMovies: null,
        popularMovies: null,
        upComingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVedio: (state, action) => {
            state.trailerVedio = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },

    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies, addUpComingMovies, addTrailerVedio, addPopularMovies } = movieSlice.actions;