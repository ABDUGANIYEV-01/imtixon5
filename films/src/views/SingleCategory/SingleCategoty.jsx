import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Videoitem from '../../Components/VideoItem/VideoItem';
import "./SingleCategory.scss";

const SingleCategoty = () => {
    const { title } = useParams()
    const [page, setPage] = useState(1)
    const [films, setfilms] = useState([])


    async function getMoviesByCategory() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=ba6f707d&s=${title}&page=${page}`)
        res = await res.json()
        setfilms(res)
    }

    useEffect(() => {
        getMoviesByCategory()
    }, [page]);

    if (!films.Search) {
        return <div className="container">
            <h2 style={{ margin: "60px 0 160px" }}>Movies not found</h2>
        </div>
    }


    return (
        <div>
            <div className="container">
                <h3 className='singleTitle'>{title}</h3>
                <div className="singleWrapper">
                    {
                        films.Search ? films.Search.map((item, index) => <Videoitem key={index} item={item} />) : <p style={{ marginBottom: "120px" }}> movie not found</p>
                    }
                </div>
                {
                    Math.ceil(films.totalResults / 10) > 1 ? <Stack spacing={2}>
                        <Pagination className='pagination' onChange={(event, page) => {
                            setPage(page)
                            window.scrollTo(0, 0)
                        }} count={Math.ceil(films.totalResults / 10)} variant="outlined" shape="rounded" />
                    </Stack> : <></>
                }
            </div>
        </div>
    );
}

export default SingleCategoty;
