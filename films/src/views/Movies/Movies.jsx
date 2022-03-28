import React, { useContext } from 'react';
import Singlemovie from '../../Components/Singlemovie/Singlemovie';
import Videosequence from '../../Components/Videosequence/Videosequence';
import { MovieContext } from '../../Provider/MovieProvider';

const Movies = () => {
    const { movies } = useContext(MovieContext)

    if (!movies.Search) {
        return <div className="container">
            <h2 style={{ margin: "60px 0 160px" }}>Movies not found</h2>
        </div>
    }

    return (
        <>
            <Singlemovie />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Last watch" />
            <Videosequence arr={movies.Search.slice(5, 10)} title="Top Movies" />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Top TV Show" />
        </>
    );
}

export default Movies;
