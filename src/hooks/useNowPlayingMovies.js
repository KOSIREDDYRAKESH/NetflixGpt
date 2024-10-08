import { useDispatch } from 'react-redux';
import { API_GET } from '../untils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../untils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', API_GET);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;