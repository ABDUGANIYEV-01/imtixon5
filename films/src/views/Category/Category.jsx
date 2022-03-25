// import { fireEvent } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error/Error';



const Catagory = () => {
    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const API = 'https://www.omdbapi.com/?s=Batman&page=5&apikey=8b0efe8d'
    useEffect(() => {
        axios({
            url: `${API}`,
            method:'GET',
           
            
        
        }) 
        .then(res => { 
            console.log([res.data]);           
            setPosts([res.data])
            setLoading(false)    
            setError("")
        }).catch(err => {
           setError(err.message)
        })
    }, [])
    return (
        <div className='blog container'>
            {error ? <Error error={error} /> :
                loading ? "Loading....." :  
                    posts.length === 0 ? "Posts not found" :
                        posts.flatMap((element , index) => {
                            return <div key={index}>
                                {element?.Title}
                                <p>{element?.Year}wefrg</p>
                            </div>
                        }) 
            }
        </div>
    );
}

export default Catagory;
