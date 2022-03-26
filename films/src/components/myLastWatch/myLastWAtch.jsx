import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Error from '../Error/Error';
import "./MyLastWatch.scss"


const MyLastWatch = () => {
   const inputRef = useRef()
    
    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const hendelchange = ()=> {
        console.log(inputRef.current.value)
    }

    useEffect(() => {
        axios({
            url: (`https://www.omdbapi.com/?s=hulk&page=1&apikey=8b0efe8d`),
            
            method:'GET',
           
            
        
        }) 
        .then(res => { 
            console.log([res.data.Search]);           
            setPosts(res.data.Search)
            setLoading(false)    
            setError("")
        }).catch(err => {
           setError(err.message)
        })
    }, [])
    return (
        <div className='blog '>  
    <input ref={inputRef} type="search" onClick={hendelchange}  />
            {error ? <Error error={error} /> :
                loading ? "Loading....." :  
                    posts.length === 0 ? "Posts not found" :

                        posts.map( ( element  , index  ) => {
                            return <div className='movis' key={index}>
                               <img className='movis__img' src={element?.Poster}></img>
                                {element?.Title}
                                <p>{element?.Year}</p>
                                <p>{element?.Genre}</p>
                            </div>
                        }) 
            }
        </div>
    );
}

export default MyLastWatch;