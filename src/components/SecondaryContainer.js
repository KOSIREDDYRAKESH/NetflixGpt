import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    //console.log(movies);
    return (
        movies.nowPlayingMovies && (

            <div className='md:-mt-48'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Most Popular"} movies={movies.popularMovies} />
                <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
            </div>
        )
    )
}

export default SecondaryContainer