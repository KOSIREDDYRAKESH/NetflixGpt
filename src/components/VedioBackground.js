import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VedioBackground = ({ movieId }) => {
    const trailer = useSelector(store => store.movies.trailerVedio);
    useMovieTrailer(movieId);
    if (!trailer)
        return null;
    console.log(trailer)
    return (
        <div >
            <div className='md:absolute md:mt-[5vh] md:w-screen md:h-[99vh]'></div>
            <iframe className='w-screen aspect-video'
                allowFullScreen=""
                src={"https://www.youtube-nocookie.com/embed/" + trailer?.key + "?loop=1&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; playsinline"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

        </div>
    )
}

export default VedioBackground;