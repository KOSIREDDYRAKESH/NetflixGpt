import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../untils/movieSlice";
import { API_GET } from "../untils/constants";

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const storeData = useSelector(store => store.movies.upComingMovies)
    const getNowPlayingMovies = async () => {
        //     const options = {
        //         method: 'GET',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZlODIyYWIyMDEwMDMwZTdlNmJjNzYxM2VlMTY3OSIsIm5iZiI6MTcyNTAzOTQzMS43NTEzOTMsInN1YiI6IjY2ZDA1MWYzYTkyNTU1N2EzZTMxOTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KrcxXV1POOl-T5TR4zlpAVYH548Wj5gZwBMZysaobbU'
        //         }
        //     };

        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_GET)
            .then(response => response.json())
            .then(response => dispatch(addUpComingMovies(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        !storeData && getNowPlayingMovies();
    }, []);

}

export default useUpComingMovies;