import React, { useState, useEffect } from 'react';

export const MovieContext = React.createContext()

const MovieProvider = ({ children }) => {
    const [title, setTitle] = useState('football')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    async function getMovies() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=ba6f707d&s=${title}`)
        res = await res.json()
        setMovies(res)
        setLoading(true)
    }

    useEffect(() => {
        getMovies(title)
    }, []);

    return (
        <MovieContext.Provider value={{ title, setTitle, movies, loading }}>
            <MovieContext.Consumer>
                {
                    () => children
                }
            </MovieContext.Consumer>
        </MovieContext.Provider>
    );
}

export default MovieProvider;
