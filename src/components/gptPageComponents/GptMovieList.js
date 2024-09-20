import React from 'react'
import GptMovieCard from "./GptMovieCard";
const GptMovieList = ({ title, movies }) => {
    if (!movies) return null;
    return (
        <div className=' bg-black bg-opacity-50 rounded-3xl text-white py-4 mt-[50%] md:mt-14 px-6'>
            <h1 className='text-3xl md:my-4'>{title}</h1>
            <div className='flex flex-wrap'>
                {movies?.map(movie =>
                    < GptMovieCard key={movie.id}
                        originalTitile={movie.original_title}
                        releaseDate={movie.release_date}
                        popularity={movie.popularity}
                        language={movie.original_language} rating={movie.vote_average}
                        posterPath={movie.poster_path} />)}

            </div>
        </div>
    )
}

export default GptMovieList;