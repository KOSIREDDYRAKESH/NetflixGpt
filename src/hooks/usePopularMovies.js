import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../untils/movieSlice";
import { API_GET } from "../untils/constants";

const usePopularMovies = () => {
    const storeData = useSelector(store => store.movies.popularMovies)
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', API_GET)
            .then(response => response.json())
            .then(response =>

                dispatch(addPopularMovies(response.results))
            )
    }

    useEffect(() => {
        !storeData && getNowPlayingMovies();
    }, []);

}

export default usePopularMovies;