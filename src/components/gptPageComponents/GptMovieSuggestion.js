import React from 'react'
import { useSelector } from 'react-redux'
import GptMovieList from './GptMovieList';
const GptMovieSuggestion = () => {
    const { movieNames, searchMovies } = useSelector(store => store.gpt);
    if (searchMovies === null)
        return null;

    return (
        <div className='m-4 p-4  '>
            <GptMovieList title={movieNames[0]} movies={searchMovies} />
        </div>
    )
}

export default GptMovieSuggestion