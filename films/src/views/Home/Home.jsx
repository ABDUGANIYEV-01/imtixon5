import React, { useContext } from 'react';
import Homevidcenter from '../../Components/Homevidcentr/Homevidcentr';
import Videosequence from '../../Components/Videosequence/Videosequence';
import HeaderMovie from '../../Components/headerMovie/headerMovie'
import { MovieContext } from '../../Provider/MovieProvider';

const Home = () => {

    const { movies } = useContext(MovieContext)

   

    return (
        <div>

            <Homevidcenter arr={movies.Search} />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Last Watch" />
            <Videosequence arr={movies.Search.slice(5, 10)} title="Top Movies" />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Top TV Show" />
            <HeaderMovie arr={movies.Search} />

        </div>
    );
}

export default Home;
