import React, { useRef } from 'react'
import lang from "../../untils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import { addGptMovieResult } from '../../untils/gptSlice';
//import openai from "../untils/openAi"
const GptSearchBar = () => {
    const language = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me name of 5 movies,comma seperated like the example result given ahead. Example Result : Kalki,Jersy,Sita Ramam,Mahanati,Rangastalam";
        // make api call to get the movie results
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(gptResults.choices);

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZlODIyYWIyMDEwMDMwZTdlNmJjNzYxM2VlMTY3OSIsIm5iZiI6MTcyNTAzOTQzMS43NTEzOTMsInN1YiI6IjY2ZDA1MWYzYTkyNTU1N2EzZTMxOTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KrcxXV1POOl-T5TR4zlpAVYH548Wj5gZwBMZysaobbU'
            }
        };
        let seeMovies;
        await fetch("https://api.themoviedb.org/3/search/movie?query=" + searchText.current.value + "&include_adult=false&language=en-US&page=1", options)
            .then(response => response.json())
            .then(response => seeMovies = response.results)
            .catch(err => console.error(err));

        let Names = [];
        seeMovies.map(movie => Names.push(movie.title));
        console.log(seeMovies)
        console.log(Names);
        if (!seeMovies && !Names) return null;
        dispatch(addGptMovieResult({ searchMovies: seeMovies, movieNames: Names }));
    }
    return (
        <div className=' md:pt-[7%] md:w-[70%] md:mx-auto flex justify-center  '>
            <form className=' fixed md:w-[65%] w-[90%] mt-[35%] md:mt-[0] bg-gradient-to-b rounded-full from-red-700 md:p-5 grid grid-cols-12 py-5 p-5' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    className='col-span-9 p-2 md:col-span-9 rounded-xl md:px-16 md:h-[130%]' type='text' placeholder={lang[language].gptSearchPlaceholder} />
                <button className='bg-purple-500 col-span-3 md:col-span-3   md:mx-4 h-12 py-2 text-white rounded-xl'
                    onClick={handleGptSearchClick}
                >{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar