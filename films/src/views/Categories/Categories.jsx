import React, { useContext } from 'react';
import Videosequence from '../../Components/Videosequence/Videosequence';
import { MovieContext } from '../../Provider/MovieProvider';

const Categories = () => {
    const { movies } = useContext(MovieContext)
    return (
        <div>
            <Videosequence arr={movies.Search.slice(0, 5)} title="Top Movies" />
            <Videosequence arr={movies.Search.slice(5, 10)} title="Horror films" />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Comedy" />
            <Videosequence arr={movies.Search.slice(5, 10)} title="TV Shows" />
            <Videosequence arr={movies.Search.slice(0, 5)} title="Trillers" />
        </div>
    );
}

export default Categories;
