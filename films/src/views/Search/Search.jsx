import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import searchIcon from "../../img and vidyo/svg/search.svg";
import Videoitem from '../../Components/VideoItem/VideoItem';
import { MovieContext } from '../../Provider/MovieProvider';
import "./Search.scss"

const Search = () => {
    const { title } = useContext(MovieContext)
    const [inputValue, setInputValue] = useState(title)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const titleRef = useRef()


    async function getMovies() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=8b0efe8d&s=${inputValue}&page=${page}`)
        res = await res.json()
        setMovies(res)
    }

    useEffect(() => {
        getMovies()
    }, [page, inputValue]);


    return (
        <>
            <div className="container">
                <label className='label'>
                    <input ref={titleRef} type="text" defaultValue={inputValue} placeholder='Enter search phrase..' />
                    <button onClick={() => {
                        setInputValue(titleRef.current.value)
                        setPage(1)
                    }}>
                        <img src={searchIcon} alt="icon" />
                    </button>
                </label>

                <h4 className="text">founded moviees</h4>

                <div className="wrapper">
                    {
                        movies.Search ? movies.Search.map((item, index) => <Videoitem item={item} key={index} />) : <p>Movies Not Found</p>
                    }
                </div>

                {
                    Math.ceil(movies.totalResults / 10) > 1 ? <Stack spacing={2}>
                        <Pagination className='pagination' onChange={( page) => {
                            setPage(page)
                            window.scrollTo(0, 0)
                        }} count={Math.ceil(movies.totalResults / 10)} variant="outlined" shape="rounded" />
                    </Stack> : <></>
                }
            </div>
        </>
    );
}

export default Search;
