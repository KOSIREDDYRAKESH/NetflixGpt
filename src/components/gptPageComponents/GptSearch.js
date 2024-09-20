import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { netflixBgImg } from '../../untils/constants'

const GptSearch = () => {
    return (
        <>
            <div className=' fixed -z-10'>
                <div className=' fixed bg-black h-screen w-screen'>
                    <img className=' object-cover h-screen w-screen bg-blend-lighten hover:bg-blend-darken opacity-40'
                        src={netflixBgImg}
                        alt='BG-img'
                    />
                </div>

            </div>

            <GptSearchBar />
            <GptMovieSuggestion />

        </>
    )
}

export default GptSearch