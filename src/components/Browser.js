
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import BrowserHeader from './BrowserHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './gptPageComponents/GptSearch';
import { useSelector } from 'react-redux';

const Browser = () => {
    const showGptPage = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useUpComingMovies();



    return (
        <div>
            <BrowserHeader />
            {
                showGptPage ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>}


        </div>
    )
}

export default Browser;