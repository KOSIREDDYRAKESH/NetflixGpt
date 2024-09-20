import React from 'react'
import { img_CDN_URL } from '../../untils/constants';
const GptMovieCard = ({ popularity, releaseDate, originalTitile, posterPath, language, rating }) => {
    if (!posterPath) return null;
    return (
        <div className='flex text-white w-[100%] md:w-[50%]'>
            <div className=' md:w-[50%] m-8'>
                <img
                    className='rounded-xl'
                    src={img_CDN_URL + posterPath}
                    alt='poster' />
            </div>

            <div className='bg-gradient-to-b from-red-900 rounded-3xl md:my-[15%] m-5 h-[50%] p-10 w-[100%] md:w-[50%]'>
                <h1 className='text-3xl font-bold'>{originalTitile}</h1>
                <p className='mt-3 text-slate-300'>Original Language - {language}</p>
                <p className='mt-2 text-slate-300'>Release Date :{releaseDate}</p>
                <p className='mt-2 text-slate-300'>Popularity :<span className=' underline'>{popularity}</span></p>
                <p className='text-slate-300'>Rating :<span className=' underline'>{rating}</span></p>

            </div>
        </div>
    )
}
export default GptMovieCard;