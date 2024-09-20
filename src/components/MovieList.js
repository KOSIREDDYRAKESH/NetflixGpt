import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='bg-black  text-white md:py-2 px-6'>
            <h1 className=' md:text-3xl md:my-4'>{title}</h1>
            <div className='flex justify-end'>
                <p className='md:text-xl md:my-7 bg-red-500 p-1 rounded-xl absolute'>◃◃ <span className='text-sm'>Swipe left</span></p>
            </div>
            <div className='flex overflow-x-scroll'>
                <div className='flex '>
                    {movies?.map(movie =>
                        < MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList